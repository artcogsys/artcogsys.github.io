import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Publication } from "../components/publications";

const peopleDirectory = path.join(process.cwd(), "people");

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const getPeopleData = () => {
  let data = [];

  const folderNames = getDirectories(peopleDirectory);
  folderNames.forEach((folderName) => {
    const contentPath = path.join(peopleDirectory, folderName);

    const id = folderName;
    let content;
    let img;

    const fileNames = fs.readdirSync(contentPath);

    fileNames.forEach((file) => {
      const fullPath = path.join(contentPath, file);

      if (path.extname(file) == ".md") {
        // Read markdown file as string
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        content = matter(fileContents);
      } else if (path.extname(file) == ".png") {
        img = fs.readFileSync(fullPath, { encoding: "base64" });
      }
    });

    data.push({
      id,
      ...(content.data as { name: string; title: string }),
      img,
    });
  });
  return data;
};

export function getAllPeopleIds() {
  const folderNames = getDirectories(peopleDirectory);
  return folderNames.map((folderName) => {
    return {
      params: {
        id: folderName,
      },
    };
  });
}

export async function getPersonData(id: string) {
  const contentPath = path.join(peopleDirectory, `${id}`);

  const fileNames = fs.readdirSync(contentPath);

  let contentHtml;
  let matterResult;
  let img;
  let publications;

  fileNames.forEach((file) => {
    const fullPath = path.join(contentPath, file);
    if (path.extname(file) == ".md") {
      // Read markdown file as string
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = remark()
        .use(html)
        .processSync(matterResult.content);
      contentHtml = processedContent.toString();
    } else if (path.extname(file) == ".png") {
      img = fs.readFileSync(fullPath, { encoding: "base64" });
    } else if (path.extname(file) == ".json") {
      const rawData = fs.readFileSync(fullPath);
      publications = JSON.parse(rawData.toString());
    }
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    img,
    publications,
    ...(matterResult.data as { name: string; title: string }),
  };
}

export function getPublications(sort: boolean): Array<Publication> {
  const folderNames = getDirectories(peopleDirectory);
  let publications = [];
  folderNames.forEach((folderName) => {
    const contentPath = path.join(peopleDirectory, folderName);
  });

  return publications;
}

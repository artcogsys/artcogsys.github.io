import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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

    console.log("Filenames with the .md extension:");
    fileNames.forEach((file) => {
      const fullPath = path.join(contentPath, file);

      if (path.extname(file) == ".md") {
        // Read markdown file as string
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        content = matter(fileContents);
      } else if (path.extname(file) == ".png") {
        //img = path.join(contentPath, file);
        //img = fullPath;
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

  fileNames.forEach(async (file) => {
    const fullPath = path.join(contentPath, file);
    if (path.extname(file) == ".md") {
      // Read markdown file as string
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      contentHtml = processedContent.toString();
    } else if (path.extname(file) == ".png") {
      img = fullPath;
      //img = fs.readFileSync(fullPath, { encoding: "base64" });
    }
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    img,
    ...(matterResult.data as { name: string; title: string }),
  };
}

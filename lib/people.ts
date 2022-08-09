import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Publication } from "../types/publication";
import { Person } from "../types/person";

// Path to the directory in which the information is stored
const peopleDirectoryPath = path.join(process.cwd(), "people");

/**
 * HELPER: Get the name of each directory in a given source path.
 * @param source
 * @returns List of directory names
 */
const getDirectories = (source): Array<string> =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

/**
 * Filters the basic information available for each team member out of the folder.
 * @returns Partly filled List of people. Leaving out publications and description
 * to save bandwidth.
 */
export const getPeopleData = (): Array<Person> => {
  // Initialize Storage for the info.
  let data: Array<Person> = [];

  // Each team member has their own folder, get the name of each
  const folderNames = getDirectories(peopleDirectoryPath);
  // process each folder
  folderNames.forEach((folderName) => {
    // get path to content of the current folder
    const contentPath = path.join(peopleDirectoryPath, folderName);

    // the name of the folder serves as the ID of the person
    const id = folderName;

    // init variables to store the folder content in
    let matterResult: GrayMatterFile<string>;
    let image: string;

    // get the name of each file in the current folder
    const fileNames = fs.readdirSync(contentPath);

    // process each file in the folder
    fileNames.forEach((file) => {
      // build full path to the current file
      const fullPath = path.join(contentPath, file);

      // Each folder has a Markdown file. It stores the meta information and the members' intro.
      if (path.extname(file) == ".md") {
        // Read markdown file as string
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        matterResult = matter(fileContents);
      } else if (path.extname(file) == ".png") {
        image = fs.readFileSync(fullPath, { encoding: "base64" });
      }
    });

    // Combine data into Person object and push to storage.
    data.push({
      id,
      ...(matterResult.data as {
        name: string;
        title: string;
        affiliation: string;
      }),
      image,
    });
  });
  // return filled list
  return data;
};

/**
 * Pre-process to make IDs usable as sub-page URLs.
 */
export const getAllPeopleIds = () => {
  const folderNames = getDirectories(peopleDirectoryPath);
  return folderNames.map((folderName) => {
    return {
      params: {
        id: folderName,
      },
    };
  });
};

/**
 * Uses the ID to retrieve full Person object.
 * @param id The ID of the person.
 * @returns Fully filled Person object.
 */
export const getPersonData = (id: string): Person => {
  // Build path from the ID
  const contentPath = path.join(peopleDirectoryPath, id);

  // Get the name of each file for the person
  const fileNames = fs.readdirSync(contentPath);

  // init variables to store the iinfo of the person
  let description: string;
  let matterResult: GrayMatterFile<string>;
  let image: string;
  let publications: Array<Publication>;

  // process each file
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
      description = processedContent.toString();
    } else if (path.extname(file) == ".png") {
      image = fs.readFileSync(fullPath, { encoding: "base64" });
    } else if (path.extname(file) == ".json") {
      const rawData = fs.readFileSync(fullPath);
      publications = JSON.parse(rawData.toString());
    }
    // if no Publications found, assign empty array
    publications ??= [];
  });

  // Combine the data with the id and description into Person object
  return {
    id,
    description,
    image,
    publications,
    ...(matterResult.data as {
      name: string;
      title: string;
      affiliation: string;
    }),
  };
};

/**
 * Retrieve a List of all publications.
 * @param sort Whether to sort the results by year of publishing
 * @returns A list of all publications.
 */
export const getPublications = (sort: boolean): Array<Publication> => {
  const folderNames = getDirectories(peopleDirectoryPath);
  let publications = [];
  folderNames.forEach((folderName) => {
    const contentPath = path.join(peopleDirectoryPath, folderName);

    const fileNames = fs.readdirSync(contentPath);

    fileNames.forEach((file) => {
      const fullPath = path.join(contentPath, file);
      if (path.extname(file) == ".json") {
        const rawData = fs.readFileSync(fullPath);
        publications = publications.concat(JSON.parse(rawData.toString()));
      }
    });
  });

  if (sort) {
    publications.sort((a, b) => {
      if (a.bib.pub_year === undefined && b.bib.pub_year === undefined) {
        return 0;
      } else if (a.bib.pub_year === undefined) {
        return 1;
      } else if (b.bib.pub_year === undefined) {
        return -1;
      } else {
        return b.bib.pub_year - a.bib.pub_year;
      }
    });
  }

  return publications;
};

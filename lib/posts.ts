import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Post } from "../types/post";
import { serialize } from "next-mdx-remote/serialize";

// path to the directory in which the posts are stored
const postsDirectoryPath = path.join(process.cwd(), "posts");

/**
 * Retrieve a sparse list of posts from the respective folder.
 */
export const getSortedPostsData = (): Array<Post> => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; author: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

/**
 * Retrieve the IDs of all posts.
 */
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectoryPath);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
};

/**
 * Get a full Post object using the ID.
 * @param id ID of the post.
 */
export const getPostData = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectoryPath, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  //const processedContent = await remark()
  //  .use(html)
  //  .process(matterResult.content);
  //const contentHtml = processedContent.toString();

  const content = await serialize(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
};

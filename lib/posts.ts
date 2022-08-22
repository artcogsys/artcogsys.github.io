import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";

// path to the directory in which the posts are stored
const postsDirectoryPath = path.join(process.cwd(), "posts");

/**
 * Retrieve a sparse list of posts from the respective folder.
 */
export const getSortedPostsData = async (): Promise<Array<Post>> => {
  // Get file names under /posts
  const posts = fs.readdirSync(postsDirectoryPath);
  const allPostsData = posts.map(async (id) => {

    // Read markdown file as string
    const fullPath = path.join(postsDirectoryPath, id, "index.mdx");

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        author: string;
      }),
    };
  });
  const data = await Promise.all(allPostsData);
  // Sort posts by date
  return data.sort((a: any, b: any) => {
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
  const posts = fs.readdirSync(postsDirectoryPath);
  return posts.map((id) => {
    return {
      params: {id},
    };
  });
};

/**
 * Retrieve post.
 */
 export const getPost = async (id) => {
  const postPath = path.join(postsDirectoryPath, id, "index.mdx");
  return await fs.readFileSync(postPath, "utf8");
};
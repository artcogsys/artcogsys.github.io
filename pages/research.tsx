import * as React from "react";
import PostList from "../components/postList";
import posts from "../posts/posts"
import LayoutPostWrapper from "../components/layoutPostWrapper";

/**
 * The 'Research' page of the website.
 * Provides an overview over all existing posts.
 */
export default function Research() {
  return posts.length > 0 ? (<>
    <PostList allPostsData={posts}/>
    </>
  ) : (
    <LayoutPostWrapper>
      <h1 style={{marginLeft: "auto", marginRight: "auto", width: "max-content"}}>Coming Soon...</h1>
    </LayoutPostWrapper>
  );
}

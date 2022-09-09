import * as React from "react";
import PostList from "../components/postList";
import posts from "../posts/posts"
import LayoutPostWrapper from "../components/layoutPostWrapper";


export default function Research() {

  return posts.length > 0 ? (<>
    <PostList allPostsData={posts} pageIdx={2} />
    </>
  ) : (
    <LayoutPostWrapper pageIdx={2}>
      <h1 style={{marginLeft: "auto", marginRight: "auto", width: "max-content"}}>Coming Soon...</h1>
    </LayoutPostWrapper>
  );
}

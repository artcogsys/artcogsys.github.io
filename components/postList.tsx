import * as React from "react";
import Layout from "../components/layout";
import Date from "../components/date";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

/**
 * Component to display the information of, and link to all provided posts.
 * @param allPostsData Meta information of each post as a list.
 * @param unWrapped Indicator if the component should be used without the Layout Wrapper.
 * @returns
 */
export default function PostList({
  allPostsData,
  unWrapped,
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
    thumbnail: string;
    abstract: string;
  }[];
  unWrapped?: boolean;
}) {
  const PostListInner = () => (
    <Grid container spacing={3}>
      {allPostsData.map((post) => (
        <Grid item key={post.id}>
          <Card elevation={3} sx={{ maxWidth: 200, height: 400 }}>
            <CardMedia
              component="img"
              height="200"
              image={post.thumbnail}
              alt="thumbnail"
            />
            <CardContent>
              <Stack>
                <a href={`/posts/${post.id}`} style={{ color: "black" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                </a>
                <Typography variant="body2" color="text.secondary">
                  {post.abstract}
                </Typography>
                <div className={utilStyles.lightText}>
                  <Date dateString={post.date} />
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  return unWrapped ? (
 
    <PostListInner />
  ) : (
    <Layout pageIdx={2}>
      
      <PostListInner />
    </Layout>
  );
}

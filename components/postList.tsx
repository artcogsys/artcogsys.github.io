import * as React from "react";
import Layout from "../components/layout";
import Date from "../components/date";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../styles/layout.module.css";

export default function PostList({
  allPostsData,
  pageIdx,
  unWrapped
}: {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    id: string;
    thumbnail: string;
    abstract: string;
  }[];
  pageIdx: number;
  unWrapped?: boolean;
}) {

  const PostListInner = () => (<Grid container spacing={3}>
            {allPostsData.map(post => (
            <Grid item key={post.id}>
                <Card elevation={3} sx={{ maxWidth: 250, height: 400 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={post.thumbnail}
                        alt="thumbnail"
                    />
                    <CardContent>
                        <a href={`/posts/${post.id}`} style={{color: "white"}}>
                        <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                        </Typography>
                        </a>
                        <Typography variant="body2" color="text.secondary">
                        {post.abstract}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>)
  return unWrapped ? <PostListInner /> :(
    <Layout pageIdx={pageIdx}><PostListInner /></Layout>
  );
}

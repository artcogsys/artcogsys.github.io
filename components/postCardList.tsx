import * as React from "react";
import Layout from "../components/layout";
import Grid from "@mui/material/Grid";
import CardComponent from "../pages/components/CardComponent";
import { motion } from "framer-motion";

/**
 * Component to display the information of, and link to all provided posts.
 * @param allPostsData Meta information of each post as a list.
 * @param unWrapped Indicator if the component should be used without the Layout Wrapper.
 * @returns
 */
export default function PostCardList({
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
  const PostCardListInner = () => (
    <Grid container spacing={3}>
      {allPostsData.map((post) => (
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <CardComponent props={post} key={post.id} />
        </Grid>
      ))}
    </Grid>
  );
  return unWrapped ? (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <PostCardListInner />
              </motion.div>
    
    

  ) : (
    <Layout pageIdx={2}>
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
      <PostCardListInner />
                </motion.div>
      
    </Layout>
  );
}

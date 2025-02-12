/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import posts from "../posts/posts"

import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/utils.module.css";
import Header from "./components/Header";
import CardsRow from "./components/CardsRow";
import PostCardList from "../components/postCardList";
import CardComponent from "./components/CardComponent";
import Footer from "../components/footer";
import { motion } from "framer-motion";

/**
 * The Homepage of the website. 
 */

export default function Home() {
  const PostCardListInner = () => (
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
    <Grid marginTop='5vh' container spacing={3}>
      {posts.slice(0, 3).map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <CardComponent props={post}  />
        </Grid>
      ))}
    </Grid>
    </motion.div>
  );
  return (

    
    <Layout pageIdx={1}>
      <Header></Header>
      <PostCardListInner/>
    </Layout>
  );
}

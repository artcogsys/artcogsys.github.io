import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout pageIdx={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <Container maxWidth="md" className={styles.landingContainer}>
          <Paper elevation={3}>
            <Container maxWidth="md" className={styles.padded}>
              <Typography gutterBottom variant="h5" component="div">
                Mission Statement
              </Typography>
              <Typography variant="body2">
                Understanding how mind emerges from matter remains one of the
                great open questions in science. The artificial cognitive
                systems lab studies the computational mechanisms of learning,
                inference and control in natural systems. To this end, we bring
                together ideas from machine learning, computational
                neuroscience, control theory, dynamical systems theory,
                statistical physics and theoretical biology. Our aim is to
                advance our understanding of how biological agents learn to
                behave in complex environments. Such understanding may, in turn,
                drive the development of more capable and efficient intelligent
                agents and provide new insights about human brain function.
              </Typography>
              <Button size="small">Learn More</Button>
            </Container>
          </Paper>
        </Container>
      </article>
    </Layout>
  );
}

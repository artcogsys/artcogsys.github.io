/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";

import Constants from "../lib/constants";

import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout pageIdx={1}>
      <Paper elevation={3} style={{ opacity: "90%" }}>
        <Container maxWidth="md" className={styles.padded}>
          <Stack spacing={1}>
            <Typography
              className={styles.headingXl}
              style={{ marginTop: "0px" }}
            >
              Artificial Cognitive Systems Research Lab
            </Typography>
            <Typography
              className={styles.headingLg}
              style={{ marginTop: "0px" }}
            >
              {Constants.MISSION}
            </Typography>
            <Typography variant="body2">
              Understanding how mind emerges from matter remains one of the
              great open questions in science. The artificial cognitive systems
              lab studies the computational mechanisms of learning, inference
              and control in natural systems. To this end, we bring together
              ideas from machine learning, computational neuroscience, control
              theory, dynamical systems theory, statistical physics and
              theoretical biology. Our aim is to advance our understanding of
              how biological agents learn to behave in complex environments.
              Such understanding may, in turn, drive the development of more
              capable and efficient intelligent agents and provide new insights
              about human brain function.
            </Typography>
            <Button size="small">{Constants.ACTION_MORE}</Button>
          </Stack>
        </Container>
      </Paper>
    </Layout>
  );
}

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";

import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/utils.module.css";

/**
 * The Homepage of the website. 
 */
export default function Home() {
  return (
    <Layout pageIdx={1}>
      <Stack spacing={1}>
        <Paper elevation={3}>
          <Container maxWidth="lg" className={styles.padded}>
            <Stack spacing={1} style={{textAlign: "justify"}}>
              <div
                className={styles.headingXl}
                style={{ marginTop: "0px", textAlign: "center" }}
              >
                Mission Statement
              </div>
              <Typography variant="body2">
              The artificial cognitive systems lab studies the computational mechanisms of learning, inference and control in natural and artificial systems. 
              To this end, we bring together ideas from a wide range of disciplines such as machine learning, computational neuroscience, control theory, dynamical systems theory, 
              statistical physics and theoretical biology. Ultimately, our goal is to bridge the gap between natural and artificial intelligence and contribute more capable and 
              efficient AI solutions to address a wide variety of scientific and societal challenges.
              </Typography>
            </Stack>
          </Container>
        </Paper>
        <div style={{ marginTop: "5%" }}>
          <a
            className="twitter-timeline"
            data-theme="dark"
            href="https://twitter.com/artcogsys?ref_src=twsrc%5Etfw"
            style={{ height: "600px" }}
          >
            Tweets by artcogsys
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </Stack>
    </Layout>
  );
}

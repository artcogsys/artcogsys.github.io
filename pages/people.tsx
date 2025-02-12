/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticProps } from "next";
import {
  Container,
  Stack,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { getPeopleData } from "../lib/people"; // Adjust the import path as necessary
import { on } from "events";
import { motion } from "framer-motion";

/**
 * The "Team" page. Displays an overview over the team members.
 * @param allPeopleData Meta information for each member.
 */
export default function People({
  allPeopleData,
}: {
  allPeopleData: {
    name: string;
    title: string;
    id: string;
    image: string;
    profileLink: string;
  }[];
}) {
  const titles = [
    "Principal Investigator",
    "Assistant Professor",
    "Research Fellow",
    "Postdoctoral Researcher",
    "PhD Student",
  ];

  const CardStack = titles.map((title, idx) => (
    <Paper elevation={0} key={idx}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
      <Container maxWidth="xl" className={utilStyles.padded}>
        <Stack spacing={1}>
          <Typography
            sx={{ padding: "0 0.5vw" }}
            variant="h5"
            component="div"
            gutterBottom
          >
            {title}
          </Typography>
          <Grid container spacing={3}>
            {allPeopleData
              .filter((person) => person.title === title)
              .map((person) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
                  <Card
                    component="a"
                    href={`/team/${person.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={3}
                    sx={{
                      borderRadius: "0",
                      padding: "0",
                      textDecoration: "none",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover .MuiCardMedia-root": {
                        filter: "brightness(70%)",
                      },
                      "&:hover .profile": {
                        transform: "translateY(0)",
                        opacity: 1,
                      },
                      "&:hover .name": {
                        transform: "translateY(-100%)",
                      },
                    }}
                  >
                      <CardMedia
                      
                        component="img"
                        height="300"
                        image={`data:image/png;base64,${person.image}`}
                        alt={person.name}
                        sx={{
                          transition: "filter 0.3s ease",
                        }}
                      />
                    <CardContent

                      sx={{
                        textAlign: "center",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        color: "white",
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 130%)",
                        transition: "background 0.3s ease",
                      }}
                    >
                      <Typography
                        className="name"
                        fontSize={20}
                        fontWeight={600}
                        component="div"
                        sx={{
                          position: "relative",
                          bottom: "10px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {person.name}
                      </Typography>
                      <Typography
                        className="profile"
                        fontSize={16}
                        component="div"
                        sx={{
                          position: "absolute",
                          bottom: "10px",
                          left: "10px",
                          right: "10px",
                          transform: "translateY(100%)",
                          transition: "transform 0.3s ease, opacity 0.3s ease",
                          opacity: 0,
                        }}
                      >
                        Go to Profile
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Container>
      </motion.div>
    </Paper>
  ));

  return (
    <Layout pageIdx={3}>
      <Stack spacing={1}>{CardStack}</Stack>
    </Layout>
  );
}

/**
 * Invoked by NextJS when the page is loaded.
 * Is used to retrieve the information of the team members.
 */
export const getStaticProps: GetStaticProps = async () => {
  const allPeopleData = getPeopleData();
  return {
    props: {
      allPeopleData,
    },
  };
};

People;

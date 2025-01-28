import React from "react";
import { Container, Box, Typography, Grid, Fade } from "@mui/material";

function Header() {
  return (
    <Container maxWidth="xl" sx={{ mt: "1vh", mb: "1vh" }}>
      <Fade in timeout={1000}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} >
            <Box
              component="img"
              src="https://hersenolympiade.nl/wp-content/uploads/2019/01/donders_logo.png"
              alt="Donders Logo"
              sx={{
                width: "100%",
                maxWidth: 450,
                // borderRadius: 2,
                // boxShadow: 3,
                p: 2,
                // backgroundColor: 'white'
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Welcome to Artificial Cognitive Systems
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", color: "#555", lineHeight: 1.6 }}
            >
              The artificial cognitive systems lab studies the computational mechanisms of learning, inference and control in natural and artificial systems. To this end, we bring together ideas from a wide range of disciplines such as machine learning, computational neuroscience, control theory, dynamical systems theory, statistical physics and theoretical biology. Ultimately, our goal is to bridge the gap between natural and artificial intelligence and contribute more capable and efficient AI solutions to address a wide variety of scientific and societal challenges.
            </Typography>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
}

export default Header;
 
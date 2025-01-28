import React from "react";
import CardComponent from "./CardComponent";
import { Container, Typography, Grid, Fade } from "@mui/material";

function CardsRow() {
    const placeholder = {
        title: "Title",
        abstract: "Abstract"
    }
  return (
    <Fade in timeout={1000}>

    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            backgroundColor: "#510648bb",
            padding: "2vh 10vw",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            borderRadius: 2,
          }}
        >
          RESEARCHES
        </Typography>
        <Grid container spacing={6} sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardComponent props={placeholder} />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardComponent props={placeholder} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <CardComponent props={placeholder} />
          </Grid>
        </Grid>
    </Container>
    </Fade>

  );
}

export default CardsRow;

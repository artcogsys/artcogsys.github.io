/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

import Constants from "../lib/constants";
import PublicationAccordion from "./publications";
import { Publication } from "../types/publication";

import utilStyles from "../styles/utils.module.css";

/**
 * Wrapper for the Accordion for publications, provides paging controls.
 * @param pageIdx The index of the currently active tab.
 * @returns {React.ReactNode} The navigation bar.
 */
export default function PublicationAccordionPagedWrapper({
  publications,
  numPubs,
  pubsPerPage,
  setPage,
  currentPage,
}: {
  publications: Array<Publication>;
  numPubs: number;
  pubsPerPage: number;
  setPage: (currentPage) => void;
  currentPage: number;
}) {
  const [textInput, setTextInput] = React.useState(currentPage + 1);

  const handleBack = () => {
    if (currentPage !== 0) {
      setPage(currentPage - 1);
      setTextInput(textInput - 1);
    }
  };

  const handleForward = () => {
    if (currentPage !== Math.ceil(numPubs / pubsPerPage)) {
      setPage(currentPage + 1);
      setTextInput(textInput + 1);
    }
  };

  const handleChange = (event) => {
    if (
      !isNaN(event.target.value) &&
      event.target.value > 0 &&
      event.target.value < Math.ceil(numPubs / pubsPerPage)
    ) {
      setTextInput(event.target.value);
    } else if (event.target.value === "") {
      setTextInput(event.target.value);
    }
  };

  return numPubs > 0 ? (
    <Stack spacing={1}>
      <PublicationAccordion pubs={publications} />
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            size="medium"
            onClick={handleBack}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Card>
            <CardContent sx={{ padding: "6px 16px !important" }}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <TextField
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    placeholder=".."
                    variant="standard"
                    value={textInput}
                    onChange={handleChange}
                    onBlur={() => setPage(textInput - 1)}
                  />
                </Grid>
                <Grid item>/{Math.ceil(numPubs / pubsPerPage)}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            size="medium"
            onClick={handleForward}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Stack>
  ) : (
    <></>
  );
}

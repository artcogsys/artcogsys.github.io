  import * as React from "react";
  import { Stack, Grid, Button, TextField, Typography } from "@mui/material";
  import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
  import { motion, AnimatePresence } from "framer-motion";
  import PublicationAccordion from "./publications";
  import { Publication } from "../types/publication";

  interface PublicationsPagingWrapperProps {
    publications: Array<Publication>;
    numPubs: number;
    pubsPerPage: number;
    setPage: (currentPage: number) => void;
    currentPage: number;
  }

  const PublicationsPagingWrapper: React.FC<PublicationsPagingWrapperProps> = ({
    publications,
    numPubs,
    pubsPerPage,
    setPage,
    currentPage,
  }) => {
    const [textInput, setTextInput] = React.useState<number | string>(currentPage + 1);

    const handleBack = () => {
      if (currentPage > 0) {
        setPage(currentPage - 1);
        setTextInput(currentPage);
      }
    };

    const handleNext = () => {
      if (currentPage < Math.ceil(numPubs / pubsPerPage) - 1) {
        setPage(currentPage + 1);
        setTextInput(currentPage + 2);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === "") {
        setTextInput("");
      } else if (!isNaN(Number(value)) && Number(value) >= 1 && Number(value) <= Math.ceil(numPubs / pubsPerPage)) {
        setTextInput(Number(value));
      }
    };

    const handleBlur = () => {
      if (textInput !== "" && Number(textInput) >= 1 && Number(textInput) <= Math.ceil(numPubs / pubsPerPage)) {
        setPage(Number(textInput) - 1);
      } else {
        setTextInput(currentPage + 1);
      }
    };

    if (numPubs <= 0) return null;

    return (
      <Stack spacing={3} alignItems="center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PublicationAccordion pubs={publications} />
          </motion.div>
        </AnimatePresence>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIos />}
              size="medium"
              onClick={handleBack}
              disabled={currentPage === 0}
              sx={{
                "&:hover": { backgroundColor: "primary.main", color: "white" },
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              Prev
            </Button>
          </Grid>

          <Grid item>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  placeholder="Page"
                  variant="outlined"
                  size="small"
                  value={textInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: 80 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1">/ {Math.ceil(numPubs / pubsPerPage)}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIos />}
              size="medium"
              onClick={handleNext}
              disabled={currentPage === Math.ceil(numPubs / pubsPerPage) - 1}
              sx={{
                "&:hover": { backgroundColor: "primary.main", color: "white" },
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Stack>
    );
  };

  export default PublicationsPagingWrapper;
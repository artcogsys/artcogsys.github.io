/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Constants from "../lib/constants";
import { Publication } from "../types/publication";

/**
 * Turns the scraped publications into a HTML Element. Displays the data in Accordion format.
 * @param pubs The publications scraped from Google Scholar.
 * @returns {React.ReactNode}
 */
export default function PublicationAccordion({
  pubs,
}: {
  pubs: Array<Publication>;
}) {
  const accordion = pubs.map((publication, idx) => {
    // Split the Authors into a list
    const authors = publication.bib.author.split(" and ");
    // Format the name of each author in the list according to APA guideline.
    const authorList = authors.map((author) => {
      // Split author name into [Firstname, Surname].
      const names = author.split(" ");
      // Rejoin the two into a string of form "Surname X."
      return `${names.at(-1)}, ${names[0][0]}.`;
    });

    // Reconnect the list of authors into a single string according to APA format
    let apaAuthor: string;
    // Follow APA rules for single author
    if (authorList.length === 1) {
      apaAuthor = authorList[0];
      // Follow APA rules for >20 authors
    } else if (authorList.length > 20) {
      apaAuthor = `${authorList.slice(0, 19).join(", ")}, ..., ${authorList.at(
        -1
      )}`;
      // Follow APA rules for 2 - 20 authors.
    } else {
      apaAuthor = `${authorList
        .slice(0, authorList.length - 1)
        .join(", ")}, & ${authorList.at(-1)}`;
    }

    return (
      <Accordion key={idx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>
            {`${apaAuthor} (${publication.bib.pub_year}). `}
            {publication.bib.journal ? (
              <>
                {`${publication.bib.title}. `}
                <em>
                  {publication.bib.journal
                    ? `${publication.bib.journal}, ${
                        publication.bib.volume || ""
                      }`
                    : ""}
                </em>
                {publication.bib.number
                  ? `(${publication.bib.number || ""})`
                  : ""}
                {publication.bib.pages ? `, ${publication.bib.pages}` : ""}
              </>
            ) : (
              <>
                <em>{`${publication.bib.title}. `}</em>
                {`${publication.bib.publisher || ""}`}
              </>
            )}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <Typography>{Constants.INFO_SCHOLAR}</Typography>
            <Typography>{publication.bib.abstract}</Typography>
            <Typography>
              <Button
                component="a"
                size="small"
                href={publication.pub_url}
                rel="noreferrer"
                target="_blank"
              >
                <p>{Constants.ACTION_ARTICLE}</p>
              </Button>
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    );
  });

  return <div>{accordion}</div>;
}

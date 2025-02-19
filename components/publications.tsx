/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { sortPublicationsByDate } from "../lib/publications"
import { Publication } from "../types/publication";

/**
 * Turns a list of Publication objects into a React Accordion element.
 * @param pubs The list of Publication objects.
 */
export default function PublicationAccordion({
  pubs,
}: {
  pubs: Array<Publication>;
}) {
  const sortedPubs = sortPublicationsByDate(pubs)
  const accordion = sortedPubs.map((publication, idx) => {
    // Split the Authors into a list
    const authors = publication.bib.author.split(" and ");
    // Format the name of each author in the list according to APA guideline.
    const authorList = authors.map((author) => {
      // Split author name into [Firstname, Surname].
      const names = author.split(" ");
      // Rejoin the two into a string of form "Surname X."
      return `${names[names.length - 1]}, ${names[0][0]}.`;
    });

    // Reconnect the list of authors into a single string according to APA format
    let apaAuthor: string;
    // Follow APA rules for single author
    if (authorList.length === 1) {
      apaAuthor = authorList[0];
      // Follow APA rules for >20 authors
    } else if (authorList.length > 20) {
      apaAuthor = `${authorList.slice(0, 19).join(", ")}, ..., ${authorList[authorList.length - 1]}`;
      // Follow APA rules for 2 - 20 authors.
    } else {
      apaAuthor = `${authorList
        .slice(0, authorList.length - 1)
        .join(", ")}, & ${authorList[authorList.length - 1]}`;
    }

    return (
      <Accordion key={idx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p style={{ fontSize: 18 }}>
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
            <Typography>Abstract taken from Google Scholar:</Typography>
            <Typography>{publication.bib.abstract}</Typography>
            <Typography>
              <Button
                component="a"
                size="small"
                href={publication.pub_url}
                rel="noreferrer"
                target="_blank"
              >
                <>Go to article</>
              </Button>
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    );
  });

  return <div>{accordion}</div>;
}

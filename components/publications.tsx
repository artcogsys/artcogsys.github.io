/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export type Publication = {
  container_type: string;
  source: string;
  bib: {
    title: string;
    pub_year: number;
    author: string;
    journal?: string;
    volume?: string;
    number?: string;
    pages?: string;
    publisher?: string;
    abstract: string;
  };
  filled: boolean;
  author_pub_id: string;
  num_citations: number;
  citedby_url: string;
  cites_id: Array<string>;
  pub_url: string;
  url_related_articles: string;
  cites_per_year: object;
};

export default function PublicationAccordion({
  pubs,
}: {
  pubs: Array<Publication>;
}) {
  return (
    <div>
      {pubs.map((publication) => (
        <Accordion key={publication.pub_url}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              "{publication.bib.title}", {publication.bib.pub_year}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{publication.bib.abstract}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

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
  
  const accordion = pubs.map((publication) => {
    // Split the Authors into a list
    const authors = publication.bib.author.split(" and ")
    const authorList = authors.map((author) => {
      const names = author.split(" ")
      // Surname and first letter from the first name.
      return `${names.at(-1)}, ${names[0][0]}.`
    })

    let apaAuthor;
    if(authorList.length === 1){
      apaAuthor = authorList[0]
    }else if(authorList.length > 20){
      apaAuthor = `${authorList.slice(0,19).join(", ")}, ..., ${authorList.at(-1)}`
    } else {
      apaAuthor = `${authorList.slice(0,authorList.length-1).join(", ")}, & ${authorList.at(-1)}`
    }

    return (
      <Accordion key={publication.pub_url}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>
            {`${apaAuthor} (${publication.bib.pub_year}). `}
            {publication.bib.journal ?
                (<>
                  {`${publication.bib.title}. `}
                  <em>
                    {publication.bib.journal ?  `${publication.bib.journal}, ${publication.bib.volume || ""}` : ""}
                  </em>
                  {publication.bib.number ? `(${publication.bib.number || ""})` : ""}
                  {publication.bib.pages ? `, ${publication.bib.pages}` : ""}
                </>)
               :(<>
                <em>
                  {`${publication.bib.title}. `}
                </em>
                {`${publication.bib.publisher || ""}`}
                </>
               )
            }
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Abstract taken from Google Scholar:
            </p>
            {publication.bib.abstract}
            <a href={publication.pub_url} rel="noreferrer" target="_blank">
              <p>
                Go to article
              </p>
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })

  return (
    <div>
      {accordion}
    </div>
  );
}

import { Publication } from "../types/publication";

export const sortPublicationsByDate = (publications:Array<Publication>) : Array<Publication> => {
    publications.sort((a, b) => {
      if (a.bib.pub_year === undefined && b.bib.pub_year === undefined) {
        return 0;
      } else if (a.bib.pub_year === undefined) {
        return 1;
      } else if (b.bib.pub_year === undefined) {
        return -1;
      } else {
        return b.bib.pub_year - a.bib.pub_year;
      }
    });
  
    return publications;
  }
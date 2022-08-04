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

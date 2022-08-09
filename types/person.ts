import { Publication } from "./publication";

export type Person = {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  description?: string;
  image?: string;
  publications?: Array<Publication>;
};

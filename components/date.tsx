import { parseISO, format } from "date-fns";

/**
 * Turns Datestrings into HTML <time> elements.
 * @returns {HTMLTimeElement} datestring as HTML element.
 */
export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

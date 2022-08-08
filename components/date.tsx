import * as React from "react";
import { parseISO, format } from "date-fns";

/**
 * Turns Datestrings into HTML <time> elements.
 * @returns {HTMLTimeElement} datestring as HTML element.
 */
export default function Date({
  dateString,
  style,
}: {
  dateString: string;
  style?: React.CSSProperties;
}) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} style={style || {}}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}

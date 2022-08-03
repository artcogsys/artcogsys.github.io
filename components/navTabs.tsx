/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import logo from "../public/acs.png";
import { StyledTab, StyledTabs } from "./styledTabs";

const githubRepoUrl = "https://github.com/artcogsys";
const repoTabName = "Code";

export default function NavTabs({ pageIdx }: { pageIdx: number }) {
  const [value, setValue] = React.useState(pageIdx);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // Find the HTML element from the navigation bar, that the user clicked on
    const navElement: any = event.target;
    // Find the label of the clicked tab
    const tabLabel = navElement.outerText;
    // The repo tab leads to an external page, no need to change the active tab
    if (tabLabel !== repoTabName.toUpperCase()) {
      // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
      newValue == -1 ? setValue(0) : setValue(newValue);
    }
  };

  const appIcon = (
    <img src={logo.src} height={40} width={40} alt={"artcogsys"} />
  );

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs value={value} onChange={handleChange} aria-label="nav tabs">
        <Tab icon={appIcon} aria-label="artcogsys" href="/" value={-1} />
        <StyledTab label="Home" href="/" />
        <StyledTab label="Research" href="/research" />
        <StyledTab label="People" href="/people" />
        <StyledTab label="Publications" href="/publications" />
        <StyledTab label="Education" href="/education" />
        <StyledTab
          component="a"
          href={githubRepoUrl}
          label="Code"
          rel="noreferrer"
          target="_blank"
        />
        <StyledTab label="Contact" href="/contact" />
      </StyledTabs>
    </Box>
  );
}

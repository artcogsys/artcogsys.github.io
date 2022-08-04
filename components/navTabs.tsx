/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { StyledTab, StyledTabs } from "./styledTabs";

// The URL to the Repository of the group
const githubRepoUrl: string = "https://github.com/artcogsys";
// Label of the navigation element leading to the repository
const repoTabLabel: string = "Code";

/**
 * Navigation Bar.
 * @param pageIdx The index of the currently active tab.
 * @returns {React.ReactNode} The navigation bar.
 */
export default function NavTabs({ pageIdx }: { pageIdx: number }) {
  // Stateful variable that tracks the currently active tab
  const [activeTab, setActiveTab] = React.useState(pageIdx);

  /**
   * Helper function to handle clicks on the tabs.
   * @param event - The DOM click-event.
   * @param newValue - The index of the clicked tab.
   */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // Find the HTML element from the navigation bar, that the user clicked on
    const navElement: any = event.target;
    // Find the label of the clicked tab
    const tabLabel: string = navElement.outerText;
    // The repo tab leads to an external page, no need to change the active tab
    if (tabLabel.toUpperCase() !== repoTabLabel.toUpperCase()) {
      // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
      newValue == -1 ? setActiveTab(0) : setActiveTab(newValue);
    }
  };

  // artcogsys logo as HTML element, stored so it can be used as an icon.
  const logo = <img src="/acs.png" height={40} width={40} alt={"artcogsys"} />;

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs
        value={activeTab}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <Tab icon={logo} aria-label="artcogsys" href="/" value={-1} />
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

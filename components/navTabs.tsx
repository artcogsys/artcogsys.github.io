/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { StyledTab, StyledTabs } from "./styledTabs";

import Constants from "../lib/constants";

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
  const handleChange = (event: React.SyntheticEvent, newValue: number) : void => {
    // Find the HTML element from the navigation bar, that the user clicked on
    const navElement: any = event.target;
    // Find the label of the clicked tab
    const tabLabel: string = navElement.outerText;
    // The repo tab leads to an external page, no need to change the active tab
    if (tabLabel.toUpperCase() !== Constants.LABEL_REPO.toUpperCase()) {
      // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
      newValue == -1 ? setActiveTab(0) : setActiveTab(newValue);
    }
  };

  // artcogsys logo as HTML element, stored so it can be used as an icon.
  const logo = (
    <img src="/artcogsys_transparent.png" height={80} width={80} alt={"artcogsys"} />
  );

  return (
    <Box sx={{ width: "100%", opacity: "90%" }}>
      <StyledTabs
        value={activeTab}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <Tab
          icon={logo}
          iconPosition="start"
          label="Artificial Cognitive Systems"
          aria-label="artcogsys"
          href="/"
          value={-1}
          style={{
            fontSize: "0.75rem",
            maxWidth: "200px",
            color: "white",
            fontWeight: "bold",
          }}
        />
        <StyledTab label={Constants.LABEL_LANDING} href="/" />
        <StyledTab label={Constants.LABEL_BLOG} href="/research" />
        <StyledTab label={Constants.LABEL_TEAM} href="/people" />
        <StyledTab label={Constants.LABEL_PUBLICATIONS} href="/publications" />
        <StyledTab label={Constants.LABEL_EDUCATION} href="/education" />
        <StyledTab
          component="a"
          href={Constants.GITHUB_URL}
          label={Constants.LABEL_REPO}
          rel="noreferrer"
          target="_blank"
        />
        <StyledTab label={Constants.LABEL_CONTACT} href="/contact" />
      </StyledTabs>
    </Box>
  );
}

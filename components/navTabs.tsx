/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import logo from "../public/acs.png";

const githubRepoUrl = "https://github.com/artcogsys"
const repoTabName = "Code"

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        //event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs({ pageIdx }: { pageIdx: number }) {
  const [value, setValue] = React.useState(pageIdx);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // Find the HTML element from the navigation bar, that the user clicked on
    const navElement: any = event.target
    // Find the label of the clicked tab
    const tabLabel = navElement.outerText
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
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab icon={appIcon} aria-label="artcogsys" href="/" value={-1} />
        <LinkTab label="Home" href="/" />
        <LinkTab label="Research" href="/research" />
        <LinkTab label="People" href="/people" />
        <LinkTab label="Publications" href="/publications" />
        <LinkTab label="Education" href="/education" />
        <Tab component="a" href={githubRepoUrl} label="Code" rel="noreferrer" target="_blank"/>
        <LinkTab label="Contact" href="/contact" />
      </Tabs>
    </Box>
  );
}

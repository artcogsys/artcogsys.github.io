/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import logo from "../public/acs.png";

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
    console.log(newValue);
    newValue == -1 ? setValue(0) : setValue(newValue);
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
        <LinkTab label="Resources" href="/resources" />
        <LinkTab label="Contact" href="/contact" />
      </Tabs>
    </Box>
  );
}

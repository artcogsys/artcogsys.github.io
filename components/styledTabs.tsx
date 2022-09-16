/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

/**
 *
 * Styled navigation tab.
 *
 */

interface StyledTabProps {
  label: string;
  href?: string;
  component?: any;
  rel?: string;
  target?: string;
}

/**
 * Customized MUI Tab Element
 */
export const StyledTab = styled((props: StyledTabProps) => (
  <Tab
    component="a"
    onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      //event.preventDefault();
    }}
    {...props}
  />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(16),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 1)",
  "&.Mui-focusVisible": {},
  "&.MuiTab-textColorPrimary": {},
  "&.Mui-selected": {},
}));

/**
 *
 * Styled navigation bar.
 *
 */

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

/**
 * Customized MUI Tabs Element.
 */
export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-scroller": {
    backgroundColor: "#121212",
  },
});

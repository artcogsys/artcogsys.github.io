/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { StyledTab, StyledTabs } from "./styledTabs";

const CODE_LABEL = "Code";

const pageMeta = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Research",
    path: "/research",
  },
  {
    label: "People",
    path: "/people",
  },
  {
    label: "Publications",
    path: "/publications",
  },
  {
    label: "Education",
    path: "/education",
  },
  {
    label: CODE_LABEL,
    path: "https://github.com/artcogsys",
    external: true,
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

/**
 * Navigation Bar.
 * @param pageIdx The index of the currently active tab.
 * @returns {React.ReactNode} The navigation bar.
 */
export default function NavTabs({ pageIdx }: { pageIdx: number }) {
  // Stateful variable that tracks the currently active tab
  const [activeTab, setActiveTab] = React.useState(pageIdx);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /**
   * Helper function to handle clicks on the tabs.
   * @param event - The DOM click-event.
   * @param newValue - The index of the clicked tab.
   */
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    // Find the HTML element from the navigation bar, that the user clicked on
    const navElement: any = event.target;
    // Find the label of the clicked tab
    const tabLabel: string = navElement.outerText;
    // The repo tab leads to an external page, no need to change the active tab
    if (tabLabel.toUpperCase() !== CODE_LABEL.toUpperCase()) {
      // If the user clicks on the logo, set tab for homepage as active, otherwise the clicked tab
      newValue == -1 ? setActiveTab(0) : setActiveTab(newValue);
    }
  };

  // artcogsys logo as HTML element, stored so it can be used as an icon.
  const logo = (
    <img
      src="/general/artcogsys_transparent.png"
      height={80}
      width={80}
      alt={"artcogsys"}
    />
  );

  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, width: "80vw" }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "95%" }}
        >
          <MenuIcon sx={{ fontSize: 45 }} />
          {logo}
          <Typography>Artificial Cognitive Systems Lab</Typography>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pageMeta.map((page) => (
            <MenuItem key={page.label} onClick={handleCloseNavMenu}>
              {page.external ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={page.path}
                  style={{ color: "black" }}
                >
                  <ArrowRightIcon />
                  {page.label}
                </a>
              ) : (
                <a href={page.path} style={{ color: "black" }}>
                  <ArrowRightIcon />
                  {page.label}
                </a>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        sx={{ width: "100%", flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
              color: "black",
              fontWeight: "bold",
              opacity: 1, 
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledTabs
            value={activeTab}
            onChange={handleChange}
            aria-label="nav tabs"
          >
            {pageMeta.map((page) => (
              <StyledTab
                component="a"
                key={page.label}
                label={page.label}
                href={page.path}
                sx={{}}
                rel={page.external ? "noreferrer" : ""}
                target={page.external ? "_blank" : ""}
                value={pageMeta.indexOf(page) + 1}
              />
            ))}
          </StyledTabs>
        </Box>
      </Box>
    </>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from '../public/acs.png'

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

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
    setValue(newValue);
  };

  const appIcon = <img
                src={logo.src}
                height={40}
                width={40}
                alt={"artcogsys"}/>

  const pages = ['Home', 'Research', 'People', 'Publications', 'Education', 'Resources', 'Contact' ];
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab icon={appIcon} aria-label="artcogsys" href="/" />
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
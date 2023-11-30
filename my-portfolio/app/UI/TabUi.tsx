'use client';
import React from 'react'
import Box from '@mui/material/Box';
import {Paper} from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const TabUi = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="text-sm">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="pt-3">
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <Paper>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        </Paper>
      </TabContext>
    </Box>
  );
}

export default TabUi
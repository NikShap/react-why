import React, { FC, useCallback, ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabType } from '../types';
import { Divider } from '@mui/material';

export type VerticalTabsProps = {
  tabs: TabType[]
}

const VerticalTabs = (props: VerticalTabsProps) => {
  const { tabs } = props;
  const [tab, setTab] = React.useState<number>(0);

  const handleChange = useCallback((_event, newTab) => {
    setTab(newTab);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: 200,
        }}
      >
        {tabs.map(tab => (
          <Tab
            label={tab.label}
            key={tab.label}
            sx={{
              textTransform: 'none',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '18px',
              borderBottom: '1px grey dashed'
            }}
          />
        ))}
      </Tabs>
      <Box sx={{
        p: 3,
        flex: 1
      }} >
        <Typography variant='h4' align='center'>
          {tabs[tab].label}
        </Typography>
        <Divider />
        <Box sx={{
          p: 1,
          paddingX: 0,
          flex: 1
        }}>
          {tabs[tab].node}
        </Box>
      </Box>
    </Box>
  );
}

export default VerticalTabs;

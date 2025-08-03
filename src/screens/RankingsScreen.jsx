// @ts-nocheck
import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import SidebarLayout from '../components/SidebarLayout';
import DashboardHeader from '../components/DashboardHeader';
import RankingsPage from '../components/RankingsPage';

const RankingsScreen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarLayout sidebarOpen={sidebarOpen} onToggleSidebar={handleToggleSidebar}>
      <DashboardHeader 
        onToggleSidebar={handleToggleSidebar}
        isMobile={isMobile}
        title="Performance Rankings"
      />
      <RankingsPage />
    </SidebarLayout>
  );
};

export default RankingsScreen;

// @ts-nocheck
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import RankingsPage from '../components/RankingsPage';

const RankingsScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Performance Rankings"
      />
      <RankingsPage />
    </>
  );
};

export default RankingsScreen;

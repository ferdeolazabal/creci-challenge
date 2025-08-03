// @ts-nocheck
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../Ui/DashboardHeader';
import DealsPage from '../components/DealsPage';

const DealsScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Deals Database"
      />
      <DealsPage />
    </>
  );
};

export default DealsScreen;

// @ts-nocheck
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import CommissionBatches from '../components/CommissionBatches';

const BatchesScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Commission Batches"
        showCreateButton={true}
      />
      <CommissionBatches />
    </>
  );
};

export default BatchesScreen;

// @ts-nocheck
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader';
import EmployeePage from '../components/EmployeePage';

const EmployeeScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Employee Management"
      />
      <EmployeePage />
    </>
  );
};

export default EmployeeScreen;

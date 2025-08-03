// @ts-nocheck
import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import SidebarLayout from './SidebarLayout';
import DashboardHeader from './DashboardHeader';
import EmployeePage from './EmployeePage';

const EmployeeScreen = () => {
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
        title="Employee Management"
      />
      <EmployeePage />
    </SidebarLayout>
  );
};

export default EmployeeScreen;

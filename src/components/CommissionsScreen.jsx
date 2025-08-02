import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import CommissionDashboard from "./CommissionDashboard";
import DashboardHeader from "./DashboardHeader";
import SidebarLayout from "./SidebarLayout";

const CommissionsScreen = () => {
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
        title="Commission Batches Overview"
      />
      <CommissionDashboard />
    </SidebarLayout>
  );
};

export default CommissionsScreen;
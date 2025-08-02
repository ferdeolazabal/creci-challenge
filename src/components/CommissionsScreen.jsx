import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import CommissionDashboard from "./CommissionDashboard";
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
      <CommissionDashboard onToggleSidebar={handleToggleSidebar} isMobile={isMobile} />
    </SidebarLayout>
  );
};

export default CommissionsScreen;
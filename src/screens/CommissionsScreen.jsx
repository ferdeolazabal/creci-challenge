import { useMediaQuery, useTheme } from '@mui/material';
import CommissionDashboard from "../components/CommissionDashboard";
import DashboardHeader from "../components/DashboardHeader";

const CommissionsScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Commission Batches Overview"
      />
      <CommissionDashboard />
    </>
  );
};

export default CommissionsScreen;
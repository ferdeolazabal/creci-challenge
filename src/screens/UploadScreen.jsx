// @ts-nocheck
import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../Ui/DashboardHeader';
import UploadPage from '../components/UploadPage';

const UploadScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title="Document Uploads & Mapping"
      />
      <UploadPage />
    </>
  );
};

export default UploadScreen;

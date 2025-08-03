// @ts-nocheck
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme, Button } from '@mui/material';
import DashboardHeader from '../Ui/DashboardHeader';
import EmployeeProfile from '../components/EmployeeProfile';
import { employees } from '../helpers/mockEmployeeData';

const EmployeeProfileScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Find employee by ID
  const employee = employees.find(emp => emp.id === parseInt(id));

  const handleBackToEmployees = () => {
    navigate('/employees');
  };

  return (
    <>
      <DashboardHeader 
        isMobile={isMobile}
        title={`Employee Profile: ${employee?.name || 'Unknown'}`}
        onBackClick={handleBackToEmployees}
        backText="Back to Employees"
        rightContent={
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': { backgroundColor: '#333333' }
            }}
          >
            Edit Employee
          </Button>
        }
      />
      <EmployeeProfile />
    </>
  );
};

export default EmployeeProfileScreen;

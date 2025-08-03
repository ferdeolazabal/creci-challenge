// @ts-nocheck
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tab,
  Tabs,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import { employees, employeeDeals } from '../helpers/mockEmployeeData';

const EmployeeProfile = () => {

  const { getContainerStyles } = useAdaptiveStyles();
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const employee = employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Employee not found</Typography>
      </Box>
    );
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleBackToEmployees = () => {
    navigate('/employees');
  };

  return (
    <Box sx={getContainerStyles()}>
      {/* Basic Information Card */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <PersonIcon sx={{ color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Basic Information
            </Typography>
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {/* Left Column */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <PersonIcon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                    {employee.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    Employee ID: EMP001
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <EmailIcon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem' }}>
                    {employee.email}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    Primary Email
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem' }}>
                    {employee.phone}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    Work Phone
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Column */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <BusinessIcon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', fontWeight: 500 }}>
                    {employee.dealer}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    Dealer Code: HD01
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Chip
                  label={employee.role}
                  size="small"
                  sx={{
                    backgroundColor: employee.role === 'Sales Manager' ? '#e3f2fd' : 
                                    employee.role === 'F&I Manager' ? '#f3e5f5' : '#e8f5e8',
                    color: employee.role === 'Sales Manager' ? '#1976d2' : 
                           employee.role === 'F&I Manager' ? '#7b1fa2' : '#2e7d32',
                    fontWeight: 500,
                    fontSize: '0.75rem'
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CalendarTodayIcon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem' }}>
                    2022-03-15
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    Hire Date
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Pay Plan Card */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              📋 Pay Plan
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem', mb: 3 }}>
            Current compensation structure and commission plan
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            p: 2, 
            backgroundColor: '#f8f9fa', 
            borderRadius: 1,
            mb: 3
          }}>
            <Box sx={{ color: '#dc3545' }}>📄</Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                2024 Sales Executive Pay Plan
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.75rem' }}>
                Last updated: January 1, 2024
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              startIcon={<GetAppIcon sx={{ fontSize: '0.875rem' }} />}
              sx={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                '&:hover': { backgroundColor: '#333333' }
              }}
            >
              Download PDF
            </Button>
          </Box>

          {/* Statistics Cards */}
          <Box sx={{ 
            display: 'grid', 
            gap: 2, 
            gridTemplateColumns: { 
              xs: 'repeat(1, 1fr)', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(4, 1fr)' 
            }
          }}>
            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e9ecef', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.75rem', mb: 1 }}>
                Total Deals
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                45
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e9ecef', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.75rem', mb: 1 }}>
                Total Commissions
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                $12,500
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e9ecef', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.75rem', mb: 1 }}>
                Pending Adjustments
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                2
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e9ecef', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.75rem', mb: 1 }}>
                Last Commission
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                2024-01-15
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Box sx={{ borderBottom: '1px solid #e9ecef' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{ px: 3 }}
          >
            <Tab 
              label="Deals" 
              sx={{ textTransform: 'none', fontWeight: 500 }}
            />
            <Tab 
              label="Commissions" 
              sx={{ textTransform: 'none', fontWeight: 500 }}
            />
            <Tab 
              label="Adjustments" 
              sx={{ textTransform: 'none', fontWeight: 500 }}
            />
          </Tabs>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 3 }}>
                Employee Deals
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem', mb: 3 }}>
                All deals associated with this employee
              </Typography>

              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Deal No
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Customer
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Vehicle
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        VIN
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Price
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Commission
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employeeDeals.map((deal, index) => (
                      <TableRow 
                        key={index}
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                            {deal.dealNo}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                            {deal.date}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                            {deal.customer}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                            {deal.vehicle}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#6c757d' }}>
                            {deal.vin}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a' }}>
                            {deal.price}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a' }}>
                            {deal.commission}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                          <Chip
                            label={deal.status}
                            size="small"
                            sx={{
                              backgroundColor: deal.status === 'Complete' ? '#e8f5e8' : '#fff3cd',
                              color: deal.status === 'Complete' ? '#2e7d32' : '#856404',
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 2 }}>
                Commission History
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Commission details will be displayed here.
              </Typography>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 2 }}>
                Adjustment History
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d' }}>
                Adjustment details will be displayed here.
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Bottom Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
        <Button
          variant="outlined"
          onClick={handleBackToEmployees}
          sx={{
            color: '#6c757d',
            borderColor: '#e9ecef',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#f8f9fa', borderColor: '#6c757d' }
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          startIcon={<GetAppIcon />}
          sx={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': { backgroundColor: '#333333' }
          }}
        >
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default EmployeeProfile;

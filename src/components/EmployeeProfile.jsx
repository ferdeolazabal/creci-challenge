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
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import SectionHeader from '../Ui/SectionHeader';
import { employees, employeeDeals, employeeCommissions, employeeAdjustments } from '../helpers/mockEmployeeData';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GetAppIcon from '@mui/icons-material/GetApp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PendingIcon from '@mui/icons-material/Pending';
import ScheduleIcon from '@mui/icons-material/Schedule';

const EmployeeProfile = () => {

  const { getContainerStyles } = useAdaptiveStyles();
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const InfoItem = ({ icon: Icon, label, value, subLabel }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
      <Icon sx={{ color: '#6c757d', fontSize: '1.25rem' }} />
      <Box>
        <Typography variant="body2" sx={{ 
          color: '#1a1a1a', 
          fontSize: '0.875rem',
          fontWeight: label === employee.name ? 600 : 'normal'
        }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
          {subLabel}
        </Typography>
      </Box>
    </Box>
  );

  const TableHeaderCell = ({ children }) => (
    <TableCell sx={{ 
      fontWeight: 600, 
      color: '#495057',
      backgroundColor: '#f8f9fa',
      border: 'none',
      py: 1.5,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }}>
      {children}
    </TableCell>
  );

  // Reusable TableDataCell component
  const TableDataCell = ({ children, sx = {}, ...props }) => (
    <TableCell 
      sx={{ 
        border: 'none', 
        py: 1.5, 
        color: '#6c757d', 
        fontSize: '0.875rem',
        ...sx 
      }}
      {...props}
    >
      {children}
    </TableCell>
  );

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

  // Table column configuration
  const dealsColumns = [
    { key: 'dealNo', label: 'Deal No' },
    { key: 'date', label: 'Date' },
    { key: 'customer', label: 'Customer' },
    { key: 'vehicle', label: 'Vehicle' },
    { key: 'vin', label: 'VIN' },
    { key: 'price', label: 'Price' },
    { key: 'commission', label: 'Commission' },
    { key: 'status', label: 'Status' }
  ];

  const commissionsColumns = [
    { key: 'commissionId', label: 'Commission ID' },
    { key: 'period', label: 'Period' },
    { key: 'batchId', label: 'Batch ID' },
    { key: 'dealCount', label: 'Deal Count' },
    { key: 'grossCommission', label: 'Gross Commission' },
    { key: 'deductions', label: 'Deductions' },
    { key: 'netCommission', label: 'Net Commission' },
    { key: 'paidDate', label: 'Paid Date' },
    { key: 'status', label: 'Status' }
  ];

  const adjustmentsColumns = [
    { key: 'adjustmentId', label: 'Adjustment ID' },
    { key: 'date', label: 'Date' },
    { key: 'dealNumber', label: 'Deal Number' },
    { key: 'type', label: 'Type' },
    { key: 'originalAmount', label: 'Original Amount' },
    { key: 'adjustedAmount', label: 'Adjusted Amount' },
    { key: 'difference', label: 'Difference' },
    { key: 'reason', label: 'Reason' },
    { key: 'status', label: 'Status' }
  ];

  return (
    <Box sx={getContainerStyles()}>
      {/* Basic Information Card */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <SectionHeader 
            icon={PersonIcon}
            title="Basic Information"
          />
          
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {/* Left Column */}
            <Box>
              <InfoItem
                icon={PersonIcon}
                value={employee.name}
                subLabel="Employee ID: EMP001"
              />
              
              <InfoItem
                icon={EmailIcon}
                value={employee.email}
                subLabel="Primary Email"
              />
              
              <InfoItem
                icon={PhoneIcon}
                value={employee.phone}
                subLabel="Work Phone"
              />
            </Box>

            {/* Right Column */}
            <Box>
              <InfoItem
                icon={BusinessIcon}
                value={employee.dealer}
                subLabel="Dealer Code: HD01"
              />

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

              <InfoItem
                icon={CalendarTodayIcon}
                value="2022-03-15"
                subLabel="Hire Date"
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Pay Plan Card */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <SectionHeader
            icon={BusinessIcon}
            title="Pay Plan"
            subtitle="Current compensation structure and commission plan"
          />

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
            <StatCard title="Total Deals" value="45" icon={ReceiptIcon} />
            <StatCard title="Total Commissions" value="$12,500" icon={AttachMoneyIcon} />
            <StatCard title="Pending Adjustments" value="2" icon={PendingIcon} />
            <StatCard title="Last Commission" value="2024-01-15" icon={ScheduleIcon} />
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
              <SectionHeader
                icon={ReceiptIcon}
                title="Employee Deals"
                subtitle="All deals associated with this employee"
              />

              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      {dealsColumns.map((column) => (
                        <TableHeaderCell key={column.key}>
                          {column.label}
                        </TableHeaderCell>
                      ))}
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
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {deal.dealNo}
                        </TableDataCell>
                        <TableDataCell>
                          {deal.date}
                        </TableDataCell>
                        <TableDataCell>
                          {deal.customer}
                        </TableDataCell>
                        <TableDataCell>
                          {deal.vehicle}
                        </TableDataCell>
                        <TableDataCell sx={{ color: '#6c757d' }}>
                          {deal.vin}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {deal.price}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {deal.commission}
                        </TableDataCell>
                        <TableDataCell>
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
                        </TableDataCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <SectionHeader
                icon={AttachMoneyIcon}
                title="Commission History"
                subtitle="Monthly commission payments and details"
              />

              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      {commissionsColumns.map((column) => (
                        <TableHeaderCell key={column.key}>
                          {column.label}
                        </TableHeaderCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employeeCommissions.map((commission, index) => (
                      <TableRow 
                        key={index}
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableDataCell sx={{ fontWeight: 500, color: '#007bff' }}>
                          {commission.commissionId}
                        </TableDataCell>
                        <TableDataCell>
                          {commission.period}
                        </TableDataCell>
                        <TableDataCell>
                          {commission.batchId}
                        </TableDataCell>
                        <TableDataCell sx={{ textAlign: 'center' }}>
                          {commission.dealCount}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {commission.grossCommission}
                        </TableDataCell>
                        <TableDataCell sx={{ color: '#dc3545' }}>
                          {commission.deductions}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                          {commission.netCommission}
                        </TableDataCell>
                        <TableDataCell>
                          {commission.paidDate}
                        </TableDataCell>
                        <TableDataCell>
                          <Chip
                            label={commission.status}
                            size="small"
                            sx={{
                              backgroundColor: commission.status === 'Paid' ? '#1a1a1a' : '#fff3cd',
                              color: commission.status === 'Paid' ? 'white' : '#856404',
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }}
                          />
                        </TableDataCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <SectionHeader
                icon={PendingIcon}
                title="Adjustment History"
                subtitle="Commission adjustments and corrections"
              />

              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      {adjustmentsColumns.map((column) => (
                        <TableHeaderCell key={column.key}>
                          {column.label}
                        </TableHeaderCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employeeAdjustments.map((adjustment, index) => (
                      <TableRow 
                        key={index}
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableDataCell sx={{ fontWeight: 500, color: '#007bff' }}>
                          {adjustment.adjustmentId}
                        </TableDataCell>
                        <TableDataCell>
                          {adjustment.date}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {adjustment.dealNumber}
                        </TableDataCell>
                        <TableDataCell>
                          <Chip
                            label={adjustment.type}
                            size="small"
                            sx={{
                              backgroundColor: adjustment.type === 'Commission Correction' ? '#e3f2fd' : 
                                              adjustment.type === 'Bonus Adjustment' ? '#f3e5f5' : '#e8f5e8',
                              color: adjustment.type === 'Commission Correction' ? '#1976d2' : 
                                     adjustment.type === 'Bonus Adjustment' ? '#7b1fa2' : '#2e7d32',
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }}
                          />
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#6c757d' }}>
                          {adjustment.originalAmount}
                        </TableDataCell>
                        <TableDataCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {adjustment.adjustedAmount}
                        </TableDataCell>
                        <TableDataCell sx={{ 
                          fontWeight: 600, 
                          color: adjustment.difference.startsWith('+') ? '#2e7d32' : '#dc3545' 
                        }}>
                          {adjustment.difference}
                        </TableDataCell>
                        <TableDataCell sx={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {adjustment.reason}
                        </TableDataCell>
                        <TableDataCell>
                          <Chip
                            label={adjustment.status}
                            size="small"
                            sx={{
                              backgroundColor: adjustment.status === 'Approved' ? '#e8f5e8' : 
                                              adjustment.status === 'Pending' ? '#fff3cd' : '#f8d7da',
                              color: adjustment.status === 'Approved' ? '#2e7d32' : 
                                     adjustment.status === 'Pending' ? '#856404' : '#721c24',
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }}
                          />
                        </TableDataCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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

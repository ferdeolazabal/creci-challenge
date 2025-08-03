// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PendingIcon from '@mui/icons-material/Pending';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import { 
  employees, 
  employeeStats
} from '../helpers/mockEmployeeData';

const EmployeePage = () => {
  // Hook para estilos adaptativos
  const { getContainerStyles ,getTableStyles} = useAdaptiveStyles();
  
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter employees based on search query
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.dealer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewEmployee = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  return (
    <Box sx={getContainerStyles()}>
      {/* Employee Statistics Cards */}
      <Box sx={{ 
        display: 'grid', 
        gap: 2, 
        gridTemplateColumns: { 
          xs: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(4, 1fr)' 
        },
        mb: 4,
        width: '100%'
      }}>
        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Employees
            </Typography>
            <PersonIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {employeeStats.totalEmployees}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Commissions
            </Typography>
            <AttachMoneyIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              ${employeeStats.totalCommissions.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Deals
            </Typography>
            <TrendingUpIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {employeeStats.totalDeals}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Pending Adjustments
            </Typography>
            <PendingIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {employeeStats.pendingAdjustments}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Search Employees Section */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <SearchIcon sx={{ color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Search Employees
            </Typography>
          </Box>
          <TextField
            placeholder="Search by name, email, dealer, or role..."
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: '100%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#6c757d', fontSize: '1rem' }} />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      {/* Employee Directory Table */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <PersonIcon sx={{ color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Employee Directory
            </Typography>
          </Box>
          
          <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
            {/* <Table> */}
            <Table sx={{ ...getTableStyles().table, minWidth: 1200 }}>

              <TableHead>
                <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Contact
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Dealer
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                    Role
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Hire Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                    Deals
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                    Commissions
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                    Pending
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                    Last Commission
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', borderBottom: '1px solid #dee2e6' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow 
                    key={employee.id}
                    sx={{ 
                      '&:hover': { backgroundColor: '#f8f9fa' },
                      borderBottom: '1px solid #e9ecef'
                    }}
                  >
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ width: 32, height: 32, backgroundColor: '#1976d2', fontSize: '0.875rem' }}>
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                          {employee.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Box>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                          {employee.email}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#6c757d' }}>
                          {employee.phone}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                        {employee.dealer}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef', textAlign: 'center' }}>
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
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                        {employee.hireDate}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef', textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a' }}>
                        {employee.deals}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef', textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#1a1a1a' }}>
                        ${employee.commissions.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef', textAlign: 'center' }}>
                      <Box sx={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 30,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: employee.pending > 0 ? '#dc3545' : '#e9ecef',
                        color: employee.pending > 0 ? 'white' : '#6c757d'
                      }}>
                        <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 600 }}>
                          {employee.pending}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef', textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#1a1a1a' }}>
                        {employee.lastCommission}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Chip
                        label={employee.status}
                        size="small"
                        sx={{
                          backgroundColor: employee.status === 'Active' ? '#e8f5e8' : '#ffebee',
                          color: employee.status === 'Active' ? '#2e7d32' : '#c62828',
                          fontWeight: 500,
                          fontSize: '0.75rem'
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #e9ecef' }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<VisibilityIcon sx={{ fontSize: '0.875rem' }} />}
                        onClick={() => handleViewEmployee(employee.id)}
                        sx={{
                          backgroundColor: '#1a1a1a',
                          color: 'white',
                          textTransform: 'none',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          minWidth: 'auto',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          '&:hover': {
                            backgroundColor: '#333333'
                          }
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeePage;

// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TableRow,
  TableCell,
  Avatar,
  Chip,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PendingIcon from '@mui/icons-material/Pending';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import SearchBox from '../Ui/SearchBox';
import ActionButton from '../Ui/ActionButton';
import DataTable from '../Ui/DataTable';
import SectionHeader from '../Ui/SectionHeader';
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

  // Configuración de columnas de la tabla
  const tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'contact', label: 'Contact' },
    { key: 'dealer', label: 'Dealer' },
    { key: 'role', label: 'Role', align: 'center' },
    { key: 'hireDate', label: 'Hire Date' },
    { key: 'deals', label: 'Deals', align: 'center' },
    { key: 'commissions', label: 'Commissions', align: 'center' },
    { key: 'pending', label: 'Pending', align: 'center' },
    { key: 'lastCommission', label: 'Last Commission', align: 'center' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' }
  ];

  // Función para renderizar cada fila de la tabla
  const renderEmployeeRow = (employee, index) => (
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
        <ActionButton
          startIcon={<VisibilityIcon sx={{ fontSize: '0.875rem' }} />}
          onClick={() => handleViewEmployee(employee.id)}
        >
          View
        </ActionButton>
      </TableCell>
    </TableRow>
  );

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
        <StatCard 
          title="Total Employees" 
          value={employeeStats.totalEmployees} 
          icon={PersonIcon} 
        />
        <StatCard 
          title="Total Commissions" 
          value={employeeStats.totalCommissions} 
          icon={AttachMoneyIcon} 
          format="currency"
        />
        <StatCard 
          title="Total Deals" 
          value={employeeStats.totalDeals} 
          icon={TrendingUpIcon} 
        />
        <StatCard 
          title="Pending Adjustments" 
          value={employeeStats.pendingAdjustments} 
          icon={PendingIcon} 
        />
      </Box>

      {/* Search Employees Section */}
      <SearchBox
        title="Search Employees"
        placeholder="Search by name, email, dealer, or role..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Employee Directory Table */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 3 }}>
          <SectionHeader
            title="Employee Directory"
            icon={PersonIcon}
          />
          
          <DataTable
            columns={tableColumns}
            data={filteredEmployees}
            renderRow={renderEmployeeRow}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeePage;

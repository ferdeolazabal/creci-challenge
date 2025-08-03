// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TableCell,
  TableRow,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import StatCard from '../Ui/StatCard';
import DataTable from '../Ui/DataTable';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import { deals, dealsStatusColors } from "../helpers/mockDealsData";

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DealsPage = () => {
  
  const { 
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getTableStyles,
    getGridStyles
  } = useAdaptiveStyles();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('All Brands');
  const [employeeFilter, setEmployeeFilter] = useState('All Employees');

  // Data arrays for filters
  const brandOptions = ['All Brands', 'Honda', 'Acura', 'Ford', 'Mazda', 'Jeep'];
  const employeeOptions = [
    'All Employees', 'John Smith', 'Lisa Chen', 'Tom Rodriguez', 'Sarah Johnson',
    'David Brown', 'Jessica Lee', 'Jennifer Wilson', 'Robert Kim', 'Chris Johnson',
    'Mark Thompson', 'Maria Garcia', 'Rachel Green', 'Kevin Chang'
  ];

  const defaultFilters = {
    search: '',
    brand: brandOptions[0], // 'All Brands'
    employee: employeeOptions[0] // 'All Employees'
  };

  // Reusable FilterSelect component
  const FilterSelect = ({ value, onChange, options, minWidth = 100 }) => (
    <FormControl size="small" sx={{ minWidth }}>
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{ 
          height: '36px',
          backgroundColor: '#fff',
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e0e0e0',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '& .MuiSelect-select': {
            py: 1
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ fontSize: '0.875rem' }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  // Table column definitions for better organization
  const tableColumns = [
    { key: 'dealNo', label: 'Deal No', align: 'left', headerStyle: { fontWeight: 600 } },
    { key: 'date', label: 'Date', align: 'left' },
    { key: 'customer', label: 'Customer', align: 'left' },
    { key: 'vehicle', label: 'Vehicle', align: 'left' },
    { key: 'vin', label: 'VIN', align: 'center' },
    { key: 'dealer', label: 'Dealer', align: 'left' },
    { key: 'salesPerson', label: 'Sales Person', align: 'left' },
    { key: 'salesManager', label: 'Sales Manager', align: 'left' },
    { key: 'fi', label: 'F&I', align: 'left' },
    { key: 'price', label: 'Price', align: 'center' },
    { key: 'cost', label: 'Cost', align: 'center' },
    { key: 'gross', label: 'Gross', align: 'center' },
    { key: 'status', label: 'Status', align: 'center' }
  ];

  const renderDealsRow = (deal, index) => (
    <TableRow 
      key={index}
      sx={{ 
        '&:hover': { backgroundColor: '#f8f9fa' },
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <TableCell sx={{ textAlign: 'left', fontWeight: 600, color: '#1976d2' }}>
        {deal.dealNo}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        {deal.date}
      </TableCell>
      <TableCell sx={{ textAlign: 'left', fontWeight: 500 }}>
        {deal.customer}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        <Box>
          <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
            {deal.vehicle}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#6c757d' }}>
            {deal.vehicleCondition}
          </Typography>
        </Box>
      </TableCell>
      <TableCell sx={{ textAlign: 'center', color: '#6c757d', fontFamily: 'monospace' }}>
        {deal.vin}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        {deal.dealer}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        {deal.salesPerson}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        {deal.salesManager}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        {deal.fi}
      </TableCell>
      <TableCell sx={{ textAlign: 'center', fontWeight: 600 }}>
        {deal.price}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        {deal.cost}
      </TableCell>
      <TableCell sx={{ textAlign: 'center', fontWeight: 600 }}>
        {deal.gross}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        <Chip
          label={deal.status}
          color={dealsStatusColors[deal.status] || "default"}
          size="small"
          sx={{ 
            fontSize: '0.75rem', 
            fontWeight: 500,
            minWidth: '70px'
          }}
        />
      </TableCell>
    </TableRow>
  );

  // Filter deals based on search and filters
  const filteredDeals = deals.filter(deal => {
    const matchesSearch = searchQuery === '' || 
      deal.dealNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.vin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.dealer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.salesPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.salesManager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.fi.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBrand = brandFilter === 'All Brands' || 
      deal.vehicle.toLowerCase().includes(brandFilter.toLowerCase());

    const matchesEmployee = employeeFilter === 'All Employees' ||
      deal.salesPerson === employeeFilter ||
      deal.salesManager === employeeFilter ||
      deal.fi === employeeFilter;

    return matchesSearch && matchesBrand && matchesEmployee;
  });

  // Calculate stats based on filtered data
  const filteredStats = {
    totalDeals: filteredDeals.length,
    totalRevenue: filteredDeals.reduce((sum, deal) => sum + parseInt(deal.price.replace(/[$,]/g, '')), 0),
    avgDealSize: filteredDeals.length > 0 ? 
      Math.round(filteredDeals.reduce((sum, deal) => sum + parseInt(deal.price.replace(/[$,]/g, '')), 0) / filteredDeals.length) : 0,
    thisMonth: filteredDeals.length
  };

  return (
    <Box sx={getContainerStyles()}>
      {/* Search and Filter Section */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          {/* Header Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#333', mb: 1 , mt:3}}>
              🔍 Search & Filter Deals
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Search by deal number, customer name, VIN, make, model, or dealer; filter by brand and employee.
            </Typography>
          </Box>
          {/* Search Bar */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <TextField
              placeholder="Search deals..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                  backgroundColor: '#fff',
                  '& fieldset': {
                    borderColor: '#e0e0e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1976d2',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976d2',
                  },
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#9e9e9e', fontSize: '1.2rem' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      sx={{
                        backgroundColor: '#f5f5f5',
                        color: '#666',
                        width: 28,
                        height: 28,
                        '&:hover': { backgroundColor: '#e0e0e0' }
                      }}
                    >
                      <SearchIcon sx={{ fontSize: '0.9rem' }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          {/* Filters Row */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1.5, 
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <FilterSelect
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              options={brandOptions}
              minWidth={100}
            />

            <FilterSelect
              value={employeeFilter}
              onChange={(e) => setEmployeeFilter(e.target.value)}
              options={employeeOptions}
              minWidth={120}
            />

            <Button
              variant="text"
              startIcon={<span style={{ fontSize: '0.9rem' }}>✕</span>}
              onClick={() => {
                setSearchQuery(defaultFilters.search);
                setBrandFilter(defaultFilters.brand);
                setEmployeeFilter(defaultFilters.employee);
              }}
              sx={{
                textTransform: 'none',
                color: '#666',
                fontSize: '0.875rem',
                fontWeight: 400,
                minWidth: 'auto',
                px: 1.5,
                py: 0.75,
                height: '36px',
                '&:hover': { 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  color: '#333'
                }
              }}
            >
              Clear Filters
            </Button>

            <IconButton
              sx={{
                color: '#666',
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                width: 36,
                height: 36,
                '&:hover': { 
                  backgroundColor: '#f5f5f5', 
                  borderColor: '#1976d2',
                  color: '#1976d2'
                }
              }}
            >
              <FilterListIcon sx={{ fontSize: '1.1rem' }} />
            </IconButton>
          </Box>

          {/* Active Filters */}
          {(searchQuery || brandFilter !== 'All Brands' || employeeFilter !== 'All Employees') && (
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                Active filters:
              </Typography>
              
              {brandFilter !== 'All Brands' && (
                <Chip
                  label={`Brand: ${brandFilter}`}
                  size="small"
                  onDelete={() => setBrandFilter('All Brands')}
                  sx={{
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    '& .MuiChip-deleteIcon': {
                      color: '#1976d2',
                      fontSize: '0.875rem'
                    }
                  }}
                />
              )}
              
              {employeeFilter !== 'All Employees' && (
                <Chip
                  label={`Employee: ${employeeFilter}`}
                  size="small"
                  onDelete={() => setEmployeeFilter('All Employees')}
                  sx={{
                    backgroundColor: '#f3e5f5',
                    color: '#7b1fa2',
                    '& .MuiChip-deleteIcon': {
                      color: '#7b1fa2',
                      fontSize: '0.875rem'
                    }
                  }}
                />
              )}
              
              {searchQuery && (
                <Chip
                  label={`Search: "${searchQuery}"`}
                  size="small"
                  onDelete={() => setSearchQuery('')}
                  sx={{
                    backgroundColor: '#e8f5e8',
                    color: '#2e7d32',
                    '& .MuiChip-deleteIcon': {
                      color: '#2e7d32',
                      fontSize: '0.875rem'
                    }
                  }}
                />
              )}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <Box sx={getGridStyles(4)}>
        <StatCard 
          title="Total Deals" 
          value={filteredStats.totalDeals} 
          icon={ReceiptIcon} 
        />
        <StatCard 
          title="Total Revenue" 
          value={filteredStats.totalRevenue} 
          icon={AttachMoneyIcon} 
          format="currency"
        />
        <StatCard 
          title="Avg Deal Size" 
          value={filteredStats.avgDealSize} 
          icon={TrendingUpIcon} 
          format="currency"
        />
        <StatCard 
          title="This Month" 
          value={filteredStats.thisMonth} 
          icon={CalendarTodayIcon} 
        />
      </Box>

      {/* Deal Details Table */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
            Deal Details
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
            Comprehensive deal information with all financial details
          </Typography>
          
          <Box sx={{ width: '100%', overflowX: 'auto' }}>
            {filteredDeals.length > 0 ? (
              <DataTable
                columns={tableColumns}
                data={filteredDeals}
                renderRow={renderDealsRow}
                minWidth={1200}
              />
            ) : (
              <Box sx={{ py: 4, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                  No deals found matching your search criteria
                </Typography>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DealsPage;

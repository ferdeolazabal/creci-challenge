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
} from '@mui/material';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import DataTable from '../Ui/DataTable';
import SectionHeader from '../Ui/SectionHeader';
import SearchAndFilter from '../Ui/SearchAndFilter';
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
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search deals..."
        title="Search & Filter Deals"
        subtitle="Search by deal number, customer name, VIN, make, model, or dealer; filter by brand and employee."
        icon={SearchIcon}
        filters={[
          {
            key: 'brand',
            value: brandFilter,
            onChange: (e) => setBrandFilter(e.target.value),
            options: brandOptions,
            minWidth: 100
          },
          {
            key: 'employee',
            value: employeeFilter,
            onChange: (e) => setEmployeeFilter(e.target.value),
            options: employeeOptions,
            minWidth: 120
          }
        ]}
        onClearFilters={() => {
          setSearchQuery(defaultFilters.search);
          setBrandFilter(defaultFilters.brand);
          setEmployeeFilter(defaultFilters.employee);
        }}
        defaultFilters={defaultFilters}
        activeFilters={[
          ...(brandFilter !== 'All Brands' ? [{
            label: `Brand: ${brandFilter}`,
            onDelete: () => setBrandFilter('All Brands'),
            color: { bg: '#e3f2fd', text: '#1976d2' }
          }] : []),
          ...(employeeFilter !== 'All Employees' ? [{
            label: `Employee: ${employeeFilter}`,
            onDelete: () => setEmployeeFilter('All Employees'),
            color: { bg: '#f3e5f5', text: '#7b1fa2' }
          }] : []),
          ...(searchQuery ? [{
            label: `Search: "${searchQuery}"`,
            onDelete: () => setSearchQuery(''),
            color: { bg: '#e8f5e8', text: '#2e7d32' }
          }] : [])
        ]}
        cardStyles={getCardStyles()}
        cardContentStyles={getCardContentStyles()}
      />

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
          <SectionHeader
            icon={ReceiptIcon}
            title="Deal Details"
            subtitle="Comprehensive deal information with all financial details"
          />
          
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

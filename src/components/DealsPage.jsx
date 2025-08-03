// @ts-nocheck
import React, { useState } from 'react';
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
  Paper,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { deals, dealsStats, dealsStatusColors } from '../helpers/mockDealsData';

const DealsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('All Brands');
  const [employeeFilter, setEmployeeFilter] = useState('All Employees');

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
    <Box sx={{ p: 3, width: '100%', maxWidth: '100%' }}>
      {/* Header Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
          🔍 Search & Filter Deals
        </Typography>
        <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
          Search by deal number, customer name, VIN, make, model, or dealer; filter by brand and employee.
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Box sx={{ 
        backgroundColor: '#fff',
        borderRadius: 2,
        p: 2,
        mb: 3,
        border: '1px solid #e0e0e0'
      }}>
        {/* Search Bar */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 0 }}>
          <TextField
            placeholder="ander"
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
          mt: 2,
          flexWrap: 'wrap'
        }}>
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <Select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
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
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="All Brands" sx={{ fontSize: '0.875rem' }}>All Brands</MenuItem>
              <MenuItem value="Honda" sx={{ fontSize: '0.875rem' }}>Honda</MenuItem>
              <MenuItem value="Acura" sx={{ fontSize: '0.875rem' }}>Acura</MenuItem>
              <MenuItem value="Ford" sx={{ fontSize: '0.875rem' }}>Ford</MenuItem>
              <MenuItem value="Mazda" sx={{ fontSize: '0.875rem' }}>Mazda</MenuItem>
              <MenuItem value="Jeep" sx={{ fontSize: '0.875rem' }}>Jeep</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={employeeFilter}
              onChange={(e) => setEmployeeFilter(e.target.value)}
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
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="All Employees" sx={{ fontSize: '0.875rem' }}>All Employees</MenuItem>
              <MenuItem value="John Smith" sx={{ fontSize: '0.875rem' }}>John Smith</MenuItem>
              <MenuItem value="Lisa Chen" sx={{ fontSize: '0.875rem' }}>Lisa Chen</MenuItem>
              <MenuItem value="Tom Rodriguez" sx={{ fontSize: '0.875rem' }}>Tom Rodriguez</MenuItem>
              <MenuItem value="Sarah Johnson" sx={{ fontSize: '0.875rem' }}>Sarah Johnson</MenuItem>
              <MenuItem value="David Brown" sx={{ fontSize: '0.875rem' }}>David Brown</MenuItem>
              <MenuItem value="Jessica Lee" sx={{ fontSize: '0.875rem' }}>Jessica Lee</MenuItem>
              <MenuItem value="Jennifer Wilson" sx={{ fontSize: '0.875rem' }}>Jennifer Wilson</MenuItem>
              <MenuItem value="Robert Kim" sx={{ fontSize: '0.875rem' }}>Robert Kim</MenuItem>
              <MenuItem value="Chris Johnson" sx={{ fontSize: '0.875rem' }}>Chris Johnson</MenuItem>
              <MenuItem value="Mark Thompson" sx={{ fontSize: '0.875rem' }}>Mark Thompson</MenuItem>
              <MenuItem value="Maria Garcia" sx={{ fontSize: '0.875rem' }}>Maria Garcia</MenuItem>
              <MenuItem value="Rachel Green" sx={{ fontSize: '0.875rem' }}>Rachel Green</MenuItem>
              <MenuItem value="Kevin Chang" sx={{ fontSize: '0.875rem' }}>Kevin Chang</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="text"
            startIcon={<span style={{ fontSize: '0.9rem' }}>✕</span>}
            onClick={() => {
              setSearchQuery('');
              setBrandFilter('All Brands');
              setEmployeeFilter('All Employees');
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
      </Box>

      {/* Statistics Cards */}
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
        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Total Deals
              </Typography>
              <ReceiptIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {filteredStats.totalDeals}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Total Revenue
              </Typography>
              <AttachMoneyIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              ${filteredStats.totalRevenue.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Avg Deal Size
              </Typography>
              <TrendingUpIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              ${filteredStats.avgDealSize.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                This Month
              </Typography>
              <CalendarTodayIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {filteredStats.thisMonth}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Deal Details Table */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
            Deal Details
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
            Comprehensive deal information with all financial details
          </Typography>
          
          <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
            <Table size="small" sx={{ minWidth: 1200 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Deal No
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Customer
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Vehicle
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    VIN
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Dealer
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Sales Person
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Sales Manager
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    F&I
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Cost
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Gross
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDeals.length > 0 ? (
                  filteredDeals.map((deal, index) => (
                    <TableRow 
                      key={index}
                      sx={{ 
                        '&:hover': { backgroundColor: '#f8f9fa' },
                        borderBottom: '1px solid #e9ecef'
                      }}
                    >
                      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600, color: '#1976d2' }}>
                        {deal.dealNo}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.date}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 500 }}>
                        {deal.customer}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        <Box>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                            {deal.vehicle}
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#6c757d' }}>
                            {deal.vehicleCondition}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem', color: '#6c757d', fontFamily: 'monospace' }}>
                        {deal.vin}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.dealer}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.salesPerson}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.salesManager}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.fi}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
                        {deal.price}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
                        {deal.cost}
                      </TableCell>
                      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
                        {deal.gross}
                      </TableCell>
                      <TableCell sx={{ py: 2 }}>
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
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={13} sx={{ py: 4, textAlign: 'center' }}>
                      <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
                        No deals found matching your search criteria
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DealsPage;

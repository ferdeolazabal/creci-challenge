// @ts-nocheck
import React, { useState, useMemo } from 'react';
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
  Button,
  Chip,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import GetAppIcon from '@mui/icons-material/GetApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import commissionBatches from "../helpers/mockCommissionBatches";

const statusColors = {
  "Processed": "success",
  "Processing": "info",
  "Pending Review": "warning",
};

const CommissionBatches = () => {
  // Estados para los filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Filtrar los datos basado en los criterios de búsqueda
  const filteredBatches = useMemo(() => {
    return commissionBatches.filter(batch => {
      // Filtro de búsqueda por texto
      const matchesSearch = searchQuery === '' || 
        batch.batchId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.createdBy.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por marca
      const matchesBrand = selectedBrand === 'All Brands' || batch.brand === selectedBrand;

      // Filtro por estado
      const matchesStatus = selectedStatus === 'All Statuses' || batch.status === selectedStatus;

      return matchesSearch && matchesBrand && matchesStatus;
    });
  }, [searchQuery, selectedBrand, selectedStatus]);

  // Calcular estadísticas basadas en los datos filtrados
  const stats = {
    totalBatches: filteredBatches.length,
    totalCommissions: filteredBatches.reduce((sum, batch) => sum + batch.totalCommission, 0),
    totalEmployees: filteredBatches.reduce((sum, batch) => sum + batch.employees, 0),
    totalDeals: filteredBatches.reduce((sum, batch) => sum + batch.deals, 0),
  };

  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All Brands');
    setSelectedStatus('All Statuses');
  };

  return (
    <Box sx={{ p: 3, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Cards de estadísticas */}
      <Box sx={{ 
        display: 'grid', 
        gap: 2, 
        gridTemplateColumns: { 
          xs: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)' 
        },
        mb: 4,
        width: '100%',
        maxWidth: '100%'
      }}>
        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Batches
            </Typography>
            <BusinessIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {stats.totalBatches}
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', wordBreak: 'break-all' }}>
              ${stats.totalCommissions.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Employees
            </Typography>
            <PeopleIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {stats.totalEmployees}
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
              {stats.totalDeals}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Barra de búsqueda y filtros */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <SearchIcon sx={{ color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Search & Filter Batches
            </Typography>
            {(searchQuery || selectedBrand !== 'All Brands' || selectedStatus !== 'All Statuses') && (
              <Chip
                label={`${filteredBatches.length} de ${commissionBatches.length} registros`}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
            {(searchQuery || selectedBrand !== 'All Brands' || selectedStatus !== 'All Statuses') && (
              <Button
                size="small"
                onClick={clearFilters}
                sx={{ 
                  textTransform: 'none',
                  color: '#6c757d',
                  fontSize: '0.875rem'
                }}
              >
                Limpiar filtros
              </Button>
            )}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
            <TextField
              placeholder="Search by batch ID, brand, period, or creator..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                flexGrow: 1, 
                minWidth: { xs: '100%', sm: '300px', md: '400px' },
                mb: { xs: 1, md: 0 }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#6c757d', fontSize: '1rem' }} />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              width: { xs: '100%', md: 'auto' }
            }}>
              <FormControl size="small" sx={{ minWidth: 120, flex: { xs: '1 1 45%', sm: '0 0 auto' } }}>
                <Select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  displayEmpty
                  sx={{ textTransform: 'none' }}
                >
                  <MenuItem value="All Brands">All Brands</MenuItem>
                  <MenuItem value="Honda">Honda</MenuItem>
                  <MenuItem value="Acura">Acura</MenuItem>
                  <MenuItem value="Ford">Ford</MenuItem>
                  <MenuItem value="Mazda">Mazda</MenuItem>
                  <MenuItem value="Jeep">Jeep</MenuItem>
                  <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 120, flex: { xs: '1 1 45%', sm: '0 0 auto' } }}>
                <Select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  displayEmpty
                  sx={{ textTransform: 'none' }}
                >
                  <MenuItem value="All Statuses">All Statuses</MenuItem>
                  <MenuItem value="Processed">Processed</MenuItem>
                  <MenuItem value="Processing">Processing</MenuItem>
                  <MenuItem value="Pending Review">Pending Review</MenuItem>
                </Select>
              </FormControl>
              <IconButton 
                sx={{ color: '#6c757d' }}
                onClick={clearFilters}
                title="Limpiar filtros"
              >
                <FilterListIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabla de Commission Batches */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%', overflow: 'hidden' }}>
        <CardContent sx={{ p: 3, pb: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
            Commission Batches
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Manage and track commission batch processing across all brands
          </Typography>
        </CardContent>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer component={Paper} sx={{ 
            boxShadow: 'none', 
            border: '1px solid #e0e0e0', 
            borderRadius: 0,
            minWidth: '100%'
          }}>
            <Table size="small" sx={{ minWidth: 1200 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Batch ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Brand
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Period
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Created Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Processed Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Employees
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Deals
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Total Commission
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Avg Commission
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Created By
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBatches.length > 0 ? (
                  filteredBatches.map((batch, i) => (
                    <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                      <TableCell sx={{ py: 1.5, fontWeight: 600, color: '#1976d2' }}>
                        {batch.batchId}
                      </TableCell>
                      <TableCell sx={{ py: 1.5, fontWeight: 600 }}>{batch.brand}</TableCell>
                      <TableCell sx={{ py: 1.5 }}>{batch.period}</TableCell>
                      <TableCell sx={{ py: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <span style={{ fontSize: '12px', color: '#1976d2' }}>📅</span>
                          {batch.createdDate}
                        </Box>
                      </TableCell>
                      <TableCell sx={{ py: 1.5 }}>
                        {batch.processedDate ? (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <span style={{ fontSize: '12px', color: '#1976d2' }}>📅</span>
                            {batch.processedDate}
                          </Box>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell sx={{ py: 1.5 }}>{batch.employees}</TableCell>
                      <TableCell sx={{ py: 1.5 }}>{batch.deals}</TableCell>
                      <TableCell sx={{ py: 1.5, fontWeight: 600 }}>
                        ${batch.totalCommission.toLocaleString()}
                      </TableCell>
                      <TableCell sx={{ py: 1.5 }}>
                        ${batch.avgCommission.toFixed(2)}
                      </TableCell>
                      <TableCell sx={{ py: 1.5 }}>{batch.createdBy}</TableCell>
                      <TableCell sx={{ py: 1.5 }}>
                        <Chip
                          label={batch.status}
                          color={statusColors[batch.status] || "default"}
                          size="small"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      </TableCell>
                      <TableCell sx={{ py: 1.5 }}>
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <Button 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                              textTransform: 'none',
                              fontSize: '0.75rem',
                              py: 0.25,
                              px: 1,
                              minWidth: 'auto'
                            }}
                          >
                            View
                          </Button>
                          {batch.status === "Processing" && (
                            <Button 
                              size="small" 
                              variant="contained"
                              sx={{ 
                                textTransform: 'none',
                                fontSize: '0.75rem',
                                py: 0.25,
                                px: 1,
                                minWidth: 'auto',
                                backgroundColor: '#1a1a1a',
                                '&:hover': {
                                  backgroundColor: '#333'
                                }
                              }}
                            >
                              Process
                            </Button>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={12} sx={{ py: 3, textAlign: 'center' }}>
                      <Typography variant="body2" color="textSecondary">
                        No se encontraron registros que coincidan con los filtros aplicados.
                      </Typography>
                      <Button
                        size="small"
                        onClick={clearFilters}
                        sx={{ 
                          textTransform: 'none',
                          mt: 1
                        }}
                      >
                        Limpiar filtros
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default CommissionBatches;

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
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import commissionBatches from "../helpers/mockCommissionBatches";

const statusColors = {
  "Processed": "success",
  "Processing": "info",
  "Pending Review": "warning",
};

const CommissionBatches = () => {
  // Hook para estilos adaptativos
  const {
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getTableStyles,
    getGridStyles
  } = useAdaptiveStyles();

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

  // Datos de las cards de estadísticas
  const statsCards = [
    {
      title: "Total Batches",
      value: stats.totalBatches,
      icon: BusinessIcon
    },
    {
      title: "Total Commissions",
      value: `$${stats.totalCommissions.toLocaleString()}`,
      icon: AttachMoneyIcon
    },
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: PeopleIcon
    },
    {
      title: "Total Deals",
      value: stats.totalDeals,
      icon: TrendingUpIcon
    }
  ];

  // Función para renderizar una card de estadística
  const renderStatCard = (cardData, index) => (
    <StatCard
      key={index}
      title={cardData.title}
      value={cardData.value}
      icon={cardData.icon}
    />
  );

  // Configuración de columnas de la tabla
  const tableColumns = [
    { label: "Batch ID", align: "left", key: "batchId", fontWeight: 600, color: '#1976d2' },
    { label: "Brand", align: "left", key: "brand", fontWeight: 600 },
    { label: "Period", align: "center", key: "period" },
    { label: "Created Date", align: "left", key: "createdDate", isDate: true },
    { label: "Processed Date", align: "left", key: "processedDate", isProcessedDate: true },
    { label: "Employees", align: "center", key: "employees" },
    { label: "Deals", align: "center", key: "deals" },
    { label: "Total Commission", align: "center", key: "totalCommission", fontWeight: 600, format: (value) => `$${value.toLocaleString()}` },
    { label: "Avg Commission", align: "center", key: "avgCommission", format: (value) => `$${value.toFixed(2)}` },
    { label: "Created By", align: "left", key: "createdBy" },
    { label: "Status", align: "center", key: "status", isChip: true },
    { label: "Actions", align: "center", key: "actions", isAction: true }
  ];

  // Función para renderizar una celda de la tabla
  const renderTableCell = (column, row, index) => {
    const cellStyles = {
      ...getTableStyles().bodyCell,
      textAlign: column.align,
      ...(column.fontWeight && { fontWeight: column.fontWeight }),
      ...(column.color && { color: column.color })
    };

    if (column.isDate) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <span style={{ fontSize: '12px', color: '#1976d2' }}>📅</span>
            {row[column.key]}
          </Box>
        </TableCell>
      );
    }

    if (column.isProcessedDate) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          {row[column.key] ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <span style={{ fontSize: '12px', color: '#1976d2' }}>📅</span>
              {row[column.key]}
            </Box>
          ) : (
            '-'
          )}
        </TableCell>
      );
    }

    if (column.isChip) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          <Chip
            label={row[column.key]}
            color={statusColors[row[column.key]] || "default"}
            size="small"
            sx={{ fontSize: '0.75rem' }}
          />
        </TableCell>
      );
    }

    if (column.isAction) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Button 
              size="small" 
              variant="outlined"
              sx={{ 
                textTransform: 'none',
                fontSize: '0.75rem',
                py: 0.25,
                px: getTableStyles().buttonPadding,
                minWidth: 'auto'
              }}
            >
              View
            </Button>
            {row.status === "Processing" && (
              <Button 
                size="small" 
                variant="contained"
                sx={{ 
                  textTransform: 'none',
                  fontSize: '0.75rem',
                  py: 0.25,
                  px: getTableStyles().buttonPadding,
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
      );
    }

    const value = column.format ? column.format(row[column.key]) : row[column.key];
    
    return (
      <TableCell key={column.key} sx={cellStyles}>
        {value}
      </TableCell>
    );
  };

  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All Brands');
    setSelectedStatus('All Statuses');
  };

  return (
    <Box sx={getContainerStyles()}>
      {/* Cards de estadísticas */}
      <Box sx={getGridStyles(4)}>
        {statsCards.map((cardData, index) => renderStatCard(cardData, index))}
      </Box>

      {/* Barra de búsqueda y filtros */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, flexWrap: 'wrap' }}>
            <SearchIcon sx={{ color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', flexShrink: 0 ,mt:3}}>
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
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            alignItems: 'center', 
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>
            <TextField
              placeholder="Search by batch ID, brand, period, or creator..."
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                flexGrow: 1, 
                minWidth: { xs: '100%', sm: '250px', md: '300px' },
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
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' ,mt:3}}>
            Commission Batches
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Manage and track commission batch processing across all brands
          </Typography>
        </CardContent>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer sx={getTableStyles().container}>
            <Table sx={{ ...getTableStyles().table, minWidth: 1000 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  {tableColumns.map((column) => (
                    <TableCell 
                      key={column.key}
                      sx={{ 
                        ...getTableStyles().headerCell,
                        textAlign: column.align
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBatches.length > 0 ? (
                  filteredBatches.map((batch, i) => (
                    <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                      {tableColumns.map((column) => renderTableCell(column, batch, i))}
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

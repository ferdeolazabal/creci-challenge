// @ts-nocheck
import React, { useState, useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  TableCell,
  TableRow,
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
import DataTable from '../Ui/DataTable';
import SectionHeader from '../Ui/SectionHeader';
import commissionBatches from "../helpers/mockCommissionBatches";

const statusColors = {
  "Processed": "success",
  "Processing": "info",
  "Pending Review": "warning",
};

const CommissionBatches = () => {

  const {
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getTableStyles,
    getGridStyles
  } = useAdaptiveStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  const filteredBatches = useMemo(() => {
    return commissionBatches.filter(batch => {
      const matchesSearch = !searchQuery || 
        batch.batchId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        batch.createdBy.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesBrand = selectedBrand === 'All Brands' || batch.brand === selectedBrand;
      const matchesStatus = selectedStatus === 'All Statuses' || batch.status === selectedStatus;
      
      return matchesSearch && matchesBrand && matchesStatus;
    });
  }, [searchQuery, selectedBrand, selectedStatus]);

  const statsCards = [
    { title: "Total Batches", value: "6", icon: BusinessIcon },
    { title: "Total Commissions", value: "$230.832,7", icon: AttachMoneyIcon },
    { title: "Total Employees", value: "64", icon: PeopleIcon },
    { title: "Total Deals", value: "723", icon: TrendingUpIcon },
  ];

  const renderStatCard = (cardData, index) => (
    <StatCard
      key={index}
      title={cardData.title}
      value={cardData.value}
      icon={cardData.icon}
    />
  );

  const tableColumns = [
    { 
      label: "Batch ID", 
      key: "batchId", 
      align: "left",
      headerStyle: { fontWeight: 600 }
    },
    { 
      label: "Brand", 
      key: "brand", 
      align: "left",
      headerStyle: { fontWeight: 600 }
    },
    { 
      label: "Period", 
      key: "period", 
      align: "center" 
    },
    { 
      label: "Created Date", 
      key: "createdDate", 
      align: "left" 
    },
    { 
      label: "Processed Date", 
      key: "processedDate", 
      align: "left" 
    },
    { 
      label: "Employees", 
      key: "employees", 
      align: "center" 
    },
    { 
      label: "Deals", 
      key: "deals", 
      align: "center" 
    },
    { 
      label: "Total Commission", 
      key: "totalCommission", 
      align: "center",
      headerStyle: { fontWeight: 600 }
    },
    { 
      label: "Avg Commission", 
      key: "avgCommission", 
      align: "center" 
    },
    { 
      label: "Created By", 
      key: "createdBy", 
      align: "left" 
    },
    { 
      label: "Status", 
      key: "status", 
      align: "center" 
    },
    { 
      label: "Actions", 
      key: "actions", 
      align: "center" 
    }
  ];

  const renderRow = (batch, index) => (
    <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
      <TableCell sx={{ textAlign: 'left', fontWeight: 600, color: '#1976d2' }}>
        {batch.batchId}
      </TableCell>
      <TableCell sx={{ textAlign: 'left', fontWeight: 600 }}>{batch.brand}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{batch.period}</TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Box sx={{ 
            width: 6, 
            height: 6, 
            borderRadius: '50%', 
            backgroundColor: '#3b82f6' 
          }} />
          <Typography sx={{ fontSize: '0.875rem' }}>{batch.createdDate}</Typography>
        </Box>
      </TableCell>
      
      <TableCell sx={{ textAlign: 'left' }}>
        {batch.processedDate ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ 
              width: 6, 
              height: 6, 
              borderRadius: '50%', 
              backgroundColor: '#10b981' 
            }} />
            <Typography sx={{ fontSize: '0.875rem' }}>{batch.processedDate}</Typography>
          </Box>
        ) : (
          <Typography sx={{ fontSize: '0.875rem', color: '#6b7280' }}>Not processed</Typography>
        )}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{batch.employees}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{batch.deals}</TableCell>
      <TableCell sx={{ textAlign: 'center', fontWeight: 600 }}>
        ${batch.totalCommission.toLocaleString()}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>${batch.avgCommission.toFixed(2)}</TableCell>
      <TableCell sx={{ textAlign: 'left' }}>{batch.createdBy}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        <Chip
          label={batch.status}
          size="small"
          color={statusColors[batch.status]}
          sx={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}
        />
      </TableCell>
      
      <TableCell>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'left' }}>
          <Button 
            size="small" 
            variant="outlined"
            sx={{ 
              textTransform: 'none',
              fontSize: '0.75rem',
              py: 0.25,
              px: getTableStyles().buttonPadding,
              minWidth: 'auto',
              borderColor: '#d1d5db',
              color: '#374151',
              '&:hover': {
                borderColor: '#9ca3af',
                backgroundColor: '#f9fafb'
              }
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
    </TableRow>
  );

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('All Brands');
    setSelectedStatus('All Statuses');
  };

  return (
    <Box sx={getContainerStyles()}>
      <Box sx={getGridStyles(4)}>
        {statsCards.map((cardData, index) => renderStatCard(cardData, index))}
      </Box>

      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            title="Search & Filter Batches"
            icon={SearchIcon}
            sx={{ mb: 1 , mt:2}}
          />
          {(searchQuery || selectedBrand !== 'All Brands' || selectedStatus !== 'All Statuses') && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Chip
                label={`${filteredBatches.length} de ${commissionBatches.length} registros`}
                size="small"
                color="primary"
                variant="outlined"
              />
              <Button
                size="small"
                onClick={clearFilters}
                sx={{ textTransform: 'none', color: '#6c757d', fontSize: '0.875rem' }}
              >
                Limpiar filtros
              </Button>
            </Box>
          )}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            alignItems: 'center',
            flexWrap: 'wrap',
            '& > *': { flex: { xs: '1 1 100%', sm: '1 1 auto' } }
          }}>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              alignItems: 'center',
              flex: { xs: '1 1 100%', md: '1 1 auto' },
              minWidth: { xs: '100%', md: 300 }
            }}>
              <TextField
                size="small"
                placeholder="Search by Batch ID, Brand, or Creator..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#9ca3af', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ 
                  flex: 1,
                  minWidth: { xs: '100%', sm: 250 },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#f8f9fa'
                  }
                }}
              />
            </Box>
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              alignItems: 'center',
              flexWrap: 'wrap',
              flex: { xs: '1 1 100%', sm: '0 0 auto' }
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

      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            title="Commission Batches"
            subtitle="Manage and track commission batch processing across all brands"
            icon={BusinessIcon}
            sx={{ mb: 3, mt: 2 }}
          />
        </CardContent>
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          {filteredBatches.length > 0 ? (
            <DataTable
              columns={tableColumns}
              data={filteredBatches}
              renderRow={renderRow}
              minWidth={1000}
            />
          ) : (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="textSecondary">
                No se encontraron registros que coincidan con los filtros aplicados.
              </Typography>
              <Button
                size="small"
                onClick={clearFilters}
                sx={{ textTransform: 'none', mt: 1 }}
              >
                Limpiar filtros
              </Button>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default CommissionBatches;

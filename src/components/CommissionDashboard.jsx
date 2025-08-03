// @ts-nocheck
import {
  Box,
  Card,
  CardContent,
  Grid,
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
} from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import brandCommissions from "../helpers/mockBrandCommissions";

const stats = {
  totalBrands: 10,
  activeBatches: 24,
  totalEmployees: 96,
  totalCommissions: 336734.55,
};

const statusColors = {
  active: "success",
  processing: "info",
};

/**
 * CommissionDashboard component
 * @param {Object} props
 */
const CommissionDashboard = (props = {}) => {
  const {
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getTableStyles,
    getGridStyles
  } = useAdaptiveStyles();

  // Datos de las cards de estadísticas
  const statsCards = [
    {
      title: "Total Brands",
      value: stats.totalBrands,
      icon: BusinessIcon
    },
    {
      title: "Active Batches", 
      value: stats.activeBatches,
      icon: TrendingUpIcon
    },
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: PeopleIcon
    },
    {
      title: "Total Commissions",
      value: `$${stats.totalCommissions.toLocaleString()}`,
      icon: AttachMoneyIcon
    }
  ];

  // Configuración de columnas de la tabla
  const tableColumns = [
    { label: "Brand", align: "left", key: "brand", fontWeight: 500 },
    { label: "Active Batches", align: "center", key: "activeBatches" },
    { label: "Employees", align: "center", key: "employees" },
    { label: "Total Commissions", align: "center", key: "totalCommissions", fontWeight: 500, format: (value) => `$${value.toLocaleString()}` },
    { label: "Avg Commission", align: "center", key: "avgCommission", format: (value) => `$${value.toFixed(2)}` },
    { label: "Status", align: "center", key: "status", isChip: true },
    { label: "Actions", align: "center", key: "actions", isAction: true }
  ];

  // Función para renderizar una celda de la tabla
  const renderTableCell = (column, row, index) => {
    const cellStyles = {
      ...getTableStyles().bodyCell,
      textAlign: column.align,
      ...(column.fontWeight && { fontWeight: column.fontWeight })
    };

    if (column.isChip) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          <Chip
            label={row[column.key]}
            size="small"
            sx={{ 
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'capitalize',
              backgroundColor: row[column.key] === 'active' ? '#3b82f6' : '#6b7280',
              color: 'white'
            }}
          />
        </TableCell>
      );
    }

    if (column.isAction) {
      return (
        <TableCell key={column.key} sx={cellStyles}>
          <Button 
            size="small" 
            variant="contained" 
            sx={{ 
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              height: 36,
              borderRadius: 1,
              px: getTableStyles().buttonPadding,
              backgroundColor: '#3b82f6',
              '&:hover': { backgroundColor: 'rgba(59, 130, 246, 0.9)' }
            }}
          >
            View Batches
          </Button>
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

  return (
    <Box sx={getContainerStyles()}>
      {/* Cards de estadísticas */}
      <Box sx={getGridStyles(4)}>
        {statsCards.map((cardData, index) => (
          <StatCard
            key={index}
            title={cardData.title}
            value={cardData.value}
            icon={cardData.icon}
          />
        ))}
      </Box>

      {/* Table Card */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <Typography sx={{ 
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '-0.025em',
            mt: 3
          }}>
            Brand Commission Overview
          </Typography>
          <Typography sx={{ 
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            Commission batches and performance by automotive brand
          </Typography>
        </CardContent>
        <CardContent sx={{ ...getCardContentStyles(), pt: 0 }}>
          <TableContainer sx={getTableStyles().container}>
            <Table sx={getTableStyles().table}>
              <TableHead>
                <TableRow sx={{ borderBottom: '1px solid #e2e8f0' }}>
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
                {brandCommissions.map((row, i) => (
                  <TableRow 
                    key={i} 
                    sx={{ 
                      borderBottom: '1px solid #e2e8f0',
                      transition: 'colors',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' }
                    }}
                  >
                    {tableColumns.map((column) => renderTableCell(column, row, i))}
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

export default CommissionDashboard;

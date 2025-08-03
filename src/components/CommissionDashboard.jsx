// @ts-nocheck
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Chip,
  Paper,
  TableCell,
  TableRow,
} from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import DataTable from '../Ui/DataTable';
import SectionHeader from '../Ui/SectionHeader';
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

  const statsCards = [
    { title: "Total Brands", value: stats.totalBrands, icon: BusinessIcon },
    { title: "Active Batches", value: stats.activeBatches, icon: TrendingUpIcon },
    { title: "Total Employees", value: stats.totalEmployees, icon: PeopleIcon },
    { title: "Total Commissions", value: `$${stats.totalCommissions.toLocaleString()}`, icon: AttachMoneyIcon }
  ];

  const tableColumns = [
    { label: "Brand", key: "brand", align: "left", headerStyle: { fontWeight: 500 } },
    { label: "Active Batches", key: "activeBatches", align: "center" },
    { label: "Employees", key: "employees", align: "center" },
    { label: "Total Commissions", key: "totalCommissions", align: "center", headerStyle: { fontWeight: 500 }},
    { label: "Avg Commission", key: "avgCommission", align: "center" },
    { label: "Status", key: "status", align: "center" },
    { label: "Actions", key: "actions", align: "center" },
  ];

  const renderRow = (row, index) => (
    <TableRow 
      key={index} 
      sx={{ borderBottom: '1px solid #e2e8f0', transition: 'colors', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' } }}
    >
      <TableCell sx={{ textAlign: 'left', fontWeight: 500 }}>{row.brand}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{row.activeBatches}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{row.employees}</TableCell>
      <TableCell sx={{ textAlign: 'center', fontWeight: 500 }}>${row.totalCommissions.toLocaleString()}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>${row.avgCommission.toFixed(2)}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        <Chip
          label={row.status}
          size="small"
          sx={{ 
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'capitalize',
            backgroundColor: row.status === 'active' ? '#3b82f6' : '#6b7280',
            color: 'white'
          }}
        />
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
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
    </TableRow>
  );

  return (
    <Box sx={getContainerStyles()}>
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

      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            title="Brand Commission Overview"
            subtitle="Commission batches and performance by automotive brand"
            icon={BusinessIcon}
          />
        </CardContent>
        <CardContent sx={{ ...getCardContentStyles(), pt: 0 }}>
          <DataTable
            columns={tableColumns}
            data={brandCommissions}
            renderRow={renderRow}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CommissionDashboard;

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
  return (
    <Box sx={{ p: 3, width: '100%', maxWidth: '100%' }}>
      {/* Cards de estadísticas */}
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
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Brands
            </Typography>
            <BusinessIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {stats.totalBrands}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Active Batches
            </Typography>
            <TrendingUpIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              {stats.activeBatches}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
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

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#666' }}>
              Total Commissions
            </Typography>
            <AttachMoneyIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
          </CardContent>
          <CardContent sx={{ p: 3, pt: 0 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              ${stats.totalCommissions.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Tabla de marcas */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
            Brand Commission Overview
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Commission batches and performance by automotive brand
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid #e0e0e0', borderRadius: 1 }}>
            <Table size="small" sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Brand
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Active Batches
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Employees
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Total Commissions
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 1.5 }}>
                    Avg Commission
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
                {brandCommissions.map((row, i) => (
                  <TableRow key={i} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ py: 1.5, fontWeight: 600 }}>{row.brand}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>{row.activeBatches}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>{row.employees}</TableCell>
                    <TableCell sx={{ py: 1.5, fontWeight: 600 }}>
                      ${row.totalCommissions.toLocaleString()}
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>${row.avgCommission.toFixed(2)}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <Chip
                        label={row.status}
                        color={statusColors[row.status] || "default"}
                        size="small"
                        sx={{ 
                          fontSize: '0.75rem',
                          textTransform: 'capitalize'
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <Button 
                        size="small" 
                        variant="contained" 
                        sx={{ 
                          textTransform: 'none',
                          fontSize: '0.75rem',
                          py: 0.5,
                          px: 1.5
                        }}
                      >
                        View Batches
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

export default CommissionDashboard;

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
  Button,
  ButtonGroup,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import StatCard from '../Ui/StatCard';
import { 
  salesExecutivesData, 
  salesManagersData,
  fiManagersData,
  overallStats, 
  badgeColors
} from '../helpers/mockRankingsData';

const RankingsPage = () => {

  const { getContainerStyles } = useAdaptiveStyles();
  
  const [activeTab, setActiveTab] = useState(0);
  
  const RankBadge = ({ rank, badge }) => {
    if (badge) {
      return (
        <Box sx={{
          backgroundColor: getBadgeColor(badge),
          borderRadius: rank === 1 ? '12px 12px 0 12px' : 
                        rank === 2 ? '12px' : 
                        '12px 0 12px 12px',
          width: 48,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#fff',
          position: 'relative',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          '&::before': rank === 1 ? {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderBottom: `4px solid ${getBadgeColor(badge)}`,
          } : {}
        }}>
          {rank === 1 ? '🏆1st' : rank === 2 ? '🥈2nd' : '🥉3rd'}
        </Box>
      );
    }
    
    return (
      <Box sx={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        width: 32,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#6c757d',
        border: '1px solid #dee2e6'
      }}>
        #{rank}
      </Box>
    );
  };

  // Reusable TableHeader component
  const TableHeader = ({ columns }) => (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
        {columns.map((column) => (
          <TableCell 
            key={column.key}
            sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const TableDataCell = ({ children, weight = 'normal', color = '#1a1a1a', align = 'left' }) => (
    <TableCell sx={{ 
      py: 2, 
      fontSize: '0.875rem', 
      fontWeight: weight === 'bold' ? 600 : 'normal',
      color,
      textAlign: align
    }}>
      {children}
    </TableCell>
  );

  const RankingTable = ({ title, subtitle, columns, data, renderRow }) => (
    <>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 1 }}>
        🏆 {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
        {subtitle}
      </Typography>
      <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
        <Table size="small">
          <TableHeader columns={columns} />
          <TableBody>
            {data.map((employee) => (
              <TableRow 
                key={employee.rank} 
                sx={{ 
                  '&:hover': { backgroundColor: '#f8f9fa' },
                  borderBottom: '1px solid #e9ecef'
                }}
              >
                {renderRow(employee)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
  
  const getCurrentData = () => {
    switch (activeTab) {
      case 0: return salesExecutivesData;
      case 1: return salesManagersData;
      case 2: return fiManagersData;
      default: return salesExecutivesData;
    }
  };

  // Table column configurations
  const salesExecutivesColumns = [
    { key: 'rank', label: 'Rank' },
    { key: 'name', label: 'Name' },
    { key: 'dealer', label: 'Dealer' },
    { key: 'dealCount', label: 'Deal Count' },
    { key: 'frontGross', label: 'Front Gross' },
    { key: 'backGross', label: 'Back Gross' },
    { key: 'totalGross', label: 'Total Gross' }
  ];

  const salesManagersColumns = [
    { key: 'rank', label: 'Rank' },
    { key: 'name', label: 'Name' },
    { key: 'dealer', label: 'Dealer' },
    { key: 'totalCarsSold', label: 'Total Cars Sold' },
    { key: 'employeeCount', label: 'Employee Count' },
    { key: 'avgCarsPerEmployee', label: 'Avg Cars/Employee' },
    { key: 'period', label: 'Period' }
  ];

  const fiManagersColumns = [
    { key: 'rank', label: 'Rank' },
    { key: 'name', label: 'Name' },
    { key: 'dealer', label: 'Dealer' },
    { key: 'dealCount', label: 'Deal Count' },
    { key: 'frontGross', label: 'Front Gross' },
    { key: 'backGross', label: 'Back Gross' },
    { key: 'totalGross', label: 'Total Gross' }
  ];

  // Row renderers for each table type
  const renderSalesExecutiveRow = (employee) => (
    <>
      <TableDataCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableDataCell>
      <TableDataCell weight="bold" color="#1976d2">{employee.name}</TableDataCell>
      <TableDataCell color="#1976d2">{employee.dealer}</TableDataCell>
      <TableDataCell align="center">📊 {employee.dealCount}</TableDataCell>
      <TableDataCell weight="bold">${employee.frontGross.toLocaleString()}</TableDataCell>
      <TableDataCell weight="bold">${employee.backGross.toLocaleString()}</TableDataCell>
      <TableDataCell weight="bold">${employee.totalGross.toLocaleString()}</TableDataCell>
    </>
  );

  const renderSalesManagerRow = (employee) => (
    <>
      <TableDataCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableDataCell>
      <TableDataCell weight="bold">{employee.name}</TableDataCell>
      <TableDataCell color="#1976d2">{employee.dealer}</TableDataCell>
      <TableDataCell align="center">📊 {employee.totalCarsSold}</TableDataCell>
      <TableDataCell align="center">{employee.employeeCount}</TableDataCell>
      <TableDataCell weight="bold">{employee.avgCarsPerEmployee}</TableDataCell>
      <TableDataCell>{employee.period}</TableDataCell>
    </>
  );

  const renderFIManagerRow = (employee) => (
    <>
      <TableDataCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableDataCell>
      <TableDataCell weight="bold">{employee.name}</TableDataCell>
      <TableDataCell color="#1976d2">{employee.dealer}</TableDataCell>
      <TableDataCell align="center">📊 {employee.dealCount}</TableDataCell>
      <TableDataCell weight="bold">${employee.frontGross.toLocaleString()}</TableDataCell>
      <TableDataCell weight="bold">${employee.backGross.toLocaleString()}</TableDataCell>
      <TableDataCell weight="bold">${employee.totalGross.toLocaleString()}</TableDataCell>
    </>
  );

  const getBadgeColor = (badge) => {
    return badgeColors[badge] || 'transparent';
  };

  const getRankIcon = (rank) => {
    if (rank <= 3) {
      const currentData = getCurrentData();
      const employee = currentData.find(emp => emp.rank === rank);
      return <EmojiEventsIcon sx={{ color: getBadgeColor(employee?.badge), fontSize: '1.2rem' }} />;
    }
    return <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>{rank}</Typography>;
  };

  return (
    <Box sx={getContainerStyles()}>
      {/* Performance Statistics */}
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
          title="Top Deal Count"
          value="45"
          subtitle="John Smith"
          icon={ReceiptIcon}
        />
        
        <StatCard 
          title="Best Manager Efficiency"
          value="12.0"
          subtitle="Cars/Employee - Sarah Johnson"
          icon={TrendingUpIcon}
        />
        
        <StatCard 
          title="Highest Back Gross"
          value="$85K"
          subtitle="Mike Wilson"
          icon={AttachMoneyIcon}
        />
        
        <StatCard 
          title="Highest Total Gross"
          value="$237K"
          subtitle="Mike Wilson"
          icon={EmojiEventsIcon}
          iconColor="#ffd700"
        />
      </Box>

      {/* Button Group and Rankings Table */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%' }}>
        <CardContent sx={{ p: 3 }}>
          {/* Button Group */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-start',
            mb: 3
          }}>
            <ButtonGroup 
              variant="outlined"
              sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: 1,
                '& .MuiButton-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  px: 3,
                  py: 1,
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#6c757d',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)',
                    border: 'none'
                  }
                },
                '& .MuiButton-root.active': {
                  backgroundColor: '#fff',
                  color: '#1976d2',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: '#fff'
                  }
                }
              }}
            >
              <Button
                onClick={() => setActiveTab(0)}
                className={activeTab === 0 ? 'active' : ''}
              >
                Sales Executives
              </Button>
              <Button
                onClick={() => setActiveTab(1)}
                className={activeTab === 1 ? 'active' : ''}
              >
                Sales Managers
              </Button>
              <Button
                onClick={() => setActiveTab(2)}
                className={activeTab === 2 ? 'active' : ''}
              >
                F&I Managers
              </Button>
            </ButtonGroup>
          </Box>

          {/* Table Content */}
          {activeTab === 0 && (
            <RankingTable
              title="Sales Executives Rankings"
              subtitle="Performance rankings for the last 6 months"
              columns={salesExecutivesColumns}
              data={salesExecutivesData}
              renderRow={renderSalesExecutiveRow}
            />
          )}

          {activeTab === 1 && (
            <RankingTable
              title="Sales Managers Rankings"
              subtitle="Rankings based on average cars sold per employee per month"
              columns={salesManagersColumns}
              data={salesManagersData}
              renderRow={renderSalesManagerRow}
            />
          )}

          {activeTab === 2 && (
            <RankingTable
              title="F&I Managers Rankings"
              subtitle="Performance rankings for the last 6 months"
              columns={fiManagersColumns}
              data={fiManagersData}
              renderRow={renderFIManagerRow}
            />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RankingsPage;
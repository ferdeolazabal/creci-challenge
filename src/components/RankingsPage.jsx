// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TableCell,
  TableRow,
  Button,
  ButtonGroup,
} from '@mui/material';
import StatCard from '../Ui/StatCard';
import SectionHeader from '../Ui/SectionHeader';
import DataTable from '../Ui/DataTable';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import { 
  salesExecutivesData, 
  salesManagersData,
  fiManagersData,
  overallStats, 
  badgeColors
} from '../helpers/mockRankingsData';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';

const RankingsPage = () => {

  const { getContainerStyles, getCardStyles, getCardContentStyles } = useAdaptiveStyles();
  
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

  // Row renderers for each table type - return complete TableRow
  const renderSalesExecutiveRow = (employee) => (
    <TableRow 
      key={employee.rank} 
      sx={{ 
        '&:hover': { backgroundColor: '#f8f9fa' },
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600, color: '#1976d2' }}>
        {employee.name}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', color: '#1976d2' }}>
        {employee.dealer}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', textAlign: 'center' }}>
        📊 {employee.dealCount}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.frontGross.toLocaleString()}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.backGross.toLocaleString()}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.totalGross.toLocaleString()}
      </TableCell>
    </TableRow>
  );

  const renderSalesManagerRow = (employee) => (
    <TableRow 
      key={employee.rank} 
      sx={{ 
        '&:hover': { backgroundColor: '#f8f9fa' },
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        {employee.name}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', color: '#1976d2' }}>
        {employee.dealer}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', textAlign: 'center' }}>
        📊 {employee.totalCarsSold}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', textAlign: 'center' }}>
        {employee.employeeCount}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        {employee.avgCarsPerEmployee}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
        {employee.period}
      </TableCell>
    </TableRow>
  );

  const renderFIManagerRow = (employee) => (
    <TableRow 
      key={employee.rank} 
      sx={{ 
        '&:hover': { backgroundColor: '#f8f9fa' },
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <TableCell sx={{ py: 2, fontSize: '0.875rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <RankBadge rank={employee.rank} badge={employee.badge} />
        </Box>
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        {employee.name}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', color: '#1976d2' }}>
        {employee.dealer}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', textAlign: 'center' }}>
        📊 {employee.dealCount}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.frontGross.toLocaleString()}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.backGross.toLocaleString()}
      </TableCell>
      <TableCell sx={{ py: 2, fontSize: '0.875rem', fontWeight: 600 }}>
        ${employee.totalGross.toLocaleString()}
      </TableCell>
    </TableRow>
  );

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

  const getBadgeColor = (badge) => {
    return badgeColors[badge] || 'transparent';
  };

  return (
    <Box sx={getContainerStyles()}>
      <Box sx={{ 
        display: 'grid', 
        gap: 2, 
        gridTemplateColumns: { 
          xs: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)', 
          md: 'repeat(4, 1fr)' 
        },
        mb: 2,
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

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
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
      <Card sx={getCardStyles()}>
        <CardContent sx={{ ...getCardContentStyles(), p: 0, mx: 2 }}>
          {activeTab === 0 && (
            <>
              <SectionHeader 
                title="Sales Executives Rankings"
                subtitle="Performance rankings for the last 6 months"
                icon={EmojiEventsIcon}
              />
              <DataTable
                columns={salesExecutivesColumns}
                data={salesExecutivesData}
                renderRow={renderSalesExecutiveRow}
                sx={{ size: 'small' }}
                headerBackgroundColor="#f8f9fa"
              />
            </>
          )}

          {activeTab === 1 && (
            <>
              <SectionHeader 
                title="Sales Managers Rankings"
                subtitle="Rankings based on average cars sold per employee per month"
                icon={EmojiEventsIcon}
              />
              <DataTable
                columns={salesManagersColumns}
                data={salesManagersData}
                renderRow={renderSalesManagerRow}
                sx={{ size: 'small' }}
                headerBackgroundColor="#f8f9fa"
              />
            </>
          )}

          {activeTab === 2 && (
            <>
              <SectionHeader 
                title="F&I Managers Rankings"
                subtitle="Performance rankings for the last 6 months"
                icon={EmojiEventsIcon}
              />
              <DataTable
                columns={fiManagersColumns}
                data={fiManagersData}
                renderRow={renderFIManagerRow}
                sx={{ size: 'small' }}
                headerBackgroundColor="#f8f9fa"
              />
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RankingsPage;
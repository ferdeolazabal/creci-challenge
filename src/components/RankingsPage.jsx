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
  
  const getCurrentData = () => {
    switch (activeTab) {
      case 0: return salesExecutivesData;
      case 1: return salesManagersData;
      case 2: return fiManagersData;
      default: return salesExecutivesData;
    }
  };

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
        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Top Deal Count
              </Typography>
              <ReceiptIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 0.5 }}>
              45
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              John Smith
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Best Manager Efficiency
              </Typography>
              <TrendingUpIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 0.5 }}>
              12.0
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Cars/Employee - Sarah Johnson
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Highest Back Gross
              </Typography>
              <AttachMoneyIcon sx={{ width: 16, height: 16, color: '#6c757d' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 0.5 }}>
              $85K
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Mike Wilson
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
                Highest Total Gross
              </Typography>
              <EmojiEventsIcon sx={{ width: 16, height: 16, color: '#ffd700' }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 0.5 }}>
              $237K
            </Typography>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Mike Wilson
            </Typography>
          </CardContent>
        </Card>
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
            <>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 1 }}>
                🏆 Sales Executives Rankings
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
                Performance rankings for the last 6 months
              </Typography>
              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Rank
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Dealer
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Deal Count
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Front Gross
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Back Gross
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Total Gross
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {salesExecutivesData.map((employee) => (
                      <TableRow 
                        key={employee.rank} 
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableCell sx={{ py: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {employee.badge && (
                              <Box sx={{
                                backgroundColor: getBadgeColor(employee.badge),
                                borderRadius: '12px',
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
                                '&::before': employee.rank === 1 ? {
                                  content: '""',
                                  position: 'absolute',
                                  top: '-2px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '4px solid transparent',
                                  borderRight: '4px solid transparent',
                                  borderBottom: `4px solid ${getBadgeColor(employee.badge)}`,
                                } : {}
                              }}>
                                {employee.rank === 1 ? '🏆1st' : employee.rank === 2 ? '🥈2nd' : '🥉3rd'}
                              </Box>
                            )}
                            {!employee.badge && (
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
                                #{employee.rank}
                              </Box>
                            )}
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
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {activeTab === 1 && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 1 }}>
                🏆 Sales Managers Rankings
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
                Rankings based on average cars sold per employee per month
              </Typography>
              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Rank
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Dealer
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Total Cars Sold
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Employee Count
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Avg Cars/Employee
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Period
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {salesManagersData.map((employee) => (
                      <TableRow 
                        key={employee.rank} 
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableCell sx={{ py: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {employee.badge && (
                              <Box sx={{
                                backgroundColor: getBadgeColor(employee.badge),
                                borderRadius: employee.rank === 1 ? '12px 12px 0 12px' : 
                                              employee.rank === 2 ? '12px' : 
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
                                '&::before': employee.rank === 1 ? {
                                  content: '""',
                                  position: 'absolute',
                                  top: '-2px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '4px solid transparent',
                                  borderRight: '4px solid transparent',
                                  borderBottom: `4px solid ${getBadgeColor(employee.badge)}`,
                                } : {}
                              }}>
                                {employee.rank === 1 ? '🏆1st' : employee.rank === 2 ? '🥈2nd' : '🥉3rd'}
                              </Box>
                            )}
                            {!employee.badge && (
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
                                #{employee.rank}
                              </Box>
                            )}
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
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}

          {activeTab === 2 && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 1 }}>
                🏆 F&I Managers Rankings
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 3, fontSize: '0.875rem' }}>
                Performance rankings for the last 6 months
              </Typography>
              <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0' }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Rank
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Dealer
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Deal Count
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Front Gross
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Back Gross
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#495057', fontSize: '0.875rem', py: 2 }}>
                        Total Gross
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fiManagersData.map((employee) => (
                      <TableRow 
                        key={employee.rank} 
                        sx={{ 
                          '&:hover': { backgroundColor: '#f8f9fa' },
                          borderBottom: '1px solid #e9ecef'
                        }}
                      >
                        <TableCell sx={{ py: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {employee.badge && (
                              <Box sx={{
                                backgroundColor: getBadgeColor(employee.badge),
                                borderRadius: employee.rank === 1 ? '12px 12px 0 12px' : 
                                              employee.rank === 2 ? '12px' : 
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
                                '&::before': employee.rank === 1 ? {
                                  content: '""',
                                  position: 'absolute',
                                  top: '-2px',
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                  width: 0,
                                  height: 0,
                                  borderLeft: '4px solid transparent',
                                  borderRight: '4px solid transparent',
                                  borderBottom: `4px solid ${getBadgeColor(employee.badge)}`,
                                } : {}
                              }}>
                                {employee.rank === 1 ? '🏆1st' : employee.rank === 2 ? '🥈2nd' : '🥉3rd'}
                              </Box>
                            )}
                            {!employee.badge && (
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
                                #{employee.rank}
                              </Box>
                            )}
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
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RankingsPage;
// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  AppBar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadIcon from '@mui/icons-material/Upload';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

/**
 * SidebarLayout component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render
 */
const SidebarLayout = ({ children } = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { sidebarOpen } = useSidebar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const drawerContent = (
    <Box sx={{ backgroundColor: '#f8f9fa', overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 4, py: 2 }}>
        <DashboardIcon sx={{ color: '#6c757d', width: 24, height: 24 }} />
        <Typography fontWeight="600" sx={{ color: '#495057', fontSize: '0.875rem' }}>
          Commissions Dashboard
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <Box>
          <Typography 
            variant="overline" 
            sx={{ 
              display: 'flex',
              height: '32px',
              alignItems: 'center',
              px: 2, 
              color: '#6c757d',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/')}
            >
              <HomeIcon sx={{ width: 16, height: 16, color: location.pathname === '/' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/' ? 500 : 400
                }}
              >
                Home
              </Typography>
            </ListItem>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/batches' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/batches' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/batches')}
            >
              <AssignmentIcon sx={{ width: 16, height: 16, color: location.pathname === '/batches' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/batches' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/batches' ? 500 : 400
                }}
              >
                Commission Batches
              </Typography>
            </ListItem>
          </Box>
        </Box>

        <Box>
          <Typography 
            variant="overline" 
            sx={{ 
              display: 'flex',
              height: '32px',
              alignItems: 'center',
              px: 2, 
              color: '#6c757d',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Management
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/uploads' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/uploads' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/uploads')}
            >
              <UploadIcon sx={{ width: 16, height: 16, color: location.pathname === '/uploads' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/uploads' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/uploads' ? 500 : 400
                }}
              >
                Uploads
              </Typography>
            </ListItem>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/employees' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/employees' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/employees')}
            >
              <PeopleIcon sx={{ width: 16, height: 16, color: location.pathname === '/employees' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/employees' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/employees' ? 500 : 400
                }}
              >
                Employees
              </Typography>
            </ListItem>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/deals' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/deals' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/deals')}
            >
              <HandshakeIcon sx={{ width: 16, height: 16, color: location.pathname === '/deals' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/deals' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/deals' ? 500 : 400
                }}
              >
                Deals
              </Typography>
            </ListItem>
          </Box>
        </Box>

        <Box>
          <Typography 
            variant="overline" 
            sx={{ 
              display: 'flex',
              height: '32px',
              alignItems: 'center',
              px: 2, 
              color: '#6c757d',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            Analytics
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <ListItem 
              button 
              sx={{ 
                height: '32px',
                backgroundColor: location.pathname === '/rankings' ? '#e3f2fd' : 'transparent',
                '&:hover': { backgroundColor: location.pathname === '/rankings' ? '#e3f2fd' : '#f8f9fa' },
                borderRadius: 1,
                px: 2,
                py: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
              onClick={() => handleNavigation('/rankings')}
            >
              <EmojiEventsIcon sx={{ width: 16, height: 16, color: location.pathname === '/rankings' ? '#1976d2' : '#6c757d' }} />
              <Typography
                sx={{ 
                  fontSize: '0.875rem',
                  color: location.pathname === '/rankings' ? '#1976d2' : '#495057',
                  fontWeight: location.pathname === '/rankings' ? 500 : 400
                }}
              >
                Rankings
              </Typography>
            </ListItem>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      {/* AppBar para mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#f8f9fa',
            color: '#495057',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="abrir menú"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <DashboardIcon sx={{ color: '#6c757d', width: 24, height: 24 }} />
            <Typography fontWeight="600" sx={{ color: '#495057', fontSize: '0.875rem' }}>
              Commissions Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={isMobile ? mobileOpen : sidebarOpen}
        onClose={isMobile ? handleDrawerToggle : undefined}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento en mobile
        }}
        sx={{
          width: sidebarOpen ? drawerWidth : 0,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid #e9ecef',
            overflowX: 'hidden',
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Contenido principal */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          width: '100%',
          marginTop: isMobile ? '64px' : 0, // Espacio para AppBar en mobile
          transition: theme.transitions.create(['margin-left'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SidebarLayout;
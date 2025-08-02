// @ts-nocheck
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
 * @param {boolean} [props.sidebarOpen] - Whether the sidebar is open (for desktop)
 * @param {Function} [props.onToggleSidebar] - Optional callback when sidebar is toggled
 */
const SidebarLayout = ({ children, sidebarOpen = true, onToggleSidebar } = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <Toolbar >
        <DashboardIcon sx={{ mr: 1, color: '#6c757d' }} />
        <Typography variant="h6" fontWeight="600" sx={{ color: '#495057',p: 2 }}>
          Commissions
          Dashboard
        </Typography>
      </Toolbar>
      
      <List sx={{ py: 0, mb: 2 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            pl: 2, 
            pt: 2, 
            pb: 0.5, 
            color: '#6c757d',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          Dashboard
        </Typography>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/' ? '#1976d2' : '#6c757d' }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/' ? 600 : 400
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/batches' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/batches' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/batches')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/batches' ? '#1976d2' : '#6c757d' }}>
            <AssignmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Commission Batches" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/batches' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/batches' ? 600 : 400
            }}
          />
        </ListItem>
      </List>

      <List sx={{ py: 0, mb: 2 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            pl: 2, 
            pt: 2, 
            pb: 0.5, 
            color: '#6c757d',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          Management
        </Typography>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/uploads' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/uploads' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/uploads')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/uploads' ? '#1976d2' : '#6c757d' }}>
            <UploadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Uploads" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/uploads' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/uploads' ? 600 : 400
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/employees' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/employees' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/employees')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/employees' ? '#1976d2' : '#6c757d' }}>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Employees" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/employees' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/employees' ? 600 : 400
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/deals' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/deals' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/deals')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/deals' ? '#1976d2' : '#6c757d' }}>
            <HandshakeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Deals" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/deals' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/deals' ? 600 : 400
            }}
          />
        </ListItem>
      </List>

      <List sx={{ py: 0, mb: 2 }}>
        <Typography 
          variant="overline" 
          sx={{ 
            pl: 2, 
            pt: 3, 
            pb: 0.5, 
            color: '#6c757d',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          Analytics
        </Typography>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            backgroundColor: location.pathname === '/rankings' ? '#e3f2fd' : 'transparent',
            '&:hover': { backgroundColor: location.pathname === '/rankings' ? '#e3f2fd' : '#f8f9fa' },
            borderRadius: 1,
            mx: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('/rankings')}
        >
          <ListItemIcon sx={{ minWidth: 40, color: location.pathname === '/rankings' ? '#1976d2' : '#6c757d' }}>
            <EmojiEventsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Rankings" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: location.pathname === '/rankings' ? '#1976d2' : '#495057',
              fontWeight: location.pathname === '/rankings' ? 600 : 400
            }}
          />
        </ListItem>
      </List>
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
            <DashboardIcon sx={{ mr: 1, color: '#6c757d' }} />
            <Typography variant="h6" fontWeight="600" sx={{ color: '#495057' }}>
              Commissions
            </Typography>
            <Typography variant="h6" fontWeight="400" sx={{ color: '#6c757d', ml: 0.5 }}>
              Dashboard
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
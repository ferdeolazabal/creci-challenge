// @ts-nocheck
import React, { useState } from 'react';
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box>
      <Toolbar sx={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
        <IconButton
          onClick={isMobile ? handleDrawerToggle : onToggleSidebar}
          sx={{ mr: 1, color: '#6c757d', p: 0.5 }}
        >
          <DashboardIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="600" sx={{ color: '#495057' }}>
          Commissions
        </Typography>
        <Typography variant="h6" fontWeight="400" sx={{ color: '#6c757d', ml: 0.5 }}>
          Dashboard
        </Typography>
      </Toolbar>
      
      <List sx={{ py: 0 }}>
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
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <AssignmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Commission Batches" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
      </List>

      <Divider sx={{ mx: 2, borderColor: '#e9ecef' }} />

      <List sx={{ py: 0 }}>
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
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <UploadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Uploads" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Employees" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <HandshakeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Deals" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
      </List>

      <Divider sx={{ mx: 2, borderColor: '#e9ecef' }} />

      <List sx={{ py: 0 }}>
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
          Analytics
        </Typography>
        <ListItem 
          button 
          sx={{ 
            py: 0.5,
            '&:hover': { backgroundColor: '#f8f9fa' }
          }}
          onClick={isMobile ? handleDrawerToggle : undefined}
        >
          <ListItemIcon sx={{ minWidth: 40, color: '#6c757d' }}>
            <EmojiEventsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary="Rankings" 
            primaryTypographyProps={{ 
              fontSize: '0.875rem',
              color: '#495057'
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Botón flotante para abrir sidebar en desktop cuando está cerrado */}
      {!isMobile && !sidebarOpen && (
        <IconButton
          onClick={onToggleSidebar}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: '#f8f9fa',
            color: '#6c757d',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            '&:hover': {
              backgroundColor: '#e9ecef',
            },
          }}
        >
          <DashboardIcon />
        </IconButton>
      )}

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
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            borderRight: '1px solid #e9ecef',
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
          p: 1,
          marginTop: isMobile ? '64px' : 0, // Espacio para AppBar en mobile
          marginLeft: !isMobile && !sidebarOpen ? 0 : !isMobile ? `${drawerWidth}px` : 0,
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        {!isMobile && <Toolbar />}
        {children}
      </Box>
    </Box>
  );
};

export default SidebarLayout;
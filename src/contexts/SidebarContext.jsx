import React, { createContext, useContext, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

// Constante global para el ancho del sidebar
const DRAWER_WIDTH = 240;

const SidebarContext = createContext({
  sidebarOpen: true,
  mobileOpen: false,
  toggleSidebar: () => {},
  toggleMobile: () => {},
  isMobile: false,
  drawerWidth: DRAWER_WIDTH
});

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SidebarContext.Provider value={{ 
      sidebarOpen, 
      mobileOpen, 
      toggleSidebar, 
      toggleMobile, 
      isMobile,
      drawerWidth: DRAWER_WIDTH
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

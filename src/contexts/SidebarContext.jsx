import React, { createContext, useContext, useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

const SidebarContext = createContext({
  sidebarOpen: true,
  mobileOpen: false,
  toggleSidebar: () => {},
  toggleMobile: () => {},
  isMobile: false
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
      isMobile 
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

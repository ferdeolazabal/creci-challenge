// @ts-nocheck
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

/**
 * DashboardHeader component
 * @param {Object} props
 * @param {Function} [props.onToggleSidebar] - Optional callback to toggle sidebar
 * @param {boolean} [props.isMobile] - Whether the device is mobile
 * @param {string} [props.title] - Header title
 */
const DashboardHeader = ({ onToggleSidebar, isMobile = false, title = "Commission Batches Overview" }) => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#fff' }}>
      {/* Título con botón de toggle */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        p: 3, 
        pb: 2,
        width: '100%'
      }}>
        {!isMobile && (
          <IconButton
            onClick={onToggleSidebar}
            sx={{
              color: '#6c757d',
              p: 1,
              '&:hover': {
                backgroundColor: '#f8f9fa',
              },
            }}
          >
            <ViewModuleIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
          {title}
        </Typography>
      </Box>
      
      {/* Divider que abarca todo el ancho */}
      <Divider sx={{ borderColor: '#e0e0e0' }} />
    </Box>
  );
};

export default DashboardHeader;

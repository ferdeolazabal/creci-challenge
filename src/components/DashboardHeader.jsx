// @ts-nocheck
import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

/**
 * DashboardHeader component
 * @param {Object} props
 * @param {Function} [props.onToggleSidebar] - Optional callback to toggle sidebar
 * @param {boolean} [props.isMobile] - Whether the device is mobile
 * @param {string} [props.title] - Header title
 * @param {boolean} [props.showCreateButton] - Whether to show the Create New Batch button
 */
const DashboardHeader = ({ onToggleSidebar, isMobile = false, title = "Commission Batches Overview", showCreateButton = false }) => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#fff' }}>
      {/* Título con botón de toggle */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: 1, 
        p: 3, 
        pb: 2,
        width: '100%'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
        
        {showCreateButton && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1a1a1a',
              color: 'white',
              textTransform: 'none',
              fontWeight: 500,
              px: 3,
              py: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#2a2a2a',
              },
            }}
          >
            Create New Batch
          </Button>
        )}
      </Box>
      
      <Divider sx={{ borderColor: '#e0e0e0' }} />
    </Box>
  );
};

export default DashboardHeader;

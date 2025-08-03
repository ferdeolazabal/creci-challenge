// @ts-nocheck
import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * DashboardHeader component
 * @param {Object} props
 * @param {boolean} [props.isMobile] - Whether the device is mobile
 * @param {string} [props.title] - Header title
 * @param {boolean} [props.showCreateButton] - Whether to show the Create New Batch button
 * @param {Function} [props.onBackClick] - Optional callback for back button
 * @param {string} [props.backText] - Optional back button text
 * @param {React.ReactNode} [props.rightContent] - Optional content for right side
 */
const DashboardHeader = ({ 
  isMobile = false, 
  title = "Commission Batches Overview", 
  showCreateButton = false,
  onBackClick,
  backText,
  rightContent
}) => {
  const { toggleSidebar, toggleMobile, isMobile: isMobileContext } = useSidebar();

  const handleToggle = () => {
    if (isMobileContext) {
      toggleMobile();
    } else {
      toggleSidebar();
    }
  };
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
          <IconButton
            onClick={handleToggle}
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
          {onBackClick && (
            <Button
              onClick={onBackClick}
              variant="text"
              startIcon={<ArrowBackIcon sx={{ fontSize: '16px' }} />}
              sx={{
                color: '#6c757d',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 400,
                p: '4px 8px',
                minWidth: 'auto',
                backgroundColor: 'transparent',
                border: '1px solid #d0d0d0',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(108, 117, 125, 0.08)',
                  borderColor: '#b0b0b0',
                },
              }}
            >
              {backText || 'Back'}
            </Button>
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
        
        {rightContent && rightContent}
      </Box>
      
      <Divider sx={{ borderColor: '#e0e0e0' }} />
    </Box>
  );
};

export default DashboardHeader;

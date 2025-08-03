// @ts-nocheck
import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
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
  
  const { getContainerStyles, styles } = useAdaptiveStyles();
  
  const containerPadding = getContainerStyles().p;
  
  const titleStyles = {
    fontWeight: 600, 
    color: '#333',
    fontSize: '1rem' 
  };

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
        p: containerPadding, 
        pb: typeof containerPadding === 'object' 
          ? { xs: containerPadding.xs / 2, md: containerPadding.md / 2 }
          : containerPadding / 2,
        width: '100%'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={handleToggle}
            sx={{
              color: '#6c757d',
              p: 0.8,
              '&:hover': {
                backgroundColor: '#f8f9fa',
              },
            }}
          >
            <ViewModuleIcon sx={{ fontSize: styles.iconSize }} />
          </IconButton>
          {onBackClick && (
            <Button
              onClick={onBackClick}
              variant="text"
              startIcon={<ArrowBackIcon sx={{ fontSize: '12.8px' }} />}
              sx={{
                color: '#6c757d',
                textTransform: 'none',
                fontSize: '11.2px',
                fontWeight: 400,
                p: '3.2px 6.4px',
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
          <Typography variant="h6" sx={titleStyles}>
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
              px: typeof containerPadding === 'object' 
                ? { xs: containerPadding.xs * 0.8, md: containerPadding.md * 0.8 }
                : containerPadding * 0.8,
              py: typeof containerPadding === 'object'
                ? { xs: (containerPadding.xs / 3) * 0.8, md: (containerPadding.md / 4) * 0.8 }
                : (containerPadding / 4) * 0.8,
              borderRadius: 1,
              fontSize: '0.7rem',
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

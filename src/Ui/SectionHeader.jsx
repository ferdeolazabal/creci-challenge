// @ts-nocheck
import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

/**
 * SectionHeader component - Componente reutilizable para headers de sección
 * @param {Object} props
 * @param {string} props.title - Título de la sección
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {React.ComponentType} props.icon - Icono para el título
 * @param {Object} props.sx - Estilos adicionales
 */
const SectionHeader = ({ 
  title, 
  subtitle, 
  icon: IconComponent, 
  sx = {} 
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: subtitle ? 2 : 3, ...sx }}>
      {IconComponent && <IconComponent sx={{ color: '#6c757d' }} />}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem', mt: 0.5 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SectionHeader;

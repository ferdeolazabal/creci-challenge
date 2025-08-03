// @ts-nocheck
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';

/**
 * StatCard component - Componente reutilizable para mostrar estadísticas
 * @param {Object} props
 * @param {string} props.title - Título de la estadística
 * @param {string|number} props.value - Valor de la estadística
 * @param {React.ComponentType} props.icon - Componente de icono de Material-UI
 * @param {string} props.format - Formato del valor ('number', 'currency')
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {string} props.iconColor - Color del icono
 * @param {Object} props.sx - Estilos adicionales para el Card
 */
const StatCard = ({ 
  title, 
  value, 
  icon: IconComponent, 
  format = 'number', 
  subtitle, 
  iconColor = '#6c757d',
  sx = {} 
}) => {
  const {
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles
  } = useAdaptiveStyles();

  // Formatear el valor basado en el tipo
  const formatValue = (val, fmt) => {
    if (fmt === 'currency') {
      return `$${val.toLocaleString()}`;
    }
    return typeof val === 'number' ? val.toLocaleString() : val;
  };

  // Si hay subtitle, usar el layout de RankingsPage, sino usar el layout estándar
  if (subtitle) {
    return (
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', ...sx }}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#6c757d' }}>
              {title}
            </Typography>
            <IconComponent sx={{ width: 16, height: 16, color: iconColor }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a1a1a', mb: 0.5 }}>
            {formatValue(value, format)}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    );
  }

  // Layout estándar para otros componentes
  return (
    <Card sx={{ ...getCardStyles(), ...sx }}>
      <CardContent sx={getCardContentStyles(true)}>
        <Typography sx={{ 
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '-0.025em'
        }}>
          {title}
        </Typography>
        <IconComponent sx={{ ...getIconStyles(), color: iconColor }} />
      </CardContent>
      <CardContent sx={getCardContentStyles()}>
        <Typography sx={getMainTextStyles()}>
          {formatValue(value, format)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;

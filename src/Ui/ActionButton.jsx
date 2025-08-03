// @ts-nocheck
import React from 'react';
import { Button } from '@mui/material';

/**
 * ActionButton component - Componente reutilizable para botones de acción
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {React.ComponentType} props.startIcon - Icono al inicio del botón
 * @param {function} props.onClick - Función que se ejecuta al hacer click
 * @param {string} props.variant - Variante del botón ('contained', 'outlined', 'text')
 * @param {string} props.color - Color del botón
 * @param {string} props.size - Tamaño del botón ('small', 'medium', 'large')
 * @param {Object} props.sx - Estilos adicionales
 * @param {boolean} props.disabled - Si el botón está deshabilitado
 */
const ActionButton = ({ 
  children,
  startIcon,
  onClick,
  variant = 'contained',
  color = 'primary',
  size = 'small',
  disabled = false,
  sx = {},
  ...props
}) => {
  const defaultStyles = {
    textTransform: 'none',
    fontSize: '0.75rem',
    fontWeight: 500,
    minWidth: 'auto',
    px: 1.5,
    py: 0.5,
    borderRadius: 1,
  };

  // Estilos específicos por variante
  const variantStyles = {
    contained: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      '&:hover': {
        backgroundColor: '#333333'
      }
    },
    outlined: {
      borderColor: '#e9ecef',
      color: '#6c757d',
      '&:hover': {
        backgroundColor: '#f8f9fa',
        borderColor: '#6c757d'
      }
    }
  };

  const combinedStyles = {
    ...defaultStyles,
    ...(variantStyles[variant] || {}),
    ...sx
  };

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      sx={combinedStyles}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ActionButton;

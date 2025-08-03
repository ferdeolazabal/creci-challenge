// @ts-nocheck
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * SearchBox component - Componente reutilizable para búsqueda
 * @param {Object} props
 * @param {string} props.title - Título de la sección de búsqueda
 * @param {string} props.placeholder - Placeholder del campo de búsqueda
 * @param {string} props.value - Valor actual de la búsqueda
 * @param {function} props.onChange - Función que se ejecuta al cambiar el valor
 * @param {React.ComponentType} props.icon - Icono opcional para el título
 * @param {Object} props.sx - Estilos adicionales para el Card
 */
const SearchBox = ({ 
  title = "Search", 
  placeholder = "Search...", 
  value, 
  onChange, 
  icon: IconComponent = SearchIcon,
  sx = {} 
}) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 3, ...sx }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <IconComponent sx={{ color: '#6c757d' }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
            {title}
          </Typography>
        </Box>
        <TextField
          placeholder={placeholder}
          variant="outlined"
          size="small"
          value={value}
          onChange={onChange}
          sx={{ width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#6c757d', fontSize: '1rem' }} />
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SearchBox;

// @ts-nocheck
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SectionHeader from './SectionHeader';

/**
 * SearchAndFilter component - Componente reutilizable para búsqueda y filtros
 * @param {Object} props
 * @param {string} props.searchQuery - Valor actual de búsqueda
 * @param {function} props.onSearchChange - Función para manejar cambios en búsqueda
 * @param {string} props.searchPlaceholder - Placeholder para el campo de búsqueda
 * @param {Array} props.filters - Array de objetos de filtro {key, label, value, options, onChange}
 * @param {function} props.onClearFilters - Función para limpiar todos los filtros
 * @param {Object} props.defaultFilters - Valores por defecto de los filtros
 * @param {string} props.title - Título de la sección
 * @param {string} props.subtitle - Subtítulo de la sección
 * @param {React.ComponentType} props.icon - Icono para el header
 * @param {Array} props.activeFilters - Array de filtros activos para mostrar chips
 * @param {number} props.totalResults - Total de resultados filtrados
 * @param {number} props.totalRecords - Total de registros sin filtrar
 * @param {Object} props.cardStyles - Estilos para el Card
 * @param {Object} props.cardContentStyles - Estilos para el CardContent
 */
const SearchAndFilter = ({
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Search...",
  filters = [],
  onClearFilters,
  defaultFilters = {},
  title = "Search & Filter",
  subtitle,
  icon = SearchIcon,
  activeFilters = [],
  totalResults,
  totalRecords,
  cardStyles = {},
  cardContentStyles = {},
  showResultsCount = false,
  children
}) => {
  
  // Verificar si hay filtros activos
  const hasActiveFilters = searchQuery || 
    filters.some(filter => filter.value !== defaultFilters[filter.key]);

  // Crear componente FilterSelect reutilizable
  const FilterSelect = ({ filter }) => (
    <FormControl 
      size="small" 
      sx={{ 
        minWidth: filter.minWidth || 120,
        flex: { xs: '1 1 45%', sm: '0 0 auto' }
      }}
    >
      <Select
        value={filter.value}
        onChange={filter.onChange}
        displayEmpty
        sx={{ 
          textTransform: 'none',
          height: '36px',
          backgroundColor: '#fff',
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e0e0e0',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '& .MuiSelect-select': {
            py: 1
          }
        }}
      >
        {filter.options.map((option) => (
          <MenuItem 
            key={option.value || option} 
            value={option.value || option} 
            sx={{ fontSize: '0.875rem' }}
          >
            {option.label || option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Card sx={{ 
      borderRadius: 2, 
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
      width: '100%',
      ...cardStyles 
    }}>
      <CardContent sx={{ 
        p: 3,
        '&:last-child': { pb: 3 },
        ...cardContentStyles 
      }}>
        {/* Header Section */}
        <SectionHeader
          icon={icon}
          title={title}
          subtitle={subtitle}
        />

        {/* Results Count (if enabled) */}
        {showResultsCount && hasActiveFilters && totalResults !== undefined && totalRecords !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Chip
              label={`${totalResults} de ${totalRecords} registros`}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Button
              size="small"
              onClick={onClearFilters}
              sx={{ 
                textTransform: 'none', 
                color: '#6c757d', 
                fontSize: '0.875rem' 
              }}
            >
              Limpiar filtros
            </Button>
          </Box>
        )}

        {/* Search Bar */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <TextField
            placeholder={searchPlaceholder}
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ 
              flex: 1,
              minWidth: { xs: '100%', sm: 250 },
              '& .MuiOutlinedInput-root': {
                height: '40px',
                backgroundColor: '#f8f9fa',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                },
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => onSearchChange('')}
                    sx={{
                      backgroundColor: '#f5f5f5',
                      color: '#666',
                      width: 28,
                      height: 28,
                      '&:hover': { backgroundColor: '#e0e0e0' }
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>✕</span>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        {/* Filters Row */}
        <Box sx={{ 
          display: 'flex', 
          gap: 1.5, 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Render filter selects */}
          {filters.map((filter, index) => (
            <FilterSelect key={filter.key || index} filter={filter} />
          ))}

          {/* Clear Filters Button */}
          <Button
            variant="text"
            startIcon={<span style={{ fontSize: '0.9rem' }}>✕</span>}
            onClick={onClearFilters}
            sx={{
              textTransform: 'none',
              color: '#666',
              fontSize: '0.875rem',
              fontWeight: 400,
              minWidth: 'auto',
              px: 1.5,
              py: 0.75,
              height: '36px',
              '&:hover': { 
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                color: '#333'
              }
            }}
          >
            Clear Filters
          </Button>

          {/* Filter Icon Button */}
          <IconButton
            sx={{
              color: '#6c757d',
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              width: 36,
              height: 36,
              '&:hover': { 
                backgroundColor: '#f5f5f5', 
                borderColor: '#1976d2',
                color: '#1976d2'
              }
            }}
            title="Limpiar filtros"
            onClick={onClearFilters}
          >
            <FilterListIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Box>

        {/* Active Filters Chips */}
        {activeFilters.length > 0 && (
          <Box sx={{ 
            mt: 2, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1, 
            flexWrap: 'wrap' 
          }}>
            <Typography variant="body2" sx={{ color: '#6c757d', fontSize: '0.875rem' }}>
              Active filters:
            </Typography>
            
            {activeFilters.map((activeFilter, index) => (
              <Chip
                key={index}
                label={activeFilter.label}
                size="small"
                onDelete={activeFilter.onDelete}
                sx={{
                  backgroundColor: activeFilter.color?.bg || '#e3f2fd',
                  color: activeFilter.color?.text || '#1976d2',
                  '& .MuiChip-deleteIcon': {
                    color: activeFilter.color?.text || '#1976d2',
                    fontSize: '0.875rem'
                  }
                }}
              />
            ))}
          </Box>
        )}

        {/* Custom content slot */}
        {children}
      </CardContent>
    </Card>
  );
};

export default SearchAndFilter;

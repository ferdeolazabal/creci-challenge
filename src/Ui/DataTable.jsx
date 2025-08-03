// @ts-nocheck
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

/**
 * DataTable component - Componente reutilizable para tablas
 * @param {Object} props
 * @param {Array} props.columns - Configuración de columnas
 * @param {Array} props.data - Datos de la tabla
 * @param {function} props.renderRow - Función para renderizar cada fila
 * @param {Object} props.sx - Estilos adicionales
 * @param {number} props.minWidth - Ancho mínimo de la tabla
 * @param {string} props.headerBackgroundColor - Color de fondo del header
 * @param {Object} props.containerSx - Estilos adicionales para el container
 */
const DataTable = ({ 
  columns = [], 
  data = [], 
  renderRow, 
  sx = {},
  minWidth = 1200,
  headerBackgroundColor = '#f8f9fa',
  containerSx = {}
}) => {
  return (
    <TableContainer sx={{ borderRadius: 1, border: '1px solid #e0e0e0', ...containerSx }}>
      <Table sx={{ minWidth, ...sx }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: headerBackgroundColor }}>
            {columns.map((column, index) => (
              <TableCell 
                key={column.key || index}
                sx={{ 
                  fontWeight: 600, 
                  color: '#495057', 
                  borderBottom: '1px solid #dee2e6',
                  textAlign: column.align || 'left',
                  ...column.headerStyle
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => renderRow(row, index))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

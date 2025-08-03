// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import HistoryIcon from '@mui/icons-material/History';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';
import ProcessingIcon from '@mui/icons-material/Sync';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import { 
  documentTypes, 
  uploadHistory, 
  uploadStats, 
  supportedFormats,
  statusColors,
  mappingStatusColors 
} from '../helpers/mockUploadData';

const UploadPage = () => {
  // Hook para estilos adaptativos
  const {
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getTableStyles
  } = useAdaptiveStyles();

  const [selectedFiles, setSelectedFiles] = useState([]);

  // Reusable SectionHeader component
  const SectionHeader = ({ icon: Icon, title, subtitle, iconColor = '#1976d2', marginTop = false }) => (
    <Box sx={{ mb: marginTop ? 3 : 2, mt: marginTop ? 3 : 0 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Icon sx={{ mr: 2, color: iconColor, fontSize: 24 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
          {title}
        </Typography>
      </Box>
      {subtitle && (
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );

  // Reusable TableHeader component
  const TableHeader = ({ columns }) => (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
        {columns.map((column) => (
          <TableCell key={column.key} sx={{ fontWeight: 600, py: 2 }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  // Reusable TableDataCell component
  const TableDataCell = ({ children, weight = 'normal', color = '#1a1a1a' }) => (
    <TableCell sx={{ 
      py: 2,
      fontWeight: weight === 'bold' ? 600 : weight === 'medium' ? 500 : 'normal',
      color
    }}>
      {children}
    </TableCell>
  );

  // Reusable StatusChip component
  const StatusChip = ({ status, colorMapping, withIcon = false, getIcon }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {withIcon && getIcon && getIcon(status)}
      <Chip
        label={status}
        size="small"
        color={colorMapping[status]}
        sx={{ fontSize: '0.75rem' }}
      />
    </Box>
  );

  const handleFileSelect = () => {
    // Simular selección de archivos
    console.log('File selection triggered');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processed':
        return <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />;
      case 'Pending Mapping':
        return <PendingIcon sx={{ color: '#f44336', fontSize: 20 }} />;
      default:
        return <PendingIcon sx={{ color: '#f44336', fontSize: 20 }} />;
    }
  };

  // Table column configurations
  const documentTypesColumns = [
    { key: 'documentType', label: 'Document Type' },
    { key: 'description', label: 'Description' },
    { key: 'requiredFields', label: 'Required Mapping Fields' },
    { key: 'mappingRequired', label: 'Mapping Required' }
  ];

  const uploadHistoryColumns = [
    { key: 'filename', label: 'Filename' },
    { key: 'type', label: 'Type' },
    { key: 'description', label: 'Description' },
    { key: 'uploadedBy', label: 'Uploaded By' },
    { key: 'timestamp', label: 'Timestamp' },
    { key: 'status', label: 'Status' },
    { key: 'mappingStatus', label: 'Mapping Status' }
  ];

  return (
    <Box sx={getContainerStyles()}>
      {/* Upload Multiple Documents Section */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            icon={CloudUploadIcon}
            title="Upload Multiple Documents"
            subtitle="Upload multiple commission documents at once. After upload, you'll need to map each document to its type and configure field mappings."
            marginTop={true}
          />

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
              Select Files
            </Typography>
            <Paper 
              sx={{ 
                p: 4, 
                border: '2px dashed #d1d5db', 
                textAlign: 'center',
                backgroundColor: '#fafbfc',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: '#1976d2',
                  backgroundColor: '#f0f8ff',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.1)'
                }
              }}
              onClick={handleFileSelect}
            >
              <FileUploadIcon sx={{ fontSize: 48, color: '#6c757d', mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1, color: '#374151' }}>
                Elegir archivos
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                Ningún archivo seleccionado
              </Typography>
              <Typography variant="caption" color="textSecondary" sx={{ display: 'block', mt: 2 }}>
                Arrastra y suelta archivos aquí o haz clic para seleccionar
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body2" color="textSecondary" sx={{ 
              fontSize: '0.875rem',
              backgroundColor: '#f8f9fa',
              padding: '8px 12px',
              borderRadius: 1,
              border: '1px solid #e9ecef'
            }}>
              <strong>Supported formats:</strong> Excel (.xlsx, .xls), CSV (.csv), PDF (.pdf)
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<FileUploadIcon />}
            onClick={handleFileSelect}
            sx={{
              backgroundColor: '#6c757d',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(108, 117, 125, 0.2)',
              '&:hover': {
                backgroundColor: '#5a6268',
                boxShadow: '0 4px 8px rgba(108, 117, 125, 0.3)',
                transform: 'translateY(-1px)'
              },
              '&:active': {
                transform: 'translateY(0)'
              }
            }}
          >
            Upload Files
          </Button>
        </CardContent>
      </Card>

      {/* Document Types Reference Section */}
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            icon={HistoryIcon}
            title="Document Types Reference"
            subtitle="Available document types and their mapping requirements"
            iconColor="#6c757d"
            marginTop={true}
          />
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer sx={getTableStyles().container}>
            <Table sx={{ ...getTableStyles().table, minWidth: 800 }}>
              <TableHeader columns={documentTypesColumns} />
              <TableBody>
                {documentTypes.map((docType) => (
                  <TableRow key={docType.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableDataCell weight="bold" color="#1976d2">
                      {docType.documentType}
                    </TableDataCell>
                    <TableDataCell>
                      {docType.description}
                    </TableDataCell>
                    <TableDataCell>
                      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                        {docType.requiredFields.map((field, index) => (
                          <Chip 
                            key={index}
                            label={field}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.75rem' }}
                          />
                        ))}
                      </Box>
                    </TableDataCell>
                    <TableDataCell>
                      <Chip
                        label="Yes"
                        size="small"
                        color="error"
                        sx={{ 
                          backgroundColor: '#f44336',
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '0.75rem'
                        }}
                      />
                    </TableDataCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>

      {/* Upload History Section */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 4, pb: 0 }}>
          <SectionHeader
            icon={HistoryIcon}
            title="Upload History"
            subtitle="Track all document uploads with timestamps and processing status"
            iconColor="#6c757d"
          />
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer component={Paper} sx={{ 
            boxShadow: 'none', 
            border: 'none',
            minWidth: '100%'
          }}>
            <Table size="small" sx={{ minWidth: 1000 }}>
              <TableHeader columns={uploadHistoryColumns} />
              <TableBody>
                {uploadHistory.map((upload) => (
                  <TableRow key={upload.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableDataCell weight="bold" color="#1976d2">
                      {upload.filename}
                    </TableDataCell>
                    <TableDataCell weight="medium">{upload.type}</TableDataCell>
                    <TableDataCell>{upload.description}</TableDataCell>
                    <TableDataCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PersonIcon sx={{ fontSize: 16, color: '#6c757d' }} />
                        <Typography variant="body2">
                          {upload.uploadedBy}
                        </Typography>
                      </Box>
                    </TableDataCell>
                    <TableDataCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 16, color: '#6c757d' }} />
                        <Typography variant="body2">
                          {upload.timestamp.split(' ')[0]}
                          <br />
                          <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                            {upload.timestamp.split(' ')[1]}
                          </span>
                        </Typography>
                      </Box>
                    </TableDataCell>
                    <TableDataCell>
                      <StatusChip 
                        status={upload.status}
                        colorMapping={statusColors}
                        withIcon={true}
                        getIcon={getStatusIcon}
                      />
                    </TableDataCell>
                    <TableDataCell>
                      <StatusChip 
                        status={upload.mappingStatus}
                        colorMapping={mappingStatusColors}
                      />
                    </TableDataCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default UploadPage;

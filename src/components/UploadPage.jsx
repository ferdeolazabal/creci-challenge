// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
  TableCell,
  TableRow,
  Chip,
  IconButton,
} from '@mui/material';
import { useAdaptiveStyles } from '../hooks/useAdaptiveStyles';
import DataTable from '../Ui/DataTable';
import SectionHeader from '../Ui/SectionHeader';
import { 
  documentTypes, 
  uploadHistory, 
  uploadStats, 
  supportedFormats,
  statusColors,
  mappingStatusColors 
} from '../helpers/mockUploadData';

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

const UploadPage = () => {

  const {
    getContainerStyles,
    getCardStyles,
    getCardContentStyles,
    getIconStyles,
    getMainTextStyles,
    getTableStyles
  } = useAdaptiveStyles();

  const [selectedFiles, setSelectedFiles] = useState([]);

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

  const renderDocumentTypeRow = (docType, index) => (
    <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
      <TableCell sx={{ textAlign: 'left', fontWeight: 600, color: '#1976d2' }}>
        {docType.documentType}
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>{docType.description}</TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {docType.requiredFields.map((field, fieldIndex) => (
            <Chip 
              key={fieldIndex}
              label={field}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
        </Box>
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
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
      </TableCell>
    </TableRow>
  );

  const renderUploadHistoryRow = (upload, index) => (
    <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
      <TableCell sx={{ textAlign: 'left', fontWeight: 600, color: '#1976d2' }}>
        {upload.filename}
      </TableCell>
      <TableCell sx={{ textAlign: 'left', fontWeight: 500 }}>{upload.type}</TableCell>
      <TableCell sx={{ textAlign: 'left' }}>{upload.description}</TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PersonIcon sx={{ fontSize: 16, color: '#6c757d' }} />
          <Typography variant="body2">
            {upload.uploadedBy}
          </Typography>
        </Box>
      </TableCell>
      <TableCell sx={{ textAlign: 'left' }}>
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
      </TableCell>
      <TableCell>
        <StatusChip 
          status={upload.status}
          colorMapping={statusColors}
          withIcon={true}
          getIcon={getStatusIcon}
        />
      </TableCell>
      <TableCell>
        <StatusChip 
          status={upload.mappingStatus}
          colorMapping={mappingStatusColors}
        />
      </TableCell>
    </TableRow>
  );

  const documentTypesColumns = [
    { key: 'documentType', label: 'Document Type', align: 'left', headerStyle: { fontWeight: 600 } },
    { key: 'description', label: 'Description', align: 'left' },
    { key: 'requiredFields', label: 'Required Mapping Fields', align: 'left'},
    { key: 'mappingRequired', label: 'Mapping Required', align: 'center' }
  ];

  const uploadHistoryColumns = [
    { key: 'filename', label: 'Filename', align: 'left', headerStyle: { fontWeight: 600 } },
    { key: 'type', label: 'Type', align: 'left' },
    { key: 'description', label: 'Description', align: 'left' },
    { key: 'uploadedBy', label: 'Uploaded By', align: 'left' },
    { key: 'timestamp', label: 'Timestamp', align: 'left' },
    { key: 'status', label: 'Status', align: 'center' },
    { key: 'mappingStatus', label: 'Mapping Status', align: 'center' }
  ];

  return (
    <Box sx={getContainerStyles()}>
      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            icon={CloudUploadIcon}
            title="Upload Multiple Documents"
            subtitle="Upload multiple commission documents at once. After upload, you'll need to map each document to its type and configure field mappings."
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

      <Card sx={getCardStyles()}>
        <CardContent sx={getCardContentStyles()}>
          <SectionHeader
            icon={HistoryIcon}
            title="Document Types Reference"
            subtitle="Available document types and their mapping requirements"
          />
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <DataTable
            columns={documentTypesColumns}
            data={documentTypes}
            renderRow={renderDocumentTypeRow}
            minWidth={800}
          />
        </Box>
      </Card>

      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 4, pb: 0 }}>
          <SectionHeader
            icon={HistoryIcon}
            title="Upload History"
            subtitle="Track all document uploads with timestamps and processing status"
          />
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <DataTable
            columns={uploadHistoryColumns}
            data={uploadHistory}
            renderRow={renderUploadHistoryRow}
            minWidth={1000}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default UploadPage;

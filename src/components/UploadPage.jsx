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
import { 
  documentTypes, 
  uploadHistory, 
  uploadStats, 
  supportedFormats,
  statusColors,
  mappingStatusColors 
} from '../helpers/mockUploadData';

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

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

  return (
    <Box sx={{ p: 3, width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Upload Multiple Documents Section */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CloudUploadIcon sx={{ mr: 2, color: '#1976d2', fontSize: 24 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Upload Multiple Documents
            </Typography>
          </Box>
          
          <Typography variant="body2" color="textSecondary" sx={{ mb: 4, lineHeight: 1.6 }}>
            Upload multiple commission documents at once. After upload, you'll need to map each document to its type and configure field mappings.
          </Typography>

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
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', mb: 4 }}>
        <CardContent sx={{ p: 4, pb: 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 1 }}>
            Document Types Reference
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Available document types and their mapping requirements
          </Typography>
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer component={Paper} sx={{ 
            boxShadow: 'none', 
            border: 'none',
            minWidth: '100%'
          }}>
            <Table size="small" sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Document Type</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Required Mapping Fields</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Mapping Required</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documentTypes.map((docType) => (
                  <TableRow key={docType.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ py: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        {docType.documentType}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Typography variant="body2">
                        {docType.description}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
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
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>

      {/* Upload History Section */}
      <Card sx={{ borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 4, pb: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <HistoryIcon sx={{ mr: 2, color: '#6c757d' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
              Upload History
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Track all document uploads with timestamps and processing status
          </Typography>
        </CardContent>
        
        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <TableContainer component={Paper} sx={{ 
            boxShadow: 'none', 
            border: 'none',
            minWidth: '100%'
          }}>
            <Table size="small" sx={{ minWidth: 1000 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Filename</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Uploaded By</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Timestamp</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600, py: 2 }}>Mapping Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uploadHistory.map((upload) => (
                  <TableRow key={upload.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ py: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                        {upload.filename}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {upload.type}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Typography variant="body2">
                        {upload.description}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PersonIcon sx={{ fontSize: 16, color: '#6c757d' }} />
                        <Typography variant="body2">
                          {upload.uploadedBy}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
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
                    <TableCell sx={{ py: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getStatusIcon(upload.status)}
                        <Chip
                          label={upload.status}
                          size="small"
                          color={statusColors[upload.status]}
                          sx={{ fontSize: '0.75rem' }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Chip
                        label={upload.mappingStatus}
                        size="small"
                        color={mappingStatusColors[upload.mappingStatus]}
                        sx={{ fontSize: '0.75rem' }}
                      />
                    </TableCell>
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

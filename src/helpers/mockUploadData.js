// Mock data para Upload functionality

export const documentTypes = [
  {
    id: "rpx-principal",
    documentType: "RPX - Reporte Principal de Ventas",
    description: "Reporte principal de ventas del mes corriente",
    requiredFields: [
      "Dealer Code",
      "Sales Person",
      "Deal Number",
      "Commission Amount",
      "Date",
    ],
    mappingRequired: true,
  },
  {
    id: "car-allowance",
    documentType: "Car Allowance Report",
    description: "Monthly car allowance report for employees",
    requiredFields: [
      "Employee ID",
      "Employee Name",
      "Allowance Amount",
      "Period",
    ],
    mappingRequired: true,
  },
  {
    id: "draw-report",
    documentType: "Draw Report",
    description: "Draw Report (nómina lo envía)",
    requiredFields: ["Employee ID", "Draw Amount", "Period", "Status"],
    mappingRequired: true,
  },
  {
    id: "reporte-cit",
    documentType: "Reporte CIT",
    description: "Reporte CIT (retenciones)",
    requiredFields: ["Employee ID", "Retention Amount", "Tax Code", "Period"],
    mappingRequired: true,
  },
  {
    id: "reporte-licencia",
    documentType: "Reporte Licencia",
    description: "Reporte Licencia (retenciones)",
    requiredFields: ["Employee ID", "License Fee", "License Type", "Period"],
    mappingRequired: true,
  },
  {
    id: "reportes-ssi",
    documentType: "Reportes SSI",
    description: "Reportes SSI (aplica a Chrysler y adquisiciones nuevas)",
    requiredFields: ["Dealer Code", "SSI Score", "Employee ID", "Period"],
    mappingRequired: true,
  },
  {
    id: "reporte-finanzas-ranking",
    documentType: "Reporte de Finanzas - Ranking",
    description: "Reporte de finanzas de ranking",
    requiredFields: [
      "Employee ID",
      "Ranking Position",
      "Performance Score",
      "Period",
    ],
    mappingRequired: true,
  },
  {
    id: "reporte-finanzas-dealer",
    documentType: "Reporte de Finanzas - Dealer Mapping",
    description:
      "Reporte de finanzas - source of truth de qué dealer corresponde al vendedor",
    requiredFields: [
      "Employee ID",
      "Dealer Code",
      "Dealer Name",
      "Assignment Date",
    ],
    mappingRequired: true,
  },
  {
    id: "reporte-finanzas-cdk",
    documentType: "Reporte de Finanzas - CDK Legend",
    description: "Reporte de finanzas - leyenda de número de ejecutivos CDK",
    requiredFields: ["CDK Number", "Employee Name", "Employee ID", "Role"],
    mappingRequired: true,
  },
  {
    id: "reporte-cancelaciones",
    documentType: "Reporte de Cancelaciones Trade-In",
    description: "Reporte de Cancelaciones Trade-In",
    requiredFields: [
      "Deal Number",
      "Trade-In Value",
      "Cancellation Reason",
      "Date",
    ],
    mappingRequired: true,
  },
];

// Upload History data
export const uploadHistory = [
  {
    id: "upload-001",
    filename: "RPX_Honda_Jan2024.xlsx",
    type: "RPX - Reporte Principal de Ventas",
    description: "Reporte principal de ventas Honda Enero 2024",
    uploadedBy: "John Smith",
    timestamp: "2024-01-15 14:30:00",
    status: "Processed",
    mappingStatus: "Complete",
    fileSize: "2.4 MB",
    recordCount: 1245,
  },
  {
    id: "upload-002",
    filename: "Car_Allowance_Jan2024.pdf",
    type: "Car Allowance Report",
    description: "Car allowance report for January 2024",
    uploadedBy: "Sarah Johnson",
    timestamp: "2024-01-14 09:15:00",
    status: "Processed",
    mappingStatus: "Complete",
    fileSize: "1.8 MB",
    recordCount: 156,
  },
  {
    id: "upload-003",
    filename: "Draw_Report_Jan2024.csv",
    type: "Draw Report",
    description: "Draw report from payroll for January 2024",
    uploadedBy: "Mike Wilson",
    timestamp: "2024-01-13 16:45:00",
    status: "Pending Mapping",
    mappingStatus: "Pending",
    fileSize: "856 KB",
    recordCount: 89,
  },
];

// Upload statistics
export const uploadStats = {
  filesToday: 12,
  processingQueue: 3,
  completed: 47,
  errors: 2,
  totalSize: "156.7 MB",
  totalRecords: 15678,
};

// Supported file formats
export const supportedFormats = {
  excel: [".xlsx", ".xls"],
  csv: [".csv"],
  pdf: [".pdf"],
  text: [".txt"],
};

// Status color mapping
export const statusColors = {
  Processed: "success",
  Processing: "info",
  "Pending Mapping": "error",
};

// Mapping status colors
export const mappingStatusColors = {
  Complete: "success",
  Pending: "error",
};

export default {
  documentTypes,
  uploadHistory,
  uploadStats,
  supportedFormats,
  statusColors,
  mappingStatusColors,
};

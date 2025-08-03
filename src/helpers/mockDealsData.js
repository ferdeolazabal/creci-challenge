// Mock data para Deals Database

export const deals = [
  {
    dealNo: "HD001234",
    date: "2024-01-15",
    customer: "Robert Anderson",
    vehicle: "2024 Honda Civic",
    vehicleCondition: "New",
    vin: "HJGFG14GAA251463",
    dealer: "Honda Downtown",
    salesPerson: "John Smith",
    salesManager: "Sarah Johnson",
    fi: "Mike Wilson",
    price: "$28,500",
    cost: "$25,200",
    gross: "$3300",
    status: "Complete",
  },
  {
    dealNo: "AC002345",
    date: "2024-01-14",
    customer: "Maria Rodriguez",
    vehicle: "2024 Acura TLX",
    vehicleCondition: "New",
    vin: "JGJJKF3P4AJ34840",
    dealer: "Acura North",
    salesPerson: "Lisa Chen",
    salesManager: "David Brown",
    fi: "Jessica Lee",
    price: "$42,500",
    cost: "$38,800",
    gross: "$3850",
    status: "Complete",
  },
  {
    dealNo: "FD003456",
    date: "2024-01-13",
    customer: "James Wilson",
    vehicle: "2024 Ford F-150",
    vehicleCondition: "New",
    vin: "JFYY6K6TK5A54879",
    dealer: "Ford Central",
    salesPerson: "Tom Rodriguez",
    salesManager: "Jennifer Wilson",
    fi: "Robert Kim",
    price: "$52,000",
    cost: "$47,500",
    gross: "$3700",
    status: "Complete",
  },
  {
    dealNo: "MZ004567",
    date: "2024-01-12",
    customer: "Patricia Davis",
    vehicle: "2024 Mazda CX-5",
    vehicleCondition: "New",
    vin: "JKKRGJGKVG4447I0",
    dealer: "Mazda West",
    salesPerson: "Chris Johnson",
    salesManager: "Mark Thompson",
    fi: "Maria Garcia",
    price: "$35,500",
    cost: "$32,500",
    gross: "$2700",
    status: "Complete",
  },
  {
    dealNo: "JP005678",
    date: "2024-01-11",
    customer: "Michael Brown",
    vehicle: "2024 Jeep Wrangler",
    vehicleCondition: "New",
    vin: "IC4HJGD5FKMS1690",
    dealer: "Jeep East",
    salesPerson: "John Smith",
    salesManager: "Rachel Green",
    fi: "Kevin Chang",
    price: "$48,900",
    cost: "$44,200",
    gross: "$3100",
    status: "Complete",
  },
];

// Deals statistics
export const dealsStats = {
  totalDeals: 5,
  totalRevenue: 206500,
  avgDealSize: 41300,
  thisMonth: 5,
};

// Status colors
export const dealsStatusColors = {
  Complete: "success",
  Pending: "warning",
  Processing: "info",
  Cancelled: "error",
};

// Dealers list for deals
export const dealsDealers = [
  "Honda Downtown",
  "Acura North",
  "Ford Central",
  "Mazda West",
  "Jeep East",
];

// Employees list for deals
export const dealsEmployees = [
  "John Smith",
  "Sarah Johnson",
  "Mike Wilson",
  "Lisa Chen",
  "David Brown",
  "Jessica Lee",
  "Tom Rodriguez",
  "Jennifer Wilson",
  "Robert Kim",
  "Chris Johnson",
  "Mark Thompson",
  "Maria Garcia",
  "Rachel Green",
  "Kevin Chang",
];

export default {
  deals,
  dealsStats,
  dealsStatusColors,
  dealsDealers,
  dealsEmployees,
};

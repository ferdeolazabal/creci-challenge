// @ts-nocheck

// Sales Executives Rankings data based on the provided image
export const salesExecutivesData = [
  {
    rank: 1,
    name: "John Smith",
    dealer: "Honda Downtown",
    dealCount: 45,
    frontGross: 125000,
    backGross: 35000,
    totalGross: 160000,
    badge: "gold",
  },
  {
    rank: 2,
    name: "Lisa Chen",
    dealer: "Mazda West",
    dealCount: 38,
    frontGross: 118000,
    backGross: 32000,
    totalGross: 150000,
    badge: "silver",
  },
  {
    rank: 3,
    name: "Tom Rodriguez",
    dealer: "Ford Central",
    dealCount: 42,
    frontGross: 110000,
    backGross: 28000,
    totalGross: 138000,
    badge: "bronze",
  },
  {
    rank: 4,
    name: "Amy Davis",
    dealer: "Acura North",
    dealCount: 35,
    frontGross: 105000,
    backGross: 30000,
    totalGross: 135000,
  },
  {
    rank: 5,
    name: "Chris Johnson",
    dealer: "Jeep East",
    dealCount: 40,
    frontGross: 98000,
    backGross: 25000,
    totalGross: 123000,
  },
];

// Sales Managers Rankings data based on the provided image
export const salesManagersData = [
  {
    rank: 1,
    name: "Sarah Johnson",
    dealer: "Acura North",
    totalCarsSold: 48,
    employeeCount: 4,
    avgCarsPerEmployee: 12.0,
    period: "January 2024",
    badge: "gold",
  },
  {
    rank: 2,
    name: "David Brown",
    dealer: "Jeep East",
    totalCarsSold: 55,
    employeeCount: 5,
    avgCarsPerEmployee: 11.0,
    period: "January 2024",
    badge: "silver",
  },
  {
    rank: 3,
    name: "Jennifer Wilson",
    dealer: "Honda Downtown",
    totalCarsSold: 84,
    employeeCount: 8,
    avgCarsPerEmployee: 10.5,
    period: "January 2024",
    badge: "bronze",
  },
  {
    rank: 4,
    name: "Mark Thompson",
    dealer: "Ford Central",
    totalCarsSold: 91,
    employeeCount: 9,
    avgCarsPerEmployee: 10.1,
    period: "January 2024",
  },
  {
    rank: 5,
    name: "Rachel Green",
    dealer: "Mazda West",
    totalCarsSold: 42,
    employeeCount: 5,
    avgCarsPerEmployee: 8.4,
    period: "January 2024",
  },
];

// F&I Managers Rankings data based on the provided image
export const fiManagersData = [
  {
    rank: 1,
    name: "Mike Wilson",
    dealer: "Ford Central",
    dealCount: 28,
    frontGross: 152000,
    backGross: 85000,
    totalGross: 237000,
    badge: "gold",
  },
  {
    rank: 2,
    name: "Jessica Lee",
    dealer: "Honda Downtown",
    dealCount: 25,
    frontGross: 145000,
    backGross: 78000,
    totalGross: 223000,
    badge: "silver",
  },
  {
    rank: 3,
    name: "Robert Kim",
    dealer: "Acura North",
    dealCount: 30,
    frontGross: 138000,
    backGross: 72000,
    totalGross: 210000,
    badge: "bronze",
  },
  {
    rank: 4,
    name: "Maria Garcia",
    dealer: "Jeep East",
    dealCount: 26,
    frontGross: 132000,
    backGross: 68000,
    totalGross: 200000,
  },
  {
    rank: 5,
    name: "Kevin Chang",
    dealer: "Mazda West",
    dealCount: 24,
    frontGross: 128000,
    backGross: 65000,
    totalGross: 193000,
  },
];

// Overall statistics for each category
export const overallStats = {
  salesExecutives: {
    topDealCount: 45,
    topPerformer: "John Smith",
    bestManagerEfficiency: 12.0,
    bestManager: "Sarah Johnson",
    highestBackGross: 85000,
    backGrossLeader: "Mike Wilson",
    highestTotalGross: 237000,
    totalGrossLeader: "Mike Wilson",
  },
};

// Badge colors for ranking positions
export const badgeColors = {
  gold: "#ffd700",
  silver: "#c0c0c0",
  bronze: "#cd7f32",
};

// Tab configuration
export const tabsConfig = [
  {
    id: "sales-executives",
    label: "Sales Executives",
    data: salesExecutivesData,
  },
  { id: "sales-managers", label: "Sales Managers", data: salesManagersData },
  { id: "fi-managers", label: "F&I Managers", data: fiManagersData },
];

export default {
  salesExecutivesData,
  salesManagersData,
  fiManagersData,
  overallStats,
  badgeColors,
  tabsConfig,
};

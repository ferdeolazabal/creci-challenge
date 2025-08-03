import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import SidebarLayout from './Ui/SidebarLayout';
import BatchesScreen from './screens/BatchesScreen';
import CommissionsScreen from "./screens/CommissionsScreen";
import DealsScreen from './screens/DealsScreen';
import EmployeeProfileScreen from './screens/EmployeeProfileScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import RankingsScreen from './screens/RankingsScreen';
import UploadScreen from './screens/UploadScreen';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<CommissionsScreen />} />
            <Route path="/batches" element={<BatchesScreen />} />
            <Route path="/uploads" element={<UploadScreen />} />
            <Route path="/employees" element={<EmployeeScreen />} />
            <Route path="/employee/:id" element={<EmployeeProfileScreen />} />
            <Route path="/deals" element={<DealsScreen />} />
            <Route path="/rankings" element={<RankingsScreen />} />
          </Routes>
        </SidebarLayout>
      </SidebarProvider>
    </Router>
  )
}

export default App;
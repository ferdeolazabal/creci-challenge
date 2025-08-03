import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BatchesScreen from './components/BatchesScreen';
import CommissionsScreen from "./components/CommissionsScreen";
import EmployeeScreen from './components/EmployeeScreen';
import EmployeeProfileScreen from './components/EmployeeProfileScreen';
import UploadScreen from './components/UploadScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommissionsScreen />} />
        <Route path="/batches" element={<BatchesScreen />} />
        <Route path="/uploads" element={<UploadScreen />} />
        <Route path="/employees" element={<EmployeeScreen />} />
        <Route path="/employee/:id" element={<EmployeeProfileScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BatchesScreen from './components/BatchesScreen';
import CommissionsScreen from "./components/CommissionsScreen";
import UploadScreen from './components/UploadScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommissionsScreen />} />
        <Route path="/batches" element={<BatchesScreen />} />
        <Route path="/uploads" element={<UploadScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
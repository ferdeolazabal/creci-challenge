import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BatchesScreen from './components/BatchesScreen';
import CommissionsScreen from "./components/CommissionsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CommissionsScreen />} />
        <Route path="/batches" element={<BatchesScreen />} />
      </Routes>
    </Router>
  )
}

export default App;
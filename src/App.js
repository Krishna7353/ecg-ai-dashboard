import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import ResultsPage from "./pages/ResultsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

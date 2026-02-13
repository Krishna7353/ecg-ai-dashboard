import { useLocation } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function ResultsPage() {
  const location = useLocation();
  const report = location.state;

  return (
    <div className="flex min-h-screen bg-[#0B1E3D] text-white">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h2 className="text-2xl text-[#00C2A8] mb-6">
            ECG Analysis Report
          </h2>

          {report ? (
            <div className="bg-[#142850] p-6 rounded-xl">
              <p>Condition: {report.disease}</p>
              <p>Confidence: {report.confidence}%</p>
              <p>Date: {report.date}</p>
            </div>
          ) : (
            <p>No report data received.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;

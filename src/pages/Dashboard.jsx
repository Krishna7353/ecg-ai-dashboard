import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import UploadECG from "../components/ecg/UploadECG";
import PredictionResult from "../components/ecg/PredictionResult";
import LiveECG from "../components/ecg/LiveECG";
import StatsCards from "../components/ecg/StatsCards";

function Dashboard() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    setLoading(true);

    setTimeout(() => {
      const arrhythmias = [
        "Normal Sinus Rhythm",
        "Atrial Fibrillation",
        "Premature Ventricular Contraction",
        "Ventricular Tachycardia"
      ];

      const randomDisease =
        arrhythmias[Math.floor(Math.random() * arrhythmias.length)];

      const confidence = (Math.random() * (99 - 85) + 85).toFixed(2);

      setResult({
        disease: randomDisease,
        confidence
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#0B1E3D] text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <UploadECG
            image={image}
            setImage={setImage}
            onPredict={handlePredict}
          />

          <LiveECG />

          <StatsCards />

          <PredictionResult
            result={result}
            loading={loading}
          />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;

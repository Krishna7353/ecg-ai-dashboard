import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import UploadECG from "../components/ecg/UploadECG";

function UploadPage() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handlePredict = () => {
    const reportData = {
      disease: "Atrial Fibrillation",
      confidence: "94.2",
      date: new Date().toLocaleString()
    };

    console.log("Redirecting with data:", reportData);

    navigate("/results", { state: reportData });
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
        </div>
      </div>
    </div>
  );
}

export default UploadPage;

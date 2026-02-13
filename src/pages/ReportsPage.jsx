import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-[#0B1E3D] text-white">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h2 className="text-2xl text-[#00C2A8]">
            Reports Section
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;

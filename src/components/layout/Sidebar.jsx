import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-[#142850] p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-[#00C2A8] mb-10">
        ECG AI
      </h1>

      <ul className="space-y-6 text-lg">

        <li>
          <Link
            to="/"
            className="hover:text-[#00C2A8] transition"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/upload"
            className="hover:text-[#00C2A8] transition"
          >
            Upload ECG
          </Link>
        </li>

        <li>
          <Link
            to="/results"
            className="hover:text-[#00C2A8] transition"
          >
            Results
          </Link>
        </li>

        <li>
          <Link
            to="/reports"
            className="hover:text-[#00C2A8] transition"
          >
            Reports
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;

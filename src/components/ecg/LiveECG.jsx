function LiveECG() {
  return (
    <div className="bg-[#142850] p-6 rounded-2xl shadow-lg mb-8">
      <h3 className="text-[#00C2A8] mb-4 text-lg">
        Live ECG Monitor
      </h3>

      <div className="h-24 bg-black rounded-lg flex items-center justify-center">
        <span className="text-[#00FFB2] animate-pulse">
          ECG Signal Active
        </span>
      </div>
    </div>
  );
}

export default LiveECG;

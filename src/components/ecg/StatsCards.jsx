function StatsCards() {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">

      <div className="bg-[#1F4068] p-6 rounded-2xl shadow-lg">
        <h4 className="text-gray-400">Model Accuracy</h4>
        <p className="text-3xl font-bold text-[#00FFB2]">
          98.4%
        </p>
      </div>

      <div className="bg-[#1F4068] p-6 rounded-2xl shadow-lg">
        <h4 className="text-gray-400">Precision</h4>
        <p className="text-3xl font-bold text-[#00FFB2]">
          96.8%
        </p>
      </div>

      <div className="bg-[#1F4068] p-6 rounded-2xl shadow-lg">
        <h4 className="text-gray-400">Recall</h4>
        <p className="text-3xl font-bold text-[#00FFB2]">
          97.2%
        </p>
      </div>

    </div>
  );
}

export default StatsCards;

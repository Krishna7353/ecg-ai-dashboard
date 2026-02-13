function PredictionResult({ result, loading }) {

  if (loading) {
    return (
      <div className="text-[#00FFB2] animate-pulse">
        Analyzing ECG...
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="bg-[#1F4068] p-6 rounded-2xl shadow-lg">
      <h4 className="text-lg font-bold mb-2">
        Prediction Result
      </h4>

      <p>
        Condition:{" "}
        <span className="text-[#00FFB2] font-semibold">
          {result.disease}
        </span>
      </p>

      <p>
        Confidence:{" "}
        <span className="text-[#00FFB2] font-semibold">
          {result.confidence}%
        </span>
      </p>
    </div>
  );
}

export default PredictionResult;

import { useState } from "react";

function UploadECG({ image, setImage, onPredict }) {
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleUpload(e.dataTransfer.files[0]);
  };

  return (
    <div className="bg-[#13294B] border border-[#00C2A8]/40 rounded-3xl p-8 shadow-xl mb-10">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#00C2A8] mb-6">
        Upload ECG Image
      </h2>

      {/* Drag Drop Area */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center
        border-2 border-dashed rounded-2xl p-16 text-center
        transition-all duration-300 cursor-pointer
        ${
          dragActive
            ? "border-[#00C2A8] bg-[#00C2A8]/10"
            : "border-[#00C2A8]/30 hover:border-[#00C2A8]"
        }`}
      >

        <input
          type="file"
          accept="image/*"
          id="ecgUpload"
          className="hidden"
          onChange={(e) => handleUpload(e.target.files[0])}
        />

        <label htmlFor="ecgUpload" className="cursor-pointer">

          <div className="text-5xl mb-4 animate-pulse">
            🫀
          </div>

          <p className="text-lg text-gray-200">
            Drag & Drop ECG Image here
          </p>

          <p className="text-sm text-gray-400 mt-2">
            or click to browse
          </p>

        </label>

      </div>

      {/* Preview */}
      {image && (
        <div className="mt-8 flex flex-col items-center">

          <img
            src={image}
            alt="ECG Preview"
            className="rounded-xl border border-[#00C2A8]/30 max-w-2xl"
          />

          <button
            onClick={onPredict}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-[#00C2A8] to-[#00FFB2]
            text-black font-bold rounded-xl shadow-lg
            hover:scale-105 transition-transform duration-300"
          >
            Analyze ECG
          </button>

        </div>
      )}

    </div>
  );
}

export default UploadECG;

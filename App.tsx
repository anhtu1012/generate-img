import React, { useState, useEffect } from "react";
import { ImageUploader } from "./components/ImageUploader";
import { BackgroundSelector } from "./components/BackgroundSelector";
import { TetDecoration } from "./components/TetDecoration";
import { TetLoading } from "./components/TetLoading";
import { ImagePreviewModal } from "./components/ImagePreviewModal";
import {
  generateTetImage,
  generateBackgroundChange,
} from "./services/geminiService";
import {
  ImageUploadState,
  GenerationResult,
  BackgroundTheme,
  AppMode,
} from "./types";
import { BACKGROUND_THEMES } from "./constants";

const INITIAL_IMAGE_STATE: ImageUploadState = {
  file: null,
  previewUrl: null,
  base64: null,
  mimeType: "",
};

const App: React.FC = () => {
  // Input States
  const [personImage, setPersonImage] =
    useState<ImageUploadState>(INITIAL_IMAGE_STATE);
  const [jewelryImage, setJewelryImage] =
    useState<ImageUploadState>(INITIAL_IMAGE_STATE);
  const [selectedTheme, setSelectedTheme] = useState<BackgroundTheme>(
    BACKGROUND_THEMES[0],
  );
  const [mode, setMode] = useState<AppMode>("jewelry");

  // Output State
  const [result, setResult] = useState<GenerationResult>({
    imageUrl: null,
    loading: false,
    error: null,
  });

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleGenerate = async () => {
    // Validation based on mode
    if (mode === "jewelry") {
      if (!personImage.base64 || !jewelryImage.base64) {
        setResult((prev) => ({
          ...prev,
          error: "Vui lòng tải lên cả 2 ảnh.",
        }));
        return;
      }
    } else {
      if (!personImage.base64) {
        setResult((prev) => ({
          ...prev,
          error: "Vui lòng tải lên ảnh của bạn.",
        }));
        return;
      }
    }

    setResult({ imageUrl: null, loading: true, error: null });

    try {
      let generatedImageUrl: string;

      if (mode === "jewelry") {
        generatedImageUrl = await generateTetImage(
          personImage.base64,
          personImage.mimeType,
          jewelryImage.base64!,
          jewelryImage.mimeType,
          selectedTheme.description,
        );
      } else {
        generatedImageUrl = await generateBackgroundChange(
          personImage.base64,
          personImage.mimeType,
          selectedTheme.description,
        );
      }

      setResult({ imageUrl: generatedImageUrl, loading: false, error: null });
    } catch (error: any) {
      setResult({
        imageUrl: null,
        loading: false,
        error: "Có lỗi xảy ra. " + (error.message || ""),
      });
    }
  };

  // Scroll to result on desktop when ready
  useEffect(() => {
    if (result.imageUrl && !result.loading) {
      const resultElement = document.getElementById("result-area");
      if (resultElement)
        resultElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [result.imageUrl, result.loading]);

  const isFormValid =
    mode === "jewelry"
      ? personImage.base64 && jewelryImage.base64 && !result.loading
      : personImage.base64 && !result.loading;

  return (
    <div className="min-h-screen bg-gradient-to-b from-tet-red to-[#550000] text-tet-black font-sans relative selection:bg-tet-gold selection:text-tet-red pb-20 md:pb-8 overflow-x-hidden">
      <TetDecoration />

      {/* Show Full Screen Loading if generating */}
      {result.loading && <TetLoading />}

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={isPreviewOpen}
        imageUrl={result.imageUrl}
        onClose={() => setIsPreviewOpen(false)}
      />

      {/* Header */}
      <header className="relative z-10 pt-4 pb-3 md:pt-10 md:pb-8 text-center">
        <div className="container mx-auto px-3 md:px-4">
          <div className="inline-flex items-center gap-1.5 md:gap-2 border border-tet-gold/40 rounded-full px-2.5 md:px-3 py-1 mb-2 md:mb-3 bg-black/20 backdrop-blur-sm shadow-sm hover:bg-black/30 transition-colors">
            <span className="text-tet-gold text-[9px] md:text-xs font-bold tracking-widest uppercase">
              ✨ AI Jewelry Try-On
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-tet-gold via-[#FFF] to-tet-gold drop-shadow-sm leading-tight">
            Tết Rạng Ngời
          </h1>
          <p className="text-tet-paleGold/80 mt-1.5 md:mt-2 text-xs md:text-base font-serif italic">
            Ướm trang sức, Đón xuân sang
          </p>
        </div>
      </header>

      <main className="container mx-auto px-3 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
          {/* Left Column: Inputs */}
          <div className="w-full lg:w-5/12 space-y-3 md:space-y-6 animate-fade-in-up">
            {/* Mode Toggle */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border border-white/50 p-4 md:p-5 relative overflow-hidden">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-serif font-bold text-tet-red mb-1">
                    Chế Độ
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    {mode === "jewelry"
                      ? "Ướm trang sức với AI"
                      : "Đổi background khung cảnh Tết"}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setMode(mode === "jewelry" ? "background" : "jewelry")
                  }
                  className="relative inline-flex h-8 md:h-9 w-16 md:w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-tet-gold focus:ring-offset-2"
                  style={{
                    backgroundColor: mode === "jewelry" ? "#D4AF37" : "#10B981",
                  }}
                >
                  <span
                    className="inline-block h-6 md:h-7 w-6 md:w-7 transform rounded-full bg-white shadow-lg transition-transform"
                    style={{
                      transform:
                        mode === "jewelry"
                          ? "translateX(4px)"
                          : "translateX(36px)",
                    }}
                  >
                    <span className="flex items-center justify-center h-full text-xs md:text-sm">
                      {mode === "jewelry" ? "💍" : "🖼️"}
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Step 1 & 2: Uploads */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border border-white/50 p-4 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-tet-gold/10 rounded-bl-full pointer-events-none"></div>

              <h2 className="text-lg md:text-xl font-serif font-bold text-tet-red mb-3 md:mb-4 flex items-center gap-2">
                <span className="bg-tet-red text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs">
                  1
                </span>
                Tải Ảnh Lên
              </h2>

              <div
                className={`grid gap-2.5 md:gap-4 ${
                  mode === "jewelry" ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                <ImageUploader
                  id="person-upload"
                  label={
                    mode === "jewelry"
                      ? "Ảnh Của Bạn"
                      : "Ảnh Cần Đổi Background"
                  }
                  imageState={personImage}
                  onImageChange={setPersonImage}
                  required
                />
                {mode === "jewelry" && (
                  <ImageUploader
                    id="jewelry-upload"
                    label="Trang Sức"
                    imageState={jewelryImage}
                    onImageChange={setJewelryImage}
                    required
                  />
                )}
              </div>
            </div>

            {/* Step 2: Background */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl border border-white/50 p-4 md:p-6">
              <BackgroundSelector
                selectedThemeId={selectedTheme.id}
                onSelect={setSelectedTheme}
                mode={mode}
              />
            </div>

            {/* Desktop Generate Button (Hidden on Mobile) */}
            <div className="hidden lg:block pt-2">
              <button
                onClick={handleGenerate}
                disabled={!isFormValid}
                className={`
                    w-full py-4 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl font-bold font-serif tracking-wide shadow-2xl transition-all transform hover:-translate-y-1
                    ${
                      !isFormValid
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#FFD700] via-[#FFC000] to-[#FFD700] text-tet-red hover:brightness-110 shadow-glow ring-2 ring-white/50"
                    }
                  `}
              >
                {result.loading
                  ? "Đang Xử Lý..."
                  : mode === "jewelry"
                    ? "✨ Tạo Ảnh Tết Ngay"
                    : "🖼️ Đổi Background Ngay"}
              </button>
            </div>
          </div>

          {/* Right Column: Result or Placeholder */}
          <div className="w-full lg:w-7/12 animate-fade-in transition-all">
            {result.imageUrl ? (
              <div
                id="result-area"
                className="bg-white p-4 rounded-[2rem] shadow-2xl border-4 border-tet-gold relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={result.imageUrl}
                  alt="Generated Tet Portrait"
                  className="w-full h-auto object-cover rounded-xl shadow-inner cursor-zoom-in"
                  onClick={() => setIsPreviewOpen(true)}
                />

                {/* Desktop Actions Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                  <a
                    href={result.imageUrl}
                    download="tet-jewelry-portrait.png"
                    className="bg-tet-gold text-tet-red font-bold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tải Về Máy
                  </a>
                </div>
              </div>
            ) : (
              /* Placeholder State for Desktop */
              <div className="hidden lg:flex h-full min-h-[500px] bg-white/10 backdrop-blur-sm rounded-[2rem] border-2 border-dashed border-tet-gold/30 items-center justify-center text-tet-paleGold/50 flex-col gap-4 p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-tet-gold/10 flex items-center justify-center mb-2 animate-pulse">
                  <span className="text-4xl opacity-50">🖼️</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-tet-gold/80">
                  Kết quả sẽ hiển thị tại đây
                </h3>
                <p className="text-sm max-w-xs">
                  Chọn ảnh và phong cách để AI tạo ra tác phẩm nghệ thuật của
                  riêng bạn.
                </p>
              </div>
            )}
            {/* Error Message */}
            {result.error && (
              <div className="mt-4 bg-red-100/90 backdrop-blur border-l-4 border-red-600 text-red-800 p-4 rounded-xl shadow-lg flex items-start gap-3 animate-pulse">
                <svg
                  className="w-6 h-6 flex-shrink-0 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className="font-bold">Đã xảy ra lỗi</p>
                  <p className="text-sm">{result.error}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Sticky Button - Always visible on mobile, hidden on desktop */}
      {/* Mobile Sticky Button - Always visible on mobile, hidden on desktop */}
      {/* Mobile Sticky Button - Circular Floating Action Button */}
      <div className="lg:hidden fixed bottom-12 left-1/2 -translate-x-1/2 z-[9999]">
        <button
          onClick={handleGenerate}
          disabled={!isFormValid}
          className={`
            w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1
            shadow-[0_0_30px_rgba(255,215,0,0.6)] border-4 border-white/20 backdrop-blur-sm
            transition-all duration-300 transform active:scale-90
            ${
              !isFormValid
                ? "bg-gray-600 grayscale opacity-80 cursor-not-allowed"
                : "bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#FFD700] hover:scale-110 animate-bounce-slow"
            }
          `}
        >
          {result.loading ? (
            <div className="w-8 h-8 border-4 border-tet-red border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <span className="text-2xl filter drop-shadow-sm">✨</span>
              <span className="text-[10px] font-bold text-tet-red uppercase tracking-wide">
                Tạo Ảnh
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default App;

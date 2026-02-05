import React from "react";

interface ImagePreviewModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  isOpen,
  imageUrl,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-white/80 hover:text-white bg-black/50 hover:bg-tet-red rounded-full p-2 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Full Screen Preview"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Caption */}
        <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
          <p className="text-white/60 text-sm font-serif italic tracking-wider">
            ✨ Chạm vào nền để đóng • Tết Rạng Ngời ✨
          </p>
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

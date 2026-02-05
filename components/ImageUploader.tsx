import React, { ChangeEvent, useState } from "react";
import { ImageUploadState } from "../types";

interface ImageUploaderProps {
  id: string;
  label: string;
  imageState: ImageUploadState;
  onImageChange: (newState: ImageUploadState) => void;
  required?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  id,
  label,
  imageState,
  onImageChange,
  required,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const match = base64String.match(/^data:(.+);base64,(.+)$/);
      if (match) {
        onImageChange({
          file,
          previewUrl: URL.createObjectURL(file),
          mimeType: match[1],
          base64: match[2],
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0])
      processFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
          <h3 className="font-sans font-semibold text-gray-700 text-xs md:text-sm">
            {label}
          </h3>
          {required && (
            <span className="text-red-500 text-[10px] md:text-xs">*</span>
          )}
        </div>
      )}

      <div
        className={`relative rounded-lg md:rounded-xl transition-all duration-300 h-32 md:h-56 lg:h-64 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden shadow-sm hover:shadow-md
          ${isDragging ? "border-2 border-dashed border-tet-gold bg-tet-gold/10" : "border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-tet-gold/60"}
          ${imageState.previewUrl ? "border-none p-0" : "p-3 md:p-4"}
        `}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById(id)?.click()}
      >
        <input
          type="file"
          id={id}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        {imageState.previewUrl ? (
          <div className="w-full h-full relative group">
            <img
              src={imageState.previewUrl}
              alt="Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="text-white text-sm font-medium border border-white/50 px-3 py-1 rounded-full">
                Thay ảnh
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 group-hover:text-tet-red transition-colors">
            <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 md:h-8 w-6 md:w-8 text-tet-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-[11px] md:text-sm font-semibold">
              Chạm hoặc Kéo thả ảnh
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

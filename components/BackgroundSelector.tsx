import React from "react";
import { BackgroundTheme, AppMode } from "../types";
import { BACKGROUND_THEMES } from "../constants";

interface BackgroundSelectorProps {
  selectedThemeId: string;
  onSelect: (theme: BackgroundTheme) => void;
  mode: AppMode;
}

export const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  selectedThemeId,
  onSelect,
  mode,
}) => {
  return (
    <div className="w-full">
      <label className="block text-base md:text-lg font-serif font-bold text-tet-red mb-3 md:mb-4 flex items-center gap-2">
        <span className="bg-tet-red text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs border border-tet-gold shadow-[0_0_10px_#FFD700]">
          2
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tet-red to-red-800 uppercase tracking-wide text-sm md:text-base">
          {mode === "jewelry" ? "Chọn Không Gian Tết" : "Chọn Background Tết"}
        </span>
      </label>

      {/* Grid Layout - 2 columns on mobile for better overview */}
      <div className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
        {BACKGROUND_THEMES.map((theme) => {
          const isSelected = theme.id === selectedThemeId;
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme)}
              className={`
                relative p-3 md:p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 
                flex flex-col items-center gap-2 md:gap-3 shadow-lg overflow-hidden
                min-h-[130px] md:min-h-[140px]
                ${
                  isSelected
                    ? "border-tet-gold bg-gradient-to-br from-[#990000] to-[#600000] shadow-[0_0_20px_rgba(255,215,0,0.6)] scale-[1.02]"
                    : "border-tet-gold/40 bg-gradient-to-br from-[#4a0000] to-[#2a0000] hover:border-tet-gold/60 active:scale-95"
                }
              `}
            >
              {/* Card Texture Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')] pointer-events-none"></div>

              {/* Corner Decoration */}
              <div
                className={`absolute top-0 right-0 w-6 md:w-8 h-6 md:h-8 pointer-events-none transition-opacity duration-300 ${isSelected ? "opacity-100" : "opacity-20"}`}
              >
                <svg viewBox="0 0 100 100" className="fill-tet-gold">
                  <path d="M0,0 L100,0 L100,100 L70,30 L0,0 Z" />
                </svg>
              </div>

              {/* Icon - Centered */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <span
                  className={`text-3xl md:text-4xl filter drop-shadow-lg transition-transform duration-300 ${isSelected ? "scale-110 rotate-3" : "grayscale-[0.2] group-hover:grayscale-0 active:scale-110"}`}
                >
                  {theme.icon}
                </span>
              </div>

              {/* Text Content - Centered */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                <span
                  className={`block font-serif font-bold text-xs md:text-sm leading-tight uppercase tracking-wider px-1 ${isSelected ? "text-tet-gold" : "text-tet-paleGold/90"}`}
                >
                  {theme.label}
                </span>
                {/* Description for larger screens */}
                {/* <span
                  className={`hidden lg:block text-[10px] mt-2 line-clamp-2 leading-tight font-light ${isSelected ? "text-white/90" : "text-white/50"}`}
                >
                  {theme.description.split(".")[0]}.
                </span> */}
              </div>

              {/* Selection Checkmark */}
              {isSelected && (
                <div className="absolute bottom-1.5 md:bottom-2 right-1.5 md:right-2 text-tet-gold animate-fade-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

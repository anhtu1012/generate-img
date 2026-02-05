import React, { useEffect, useState } from "react";

const LOADING_MESSAGES = [
  "🐴 Ngựa vàng phi nước đại...",
  "✨ Đang dệt nắng xuân...",
  "💎 Đang mài giũa trang sức...",
  "🎊 Thổi hồn không khí Tết...",
  "🧧 Thêm chút may mắn đầu năm...",
  "🌸 Đang hoàn thiện bức tranh xuân...",
];

export const TetLoading: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-tet-red via-[#770000] to-tet-red backdrop-blur-xl text-tet-gold transition-all duration-500 overflow-hidden">
      {/* Decorative Texture Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')] pointer-events-none"></div>

      {/* Floating Lanterns */}
      <div className="absolute top-10 left-10 animate-bounce-slow opacity-20">
        <span className="text-6xl">🏮</span>
      </div>
      <div className="absolute top-20 right-16 animate-pulse opacity-20">
        <span className="text-5xl">🏮</span>
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce-slow opacity-20">
        <span className="text-4xl">🪙</span>
      </div>

      {/* Main Galloping Horse Animation */}
      <div className="relative mb-10">
        {/* Golden Glow Effect Behind Horse */}
        <div className="absolute inset-0 blur-3xl bg-gradient-radial from-tet-gold/40 via-transparent to-transparent animate-pulse scale-150"></div>

        {/* Horse SVG Animation */}
        <div className="relative animate-horse-gallop">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]"
          >
            {/* Horse Body - Golden */}
            <ellipse
              cx="100"
              cy="110"
              rx="45"
              ry="30"
              fill="url(#horseGradient)"
              className="animate-pulse"
            />

            {/* Horse Head */}
            <ellipse
              cx="135"
              cy="95"
              rx="22"
              ry="25"
              fill="url(#horseGradient)"
            />

            {/* Horse Neck */}
            <path d="M118,100 Q128,105 135,95" fill="url(#horseGradient)" />

            {/* Horse Ears */}
            <path
              d="M130,75 L135,85 L140,75"
              fill="#FFD700"
              stroke="#FFA500"
              strokeWidth="1.5"
            />

            {/* Horse Mane - Flowing */}
            <path
              d="M120,90 Q115,85 118,80 Q120,75 115,70"
              stroke="url(#maneGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              className="animate-wave"
            />

            {/* Horse Eye */}
            <circle cx="140" cy="92" r="3" fill="#1A1A1A" />
            <circle cx="141" cy="91" r="1" fill="white" />

            {/* Horse Legs - Galloping Animation */}
            <g className="animate-leg-front">
              <rect
                x="110"
                y="130"
                width="6"
                height="35"
                rx="3"
                fill="url(#horseGradient)"
              />
              <rect
                x="130"
                y="135"
                width="6"
                height="30"
                rx="3"
                fill="url(#horseGradient)"
              />
            </g>
            <g className="animate-leg-back">
              <rect
                x="75"
                y="132"
                width="6"
                height="33"
                rx="3"
                fill="url(#horseGradient)"
              />
              <rect
                x="95"
                y="137"
                width="6"
                height="28"
                rx="3"
                fill="url(#horseGradient)"
              />
            </g>

            {/* Horse Tail - Flowing */}
            <path
              d="M65,105 Q50,110 55,125 Q60,115 50,130"
              stroke="url(#maneGradient)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              className="animate-tail-wave"
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient
                id="horseGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#FF8C00" />
              </linearGradient>

              <linearGradient
                id="maneGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF6B6B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Sparkles Around Horse */}
        <div className="absolute top-10 left-5 text-2xl animate-ping">✨</div>
        <div className="absolute top-20 right-10 text-xl animate-pulse">⭐</div>
        <div className="absolute bottom-10 left-12 text-2xl animate-bounce">
          💫
        </div>
      </div>

      {/* Rotating Tet Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl animate-spin-slow">
          🧧
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-5xl animate-spin-reverse">
          🪙
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl animate-spin-slow">
          🎋
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl animate-spin-reverse">
          🏮
        </div>
      </div>

      {/* Loading Text */}
      <div className="relative text-center px-4 z-10">
        <h3 className="text-xl md:text-3xl font-serif font-bold mb-3 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-tet-gold via-white to-tet-gold drop-shadow-lg">
          {LOADING_MESSAGES[messageIndex]}
        </h3>
        <p className="text-tet-paleGold/70 text-xs md:text-sm font-sans tracking-widest uppercase mt-3">
          ✨ AI đang tạo tác phẩm nghệ thuật ✨
        </p>

        {/* Animated Progress Bar */}
        <div className="mt-6 w-56 md:w-64 h-2 bg-tet-black/40 rounded-full overflow-hidden mx-auto border border-tet-gold/30 shadow-lg">
          <div className="h-full bg-gradient-to-r from-tet-gold via-white to-tet-gold animate-progress-indeterminate shadow-[0_0_15px_#FFD700]"></div>
        </div>

        {/* Percentage or Fun Fact */}
        <p className="mt-4 text-tet-paleGold/50 text-xs italic">
          Mỗi kỳ công AI cũng cần thời gian để tạo ra vẻ đẹp hoàn hảo 🎨
        </p>
      </div>

      <style jsx>{`
        @keyframes horse-gallop {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(3px);
          }
          50% {
            transform: translateY(0px) translateX(6px);
          }
          75% {
            transform: translateY(-5px) translateX(3px);
          }
        }

        @keyframes leg-front {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-15deg);
          }
        }

        @keyframes leg-back {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(3px);
          }
        }

        @keyframes tail-wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .animate-horse-gallop {
          animation: horse-gallop 1.2s ease-in-out infinite;
        }

        .animate-leg-front {
          transform-origin: center top;
          animation: leg-front 0.6s ease-in-out infinite;
        }

        .animate-leg-back {
          transform-origin: center top;
          animation: leg-back 0.6s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
        }

        .animate-tail-wave {
          transform-origin: left center;
          animation: tail-wave 1s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin 15s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

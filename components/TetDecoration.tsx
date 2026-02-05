import React from 'react';

export const TetDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]"></div>
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

      {/* Hanging Couplets (Only on larger screens) */}
      <div className="hidden lg:block absolute top-20 left-10 w-16 h-[50vh] bg-[#800000] border-2 border-tet-gold shadow-2xl flex flex-col items-center justify-center py-4 rounded-b-lg">
          <div className="text-tet-gold font-serif text-2xl font-bold writing-vertical space-y-4 opacity-90 drop-shadow-md">
             <span>V</span><span>Ạ</span><span>N</span>
             <span className="h-4"></span>
             <span>S</span><span>Ự</span>
             <span className="h-4"></span>
             <span>N</span><span>H</span><span>Ư</span>
             <span className="h-4"></span>
             <span>Ý</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-tet-gold rounded-full flex items-center justify-center shadow-lg">
             <span className="text-tet-red text-xs">福</span>
          </div>
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-tet-gold"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-4 h-12 bg-tet-red border border-tet-gold"></div>
      </div>

      <div className="hidden lg:block absolute top-20 right-10 w-16 h-[50vh] bg-[#800000] border-2 border-tet-gold shadow-2xl flex flex-col items-center justify-center py-4 rounded-b-lg">
          <div className="text-tet-gold font-serif text-2xl font-bold writing-vertical space-y-4 opacity-90 drop-shadow-md">
             <span>A</span><span>N</span>
             <span className="h-4"></span>
             <span>K</span><span>H</span><span>A</span><span>N</span><span>G</span>
             <span className="h-4"></span>
             <span>T</span><span>H</span><span>Ị</span><span>N</span><span>H</span>
             <span className="h-4"></span>
             <span>V</span><span>Ư</span><span>Ợ</span><span>N</span><span>G</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-tet-gold rounded-full flex items-center justify-center shadow-lg">
             <span className="text-tet-red text-xs">禄</span>
          </div>
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-tet-gold"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-4 h-12 bg-tet-red border border-tet-gold"></div>
      </div>

      {/* Gold Lanterns Top Left */}
      <div className="absolute -top-5 left-2 md:left-20 w-16 md:w-24 opacity-90 animate-swing origin-top">
         <svg viewBox="0 0 100 200" className="w-full h-auto fill-tet-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
             <path d="M50,0 L80,30 L80,100 L50,130 L20,100 L20,30 Z" />
             <line x1="50" y1="130" x2="50" y2="200" stroke="#FFD700" strokeWidth="2" />
             <circle cx="50" cy="200" r="3" fill="#FFD700" />
         </svg>
      </div>

      {/* Gold Lanterns Top Right (Staggered) */}
      <div className="absolute -top-10 right-4 md:right-32 w-20 md:w-28 opacity-90 animate-swing-delayed origin-top">
         <svg viewBox="0 0 100 200" className="w-full h-auto fill-tet-brightRed stroke-tet-gold stroke-2 drop-shadow-[0_0_15px_rgba(215,38,56,0.5)]">
             <path d="M20,30 Q10,65 20,100 L80,100 Q90,65 80,30 Z" />
             <rect x="30" y="20" width="40" height="10" fill="#FFD700" />
             <line x1="50" y1="0" x2="50" y2="20" stroke="#FFD700" strokeWidth="2" />
             <line x1="50" y1="100" x2="50" y2="180" stroke="#FFD700" strokeWidth="3" />
         </svg>
      </div>
      
      {/* Gold Blossom Branch Bottom Right */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-96 md:h-96 opacity-40 rotate-180">
         <svg viewBox="0 0 200 200" className="w-full h-full text-tet-gold fill-current drop-shadow-lg">
            <path d="M10,200 C60,140 120,80 200,20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M100,120 C130,100 150,80 180,60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Blossoms */}
            <g className="animate-pulse">
                <circle cx="50" cy="160" r="4" />
                <circle cx="90" cy="130" r="5" />
                <circle cx="140" cy="90" r="4" />
                <circle cx="180" cy="40" r="6" />
                <path d="M175,35 L185,45 M185,35 L175,45" stroke="currentColor" strokeWidth="1" />
            </g>
         </svg>
      </div>

      {/* Floating Gold Particles (CSS Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <style>{`
           @keyframes floatUp {
             0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
             50% { opacity: 0.8; }
             100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
           }
           @keyframes swing {
             0%, 100% { transform: rotate(-5deg); }
             50% { transform: rotate(5deg); }
           }
           .particle {
             position: absolute;
             background: #FFD700;
             border-radius: 50%;
             opacity: 0;
             animation: floatUp linear infinite;
             box-shadow: 0 0 5px #FFD700;
           }
           .animate-swing { animation: swing 6s ease-in-out infinite; }
           .animate-swing-delayed { animation: swing 7s ease-in-out infinite 1s; }
           .writing-vertical { writing-mode: vertical-rl; text-orientation: upright; }
         `}</style>
         
         {/* Generate some random particles */}
         {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
         ))}
      </div>
    </div>
  );
};

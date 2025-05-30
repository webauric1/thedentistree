
import { useEffect, useState } from 'react';

const AnimatedTooth = ({ className = "" }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className={`transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="relative">
          {/* Animated Tooth SVG */}
          <div className="animate-bounce">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="text-white drop-shadow-lg"
            >
              <defs>
                <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>

              {/* Tooth Crown */}
              <path
                d="M30 40 Q30 20 60 20 Q90 20 90 40 L85 70 Q85 85 60 85 Q35 85 35 70 Z"
                fill="url(#toothGradient)"
                stroke="#cbd5e1"
                strokeWidth="2"
                className="animate-pulse"
              />

              {/* Tooth Roots */}
              <path
                d="M45 85 Q45 95 45 105 Q45 110 50 110 Q55 110 55 105 L55 85"
                fill="url(#toothGradient)"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
              <path
                d="M65 85 Q65 95 65 105 Q65 110 70 110 Q75 110 75 105 L75 85"
                fill="url(#toothGradient)"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Sparkle Effects */}
              <circle cx="50" cy="45" r="2" fill="#0ea5e9" className="animate-ping" />
              <circle cx="70" cy="55" r="1.5" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.5s'}} />
              <circle cx="60" cy="35" r="1" fill="#0ea5e9" className="animate-ping" style={{animationDelay: '1s'}} />
            </svg>
          </div>

          {/* Floating Text */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <p className="text-dental-blue font-semibold text-sm animate-pulse">
              Perfect Smiles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTooth;

'use client';

import { useEffect, useState } from 'react';

const DURATION = 2200;

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const hide = () => {
      setVisible(false);
      document.body.style.overflow = '';
    };

    const timer = setTimeout(hide, DURATION);

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', hide);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
      <div className="w-64 text-center">
        <p className="uppercase tracking-[0.35em] text-gold text-xs mb-6">
          Cantone Films
        </p>

        {/* Progress track */}
        <div className="h-[2px] w-full bg-white/20 overflow-hidden">
          {/* Progress fill */}
          <span className="block h-full w-full bg-gold origin-left animate-progress-fill" />
        </div>

        <p className="mt-6 text-xs text-cream/60 tracking-widest">
          Loading
        </p>

        <style jsx>{`
          @keyframes progressFill {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          .animate-progress-fill {
            transform: scaleX(0);
            animation: progressFill ${DURATION}ms ease-out forwards;
            will-change: transform;
          }
        `}</style>
      </div>
    </div>
  );
}

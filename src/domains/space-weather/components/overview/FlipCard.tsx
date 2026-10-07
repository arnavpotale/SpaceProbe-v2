import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: string;
  back: string;
  delay?: number;
}

export function FlipCard({ front, back, delay = 0 }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${front}. Click or hover to reveal details.`}
      className="group relative h-36 cursor-pointer [perspective:1000px] outline-none focus-visible:ring-2 focus-visible:ring-[#00a8ff] rounded-2xl select-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.5 },
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 70, damping: 14 }}
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col justify-center p-6 rounded-2xl border border-[#D8ECF9]/15 bg-[#0E1334]/80 backdrop-blur-md hover:border-[#00a8ff]/40 transition-all shadow-lg [backface-visibility:hidden]">
          <div className="flex items-start gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-[#00a8ff] shadow-[0_0_8px_rgba(0,168,255,0.7)] shrink-0" />
            <span className="font-medium text-white/90 text-sm sm:text-base leading-snug">
              {front}
            </span>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center p-6 rounded-2xl border border-[#00a8ff]/40 bg-gradient-to-br from-[#004DC0]/40 to-[#0E1334]/90 backdrop-blur-md text-center shadow-xl [backface-visibility:hidden] [transform:rotateX(180deg)]">
          <span className="font-medium text-[#D8ECF9] text-sm leading-relaxed">{back}</span>
        </div>
      </motion.div>
    </div>
  );
}

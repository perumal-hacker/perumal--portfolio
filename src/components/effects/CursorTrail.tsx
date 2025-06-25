
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const { isDark } = useTheme();

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrail(prev => [...prev.slice(-8), newPoint]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className={`absolute w-2 h-2 rounded-full ${
              isDark 
                ? 'bg-gradient-to-r from-green-400 to-blue-400' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500'
            }`}
            style={{
              left: point.x - 4,
              top: point.y - 4,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface CursorState {
  x: number;
  y: number;
  isPointer: boolean;
  isClicking: boolean;
}

const DeveloperCursor: React.FC = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isPointer: false,
    isClicking: false
  });
  const { isDark } = useTheme();

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isPointer: (e.target as HTMLElement)?.tagName === 'A' || 
                  (e.target as HTMLElement)?.tagName === 'BUTTON' ||
                  (e.target as HTMLElement)?.style.cursor === 'pointer'
      }));
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      {/* Main cursor dot */}
      <motion.div
        className={`absolute w-2 h-2 rounded-full ${
          isDark ? 'bg-green-400' : 'bg-blue-500'
        } mix-blend-difference`}
        style={{
          left: cursor.x - 4,
          top: cursor.y - 4,
        }}
        animate={{
          scale: cursor.isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Outer ring */}
      <motion.div
        className={`absolute border-2 rounded-full ${
          isDark 
            ? 'border-green-400/50' 
            : 'border-blue-500/50'
        } mix-blend-difference`}
        style={{
          left: cursor.x - 16,
          top: cursor.y - 16,
        }}
        animate={{
          width: cursor.isPointer ? 40 : 32,
          height: cursor.isPointer ? 40 : 32,
          scale: cursor.isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Developer brackets when hovering clickable elements */}
      <AnimatePresence>
        {cursor.isPointer && (
          <motion.div
            className={`absolute font-mono text-lg font-bold ${
              isDark ? 'text-green-400' : 'text-blue-500'
            } mix-blend-difference`}
            style={{
              left: cursor.x - 20,
              top: cursor.y - 30,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {'</>'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeveloperCursor;

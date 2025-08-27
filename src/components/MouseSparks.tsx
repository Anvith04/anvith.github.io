import { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  opacity: number;
}

const sparkColors = [
  '#a855f7', // purple-500
  '#06b6d4', // cyan-500
  '#ec4899', // pink-500
  '#8b5cf6', // violet-500
  '#10b981', // emerald-500
];

export function MouseSparks() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const createSpark = useCallback((x: number, y: number) => {
    const newSpark: Spark = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
      size: Math.random() * 6 + 2,
      rotation: Math.random() * 360,
      opacity: 1,
    };

    setSparks(prev => [...prev.slice(-15), newSpark]);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let lastSparkTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastSparkTime > 50) { // Create spark every 50ms
        createSpark(e.clientX, e.clientY);
        lastSparkTime = now;
      }
    };

    const animateSparks = () => {
      setSparks(prev => 
        prev
          .map(spark => ({
            ...spark,
            opacity: spark.opacity - 0.02,
            y: spark.y - 1,
            x: spark.x + (Math.random() - 0.5) * 0.5,
          }))
          .filter(spark => spark.opacity > 0)
      );
      animationFrame = requestAnimationFrame(animateSparks);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animateSparks);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [createSpark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: spark.x,
            top: spark.y,
            backgroundColor: spark.color,
            width: spark.size,
            height: spark.size,
            boxShadow: `0 0 6px ${spark.color}`,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ 
            scale: 1, 
            rotate: spark.rotation,
            opacity: spark.opacity 
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
      
      {/* Glowing cursor effect */}
      <motion.div
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
          left: mousePos.x - 8,
          top: mousePos.y - 8,
        }}
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
        }}
      />
    </div>
  );
}
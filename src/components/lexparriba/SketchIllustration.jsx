import React from 'react';
import { motion } from 'framer-motion';

const SketchIllustration = ({ type }) => {
  const getSketchContent = (sketchType) => {
    switch (sketchType) {
      case 'founding':
        return {
          title: "Les Premiers Pas",
          elements: [
            { shape: "wave", path: "M10 40 Q25 20 40 40 T70 40", stroke: "#2E5984" },
            { shape: "surfboard", path: "M45 25 L55 45", stroke: "#FF6B35", strokeWidth: 3 },
            { shape: "sun", cx: 20, cy: 15, r: 8, stroke: "#FFD700" },
            { shape: "palm", path: "M75 50 Q80 30 85 50", stroke: "#228B22" }
          ]
        };
      case 'growth':
        return {
          title: "Expansion",
          elements: [
            { shape: "people", path: "M15 45 L25 35 L35 45 M45 45 L55 35 L65 45", stroke: "#2E5984" },
            { shape: "building", path: "M20 20 L20 50 L60 50 L60 20 L20 20 M30 30 L30 40 M50 30 L50 40", stroke: "#FF6B35" },
            { shape: "wave", path: "M10 55 Q25 45 40 55 T70 55", stroke: "#4682B4" }
          ]
        };
      case 'evolution':
        return {
          title: "Évolution",
          elements: [
            { shape: "villa", path: "M10 30 L40 10 L70 30 L70 50 L10 50 Z", stroke: "#2E5984" },
            { shape: "pool", path: "M15 40 Q40 35 65 40 Q65 45 40 50 Q15 45 15 40", stroke: "#4682B4" },
            { shape: "trees", path: "M75 35 Q80 25 85 35 M5 35 Q10 25 15 35", stroke: "#228B22" },
            { shape: "stars", cx: [25, 45, 65], cy: [15, 12, 18], stroke: "#FFD700" }
          ]
        };
      default:
        return { title: "Sketch", elements: [] };
    }
  };

  const sketch = getSketchContent(type);

  return (
    <motion.div 
      className="sketch-container bg-white p-6 rounded-lg shadow-md border-2 border-gray-100"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Sketch Title */}
      <h4 className="text-center text-[#2E5984] font-bold mb-4 text-lg handwriting">
        {sketch.title}
      </h4>

      {/* SVG Sketch */}
      <div className="sketch-drawing">
        <svg 
          width="300" 
          height="200" 
          viewBox="0 0 100 60" 
          className="w-full h-auto filter drop-shadow-sm"
        >
          {sketch.elements.map((element, index) => (
            <motion.g
              key={index}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.3,
                ease: "easeInOut"
              }}
              viewport={{ once: true }}
            >
              {element.shape === 'wave' || element.shape === 'people' || element.shape === 'building' || 
               element.shape === 'villa' || element.shape === 'pool' || element.shape === 'trees' || 
               element.shape === 'surfboard' || element.shape === 'palm' ? (
                <path
                  d={element.path}
                  stroke={element.stroke}
                  strokeWidth={element.strokeWidth || 2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: 'url(#rough-paper)',
                  }}
                />
              ) : element.shape === 'sun' ? (
                <>
                  <circle
                    cx={element.cx}
                    cy={element.cy}
                    r={element.r}
                    stroke={element.stroke}
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Sun rays */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <motion.line
                      key={i}
                      x1={element.cx + Math.cos(angle * Math.PI / 180) * (element.r + 2)}
                      y1={element.cy + Math.sin(angle * Math.PI / 180) * (element.r + 2)}
                      x2={element.cx + Math.cos(angle * Math.PI / 180) * (element.r + 5)}
                      y2={element.cy + Math.sin(angle * Math.PI / 180) * (element.r + 5)}
                      stroke={element.stroke}
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    />
                  ))}
                </>
              ) : element.shape === 'stars' ? (
                element.cx.map((x, i) => (
                  <motion.g key={i}>
                    <path
                      d={`M${x} ${element.cy[i] - 2} L${x + 1} ${element.cy[i]} L${x + 2} ${element.cy[i] - 2} L${x + 1} ${element.cy[i] - 1} L${x} ${element.cy[i] - 2}`}
                      stroke={element.stroke}
                      strokeWidth="1"
                      fill={element.stroke}
                    />
                  </motion.g>
                ))
              ) : null}
            </motion.g>
          ))}

          {/* Paper texture filter */}
          <defs>
            <filter id="rough-paper">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Sketch signature */}
      <div className="text-right mt-2">
        <span className="text-xs text-gray-400 italic handwriting">~ Arriba Memories</span>
      </div>
    </motion.div>
  );
};

export default SketchIllustration;

import { motion } from 'framer-motion';

export const Cube3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className={`relative w-24 h-24 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 border-2 border-fuchsia-400/30 rounded-xl bg-fuchsia-400/5 backdrop-blur-sm" style={{ transform: 'translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-orange-500/30 rounded-xl bg-orange-500/5 backdrop-blur-sm" style={{ transform: 'translateZ(-48px)' }} />
    <div className="absolute inset-0 border-2 border-pink-400/30 rounded-xl bg-pink-400/5 backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-fuchsia-400/30 rounded-xl bg-fuchsia-400/5 backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-pink-400/30 rounded-xl bg-pink-400/5 backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-orange-500/30 rounded-xl bg-orange-500/5 backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }} />
  </motion.div>
);

export const Rings3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className={`relative w-32 h-32 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 border-4 border-t-fuchsia-400 border-r-transparent border-b-fuchsia-400 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateX(45deg)' }} />
    <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-orange-500 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateY(45deg)' }} />
    <div className="absolute inset-0 border-4 border-t-pink-400 border-r-transparent border-b-pink-400 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateZ(45deg) rotateX(90deg)' }} />
  </motion.div>
);

export const Diamond3D = ({ className }) => (
  <motion.div
    animate={{ rotateY: [0, 360] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className={`relative w-20 h-20 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <motion.div 
      animate={{ y: [-10, 10, -10] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 border border-fuchsia-400 bg-gradient-to-b from-fuchsia-400/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'translateZ(20px)' }} />
      <div className="absolute inset-0 border border-orange-500 bg-gradient-to-b from-orange-500/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'translateZ(-20px)' }} />
      <div className="absolute inset-0 border border-pink-400 bg-gradient-to-b from-pink-400/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'rotateY(90deg) translateZ(20px)' }} />
      <div className="absolute inset-0 border border-fuchsia-500 bg-gradient-to-b from-fuchsia-500/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'rotateY(90deg) translateZ(-20px)' }} />
    </motion.div>
  </motion.div>
);

export const Sphere3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [360, 0], rotateY: [0, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className={`relative w-28 h-28 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="absolute inset-0 border-2 border-orange-400/30 rounded-full" 
        style={{ transform: `rotateY(${i * 30}deg)` }} 
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <div 
        key={i + 6}
        className="absolute inset-0 border-2 border-fuchsia-500/20 rounded-full" 
        style={{ transform: `rotateX(${i * 30}deg)` }} 
      />
    ))}
  </motion.div>
);

export const Tetrahedron3D = ({ className }) => (
  <motion.div
    animate={{ rotateY: [0, 360], rotateX: [0, 45, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    className={`relative w-24 h-24 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 border border-fuchsia-500/40 bg-fuchsia-500/5" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', transform: 'rotateX(30deg) translateZ(20px)' }} />
    <div className="absolute inset-0 border border-orange-500/40 bg-orange-500/5" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', transform: 'rotateY(120deg) rotateX(30deg) translateZ(20px)' }} />
    <div className="absolute inset-0 border border-pink-500/40 bg-pink-500/5" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', transform: 'rotateY(240deg) rotateX(30deg) translateZ(20px)' }} />
    <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', transform: 'rotateX(-90deg) translateY(35px)' }} />
  </motion.div>
);

export const Torus3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [0, 360], rotateZ: [0, 360] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    className={`relative w-32 h-32 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {[...Array(12)].map((_, i) => (
      <div 
        key={i}
        className="absolute inset-0 border border-fuchsia-400/20 rounded-full" 
        style={{ transform: `rotateY(${i * 15}deg) scale(1.1)` }} 
      />
    ))}
    {[...Array(12)].map((_, i) => (
      <div 
        key={i + 12}
        className="absolute inset-0 border border-orange-400/20 rounded-full" 
        style={{ transform: `rotateX(${i * 15}deg) scale(0.9)` }} 
      />
    ))}
  </motion.div>
);

export const DNAHelix3D = ({ className }) => (
  <div className={`relative w-16 h-48 ${className}`}>
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [0, -10, 0],
          rotateY: [0, 360]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          delay: i * 0.2,
          ease: "easeInOut" 
        }}
        className="absolute w-full h-1 flex items-center justify-between"
        style={{ top: `${i * 15}px`, transformStyle: 'preserve-3d' }}
      >
        <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_8px_fuchsia]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-fuchsia-500 to-orange-500 opacity-30" />
        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_orange]" />
      </motion.div>
    ))}
  </div>
);

export const FloatingParticles3D = ({ className }) => (
  <div className={`relative w-64 h-64 ${className}`}>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          x: [Math.random() * 200, Math.random() * 200],
          y: [Math.random() * 200, Math.random() * 200],
          opacity: [0.2, 0.8, 0.2],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5 + Math.random() * 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-1 h-1 rounded-full bg-fuchsia-400 shadow-[0_0_5px_fuchsia]"
        style={{ 
          left: `${Math.random() * 100}%`, 
          top: `${Math.random() * 100}%` 
        }}
      />
    ))}
  </div>
);


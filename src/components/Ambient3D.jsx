import { motion } from 'framer-motion';

export const Cube3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className={`relative w-24 h-24 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl bg-cyan-400/5 backdrop-blur-sm" style={{ transform: 'translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-xl bg-blue-500/5 backdrop-blur-sm" style={{ transform: 'translateZ(-48px)' }} />
    <div className="absolute inset-0 border-2 border-indigo-400/30 rounded-xl bg-indigo-400/5 backdrop-blur-sm" style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl bg-cyan-400/5 backdrop-blur-sm" style={{ transform: 'rotateY(-90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-blue-400/30 rounded-xl bg-blue-400/5 backdrop-blur-sm" style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
    <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl bg-indigo-500/5 backdrop-blur-sm" style={{ transform: 'rotateX(-90deg) translateZ(48px)' }} />
  </motion.div>
);

export const Rings3D = ({ className }) => (
  <motion.div
    animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className={`relative w-32 h-32 ${className}`}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-cyan-400 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateX(45deg)' }} />
    <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateY(45deg)' }} />
    <div className="absolute inset-0 border-4 border-t-indigo-400 border-r-transparent border-b-indigo-400 border-l-transparent rounded-full opacity-50" style={{ transform: 'rotateZ(45deg) rotateX(90deg)' }} />
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
      <div className="absolute inset-0 border border-cyan-400 bg-gradient-to-b from-cyan-400/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'translateZ(20px)' }} />
      <div className="absolute inset-0 border border-blue-500 bg-gradient-to-b from-blue-500/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'translateZ(-20px)' }} />
      <div className="absolute inset-0 border border-indigo-400 bg-gradient-to-b from-indigo-400/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'rotateY(90deg) translateZ(20px)' }} />
      <div className="absolute inset-0 border border-cyan-500 bg-gradient-to-b from-cyan-500/20 to-transparent" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', transform: 'rotateY(90deg) translateZ(-20px)' }} />
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
        className="absolute inset-0 border-2 border-blue-400/30 rounded-full" 
        style={{ transform: `rotateY(${i * 30}deg)` }} 
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <div 
        key={i + 6}
        className="absolute inset-0 border-2 border-cyan-500/20 rounded-full" 
        style={{ transform: `rotateX(${i * 30}deg)` }} 
      />
    ))}
  </motion.div>
);

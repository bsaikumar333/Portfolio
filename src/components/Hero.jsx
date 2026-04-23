import { motion } from 'framer-motion';
import { Cube3D } from './Ambient3D';

export default function Hero() {
  return (
    <section className="bg-[#030014] text-white relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Ambient 3D Shape */}
      <div className="absolute top-1/3 right-[5%] opacity-40 pointer-events-none hidden lg:block z-0 perspective-1000">
        <Cube3D />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left: 3D Glowing Frame Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden transform perspective-1000 group-hover:rotate-y-12 transition-transform duration-500 ease-out flex items-center justify-center">
              {/* Placeholder image */}
              <img
                src="https://res.cloudinary.com/dyczztwg2/image/upload/v1776684583/photo_3_rzhq2e.jpg"
                alt="Bayineni Sai Kumar"
                className="w-full h-full object-cover  hover:mix-blend-normal transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full glass-card text-fuchsia-400 text-sm font-medium tracking-wide mb-4 border border-fuchsia-500/30">
              Welcome to my universe
            </span>
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400 glow-text">
              Bayineni Sai Kumar
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light">
            2nd Year BSc Student at BITS Pilani | Full-Stack Developer
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-fuchsia-500/30 transition-all border border-transparent hover:border-fuchsia-400/50">
              View Projects
            </button>
            <button className="px-8 py-3 rounded-xl glass-card text-white font-medium glass-hover border border-white/10 hover:border-white/30 transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

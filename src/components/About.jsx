import { motion } from 'framer-motion';
import { Rings3D } from './Ambient3D';

export default function About() {
  return (
    <section className="bg-[#030014] text-white py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="about">
      {/* Ambient 3D Shape */}
      <div className="absolute top-1/4 left-[-2%] opacity-30 pointer-events-none hidden md:block z-0 perspective-1000">
        <Rings3D />
      </div>
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">My Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden group"
        >
          {/* Subtle gradient orb inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-glow/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-glow/20 transition-all duration-700" />
          
          <div className="relative z-10 space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              Hello! I'm <strong className="text-white font-medium">Bayineni Sai Kumar</strong>, currently a second-year BSc student at the prestigious BITS Pilani. My journey in technology began with a deep-seated curiosity about how things work behind the screen, which quickly evolved into a profound passion for Full-Stack Development.
            </p>
            <p>
              Over the years, I have honed my skills in building robust, seamless web applications from the ground up. Whether it's crafting an intuitive, state-of-the-art frontend using React or architecting a highly scalable backend with Node.js and Python, I am driven by the constant pursuit of excellence and the thrill of solving complex problems.
            </p>
            <p>
              Beyond the code, I firmly believe in the power of leadership and community. From spearheading logistics for the Drone Club to curating aesthetics as the Decoration Head for the Arts Club, I thrive in collaborative environments where innovation meets execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

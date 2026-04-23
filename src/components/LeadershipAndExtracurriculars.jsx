import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Plane, Palette } from 'lucide-react';
import { useRef } from 'react';
import { Rings3D } from './Ambient3D';

const TiltCard = ({ title, club, role, icon: Icon, delay }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl glass-card border border-white/10 p-8 flex flex-col items-center justify-center cursor-pointer overflow-visible group"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-orange-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      <motion.div
        style={{ transform: "translateZ(75px)" }}
        className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl glass-card group-hover:border-fuchsia-400/50 transition-colors"
      >
        <Icon className="w-10 h-10 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors drop-shadow-lg" />
      </motion.div>
      <motion.h3
        style={{ transform: "translateZ(60px)" }}
        className="text-2xl outline-none font-bold text-white text-center mb-2"
      >
        {role}
      </motion.h3>
      <motion.p
        style={{ transform: "translateZ(40px)" }}
        className="text-fuchsia-300/80 font-medium tracking-wide"
      >
        {club}
      </motion.p>
      <motion.div
        style={{ transform: "translateZ(30px)" }}
        className="mt-6 text-sm text-gray-400 text-center font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default function LeadershipAndExtracurriculars() {
  return (
    <section className="bg-[#030014] text-white py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="leadership">
      {/* Ambient 3D Shape */}
      <div className="absolute top-1/2 left-[5%] -translate-y-1/2 opacity-30 pointer-events-none hidden lg:block z-0 perspective-1000">
        <Rings3D className="border-fuchsia-500/20" />
      </div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">
            Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">Extracurriculars</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 justify-center mt-12 perspective-1000">
          <TiltCard
            role="Logistics Head"
            club="Robotics Club"
            title="Spearheaded organizational logistics, managed inventory, and streamlined operational workflows for large-scale club events."
            icon={Plane}
            delay={0.1}
          />
          <TiltCard
            role="Decoration Head"
            club="Performing Arts Council"
            title="Curated aesthetic designs, led creative teams, and enriched the visual experience of major campus festivals."
            icon={Palette}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Wifi, Plane } from 'lucide-react';
import { Sphere3D } from './Ambient3D';

const ProjectCard = ({ title, highlight, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="glass-card rounded-2xl p-6 group glass-hover"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        {highlight && (
          <span className="inline-block px-2 py-1 bg-blue-500/20 border border-blue-500/20 text-blue-200 text-xs font-medium rounded-md mb-3">
            {highlight}
          </span>
        )}
        <p className="text-gray-400 text-sm leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const WorkshopItem = ({ title, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 hover:border-cyan-400/30 transition-all cursor-default"
  >
    <div className="p-2 rounded-lg bg-white/5 text-gray-300">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-gray-200 font-medium">{title}</span>
  </motion.div>
);

export default function ExperienceAndProjects() {
  return (
    <section className="bg-[#0f172a] text-white py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="experience">
      {/* Ambient 3D Shape */}
      <div className="absolute bottom-[10%] left-[5%] opacity-30 pointer-events-none hidden md:block z-0 perspective-1000">
        <Sphere3D />
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
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Projects Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-cyan-500 block"></span>
              Featured Work
            </h3>
            <ProjectCard 
              title="Study Sync AI"
              highlight="BASE44 Hackathon - 3rd Place"
              description="Developed a collaborative, AI-driven study platform utilizing advanced algorithms to synchronize and personalize learning materials for students."
              icon={Award}
              delay={0.1}
            />
            <ProjectCard 
              title="Women Safe Detector"
              highlight="Backend Architecture"
              description="Architected a highly scalable and secure backend system for real-time safety tracking and distress signal routing, ensuring minimal latency."
              icon={ShieldCheck}
              delay={0.2}
            />
          </div>

          {/* Workshops Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-8 rounded-full bg-blue-500 block"></span>
              Technical Workshops
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <WorkshopItem title="Robotic Arm Automation" icon={Cpu} delay={0.3} />
              <WorkshopItem title="Internet of Things (IoT)" icon={Wifi} delay={0.4} />
              <WorkshopItem title="Drone Aviation & Tech" icon={Plane} delay={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Wifi, Plane, Sparkles, Bot } from 'lucide-react';
import { Sphere3D } from './Ambient3D';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, highlight, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="glass-card rounded-3xl p-8 group relative overflow-hidden transition-all duration-500 hover:border-fuchsia-500/30"
  >
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-fuchsia-500/5 rounded-full blur-3xl group-hover:bg-fuchsia-500/10 transition-all duration-700" />
    <div className="flex items-start gap-6 relative z-10">
      <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500 border border-fuchsia-500/20 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
          {title}
        </h3>
        {highlight && (
          <span className="inline-block px-3 py-1 bg-[#2a1b0a] border border-orange-900/30 text-orange-300 text-xs font-bold rounded-lg mb-4 tracking-wide uppercase">
            {highlight}
          </span>
        )}
        <p className="text-gray-400 text-base leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const WorkshopItem = ({ title, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center gap-5 p-5 rounded-2xl glass-card border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-default group"
  >
    <div className="p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-all duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-gray-300 font-semibold text-lg group-hover:text-white transition-colors">{title}</span>
  </motion.div>
);

export default function ExperienceAndProjects() {
  return (
    <section className="bg-[#030014] text-white py-32 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="experience">
      {/* Ambient 3D Shape */}
      <div className="absolute bottom-[5%] left-[2%] opacity-20 pointer-events-none hidden md:block z-0 scale-150">
        <Sphere3D />
      </div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-outfit">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">Experience</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-fuchsia-500 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Projects Column */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="w-1.5 h-10 rounded-full bg-fuchsia-500 block"></span>
              Featured Work
            </h3>
            
            <div className="space-y-8">
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

              {/* LLM Projects Section */}
              <Link to="/llm-projects" className="block group/link">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass-card rounded-3xl p-8 group relative overflow-hidden transition-all duration-500 border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/5 to-transparent hover:border-fuchsia-500/50"
                >
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-all duration-700" />
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-fuchsia-500/20 text-fuchsia-400 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(217,70,239,0.2)] border border-fuchsia-500/30">
                      <Bot className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors flex items-center gap-3">
                        LLM Projects
                        <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
                      </h3>
                      <span className="inline-block px-3 py-1 bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-bold rounded-lg mb-4 uppercase tracking-wider">
                        New Dashboard
                      </span>
                      <p className="text-gray-400 text-base leading-relaxed font-light mb-6">
                        Explore my work with Large Language Models, Generative AI, and Autonomous Agents.
                      </p>
                      <div className="flex items-center gap-2 text-fuchsia-400 text-base font-bold group-hover:gap-3 transition-all">
                        Open Dashboard
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Workshops Column */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="w-1.5 h-10 rounded-full bg-orange-500 block"></span>
              Technical Workshops
            </h3>
            <div className="space-y-4">
              <WorkshopItem title="Robotic Arm Automation" icon={Cpu} delay={0.1} />
              <WorkshopItem title="Internet of Things (IoT)" icon={Wifi} delay={0.2} />
              <WorkshopItem title="Drone Aviation & Tech" icon={Plane} delay={0.3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, Server, Palette, FileCode, Terminal } from 'lucide-react';
import { Diamond3D } from './Ambient3D';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: Code2, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
      { name: "JavaScript", icon: FileCode, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
      { name: "HTML", icon: LayoutTemplate, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
      { name: "CSS", icon: Palette, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
      { name: "Python", icon: Terminal, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
      { name: "SQL", icon: Database, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function SkillCloud() {
  return (
    <section className="bg-[#030014] text-white py-24 relative overflow-hidden" id="skills">
      {/* Ambient 3D Shape */}
      <div className="absolute top-[15%] right-[5%] opacity-30 pointer-events-none hidden md:block z-0 perspective-1000">
        <Diamond3D />
      </div>
      <div className="max-w-6xl mx-auto z-10 relative px-6 sm:px-12 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-orange-400 mx-auto rounded-full mt-2" />
          <p className="text-center text-gray-400 font-light text-lg mt-6 max-w-2xl mx-auto">
            A clean, carefully curated set of technologies I use to build scalable and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-fuchsia-500 to-orange-400 shadow-sm"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${skill.border} glass-card hover:shadow-lg hover:shadow-fuchsia-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default group`}
                  >
                    <div className={`p-3 rounded-xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-white tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

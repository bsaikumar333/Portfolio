import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Cube3D } from './Ambient3D';

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactIcon = ({ icon: Icon, href, label, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative flex flex-col items-center gap-3"
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-card flex items-center justify-center border border-white/10 group-hover:border-fuchsia-400/50 shadow-lg group-hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all duration-300">
      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:text-fuchsia-400 transition-colors" />
    </div>
    <span className="text-sm font-medium text-gray-400 group-hover:text-fuchsia-300 transition-colors">
      {label}
    </span>
  </motion.a>
);

export default function Contact() {
  return (
    <section className="bg-[#030014] text-white py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Ambient 3D Shape */}
      <div className="absolute top-[20%] right-[10%] opacity-30 pointer-events-none hidden md:block z-0 perspective-1000">
        <Cube3D />
      </div>

      <div className="max-w-4xl mx-auto z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-orange-400 mx-auto rounded-full mb-8" />
          <p className="text-gray-300 max-w-xl mx-auto text-lg font-light">
            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <ContactIcon 
            icon={Linkedin} 
            href="https://www.linkedin.com/in/bayineni-sai-kumar" 
            label="LinkedIn"
            delay={0.1} 
          />
          <ContactIcon 
            icon={Github} 
            href="https://github.com/bsaikumar333" 
            label="GitHub"
            delay={0.2} 
          />
          <ContactIcon 
            icon={Mail} 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=saikumarbayineni333@gmail.com" 
            label="Gmail"
            delay={0.3} 
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10 text-gray-500 text-sm flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p>© {new Date().getFullYear()} Bayineni Sai Kumar. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </motion.div>
      </div>
    </section>
  );
}

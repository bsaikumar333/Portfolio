import { motion } from 'framer-motion';
import { Bot, ExternalLink, ArrowLeft, BrainCircuit, Sparkles, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, link, tags, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass-card rounded-2xl p-8 group hover:border-fuchsia-500/50 transition-all duration-500 relative overflow-hidden"
  >
    <div className="absolute -right-8 -top-8 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-3xl group-hover:bg-fuchsia-500/10 transition-all duration-500" />
    
    <div className="flex flex-col h-full relative z-10">
      <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 w-fit mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
        <Icon className="w-8 h-8" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-fuchsia-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white font-bold hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all active:scale-95"
      >
        View on Colab
        <ExternalLink className="w-5 h-5" />
      </a>
    </div>
  </motion.div>
);

export default function LLMProjectsDashboard() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Building RAG Agents Using LangChain",
      description: "Implemented a robust Retrieval-Augmented Generation (RAG) system with autonomous agents using LangChain. Features include dynamic document retrieval, multi-step reasoning, and tool use for enhanced accuracy.",
      link: "https://colab.research.google.com/drive/1rv_SsYptKsMIyb2Zh4jcdAdz__mtYSjq?usp=sharing",
      tags: ["LangChain", "RAG", "LLM Agents", "Vector DB"],
      icon: BrainCircuit,
      delay: 0.1
    },
    {
      title: "Advanced Prompt Engineering Suite",
      description: "A collection of high-performance prompt templates and chain-of-thought strategies designed for complex reasoning tasks across multiple LLM providers.",
      link: "#",
      tags: ["Prompt Engineering", "NLP", "GPT-4"],
      icon: Sparkles,
      delay: 0.2
    },
    {
      title: "Semantic Search Engine",
      description: "Neural search implementation using sentence embeddings and efficient vector similarity search for large-scale document collections.",
      link: "#",
      tags: ["FAISS", "Embeddings", "Neural Search"],
      icon: MessageSquare,
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-fuchsia-500/30 overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-20 relative z-10">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-fuchsia-400 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </motion.button>

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
              <Bot className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold font-outfit">
              LLM <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400">Projects</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed"
          >
            Exploring the frontiers of Large Language Models, Generative AI, and Autonomous Agents. From RAG systems to complex prompt engineering.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

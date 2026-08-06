import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500"
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
        style={{
          backgroundColor: project.color + "20",
        }}
      >
        <Icon
          size={42}
          color={project.color}
        />
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {project.title}
      </h3>

      <p className="text-gray-300 leading-7 mb-6">
        {project.description}
      </p>

    <div className="flex flex-wrap gap-2 mb-6">
    {project.technologies.map((tech) => (
        <span
        key={tech}
        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
        >
        {tech}
        </span>
    ))}
    </div>

    <div className="flex gap-4 mt-6">

        {project.github && (
            <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400"
            >
            <FaGithub />
            GitHub
            </a>
        )}

        {project.demo && (
            <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400"
            >
            <FaExternalLinkAlt />
            Live Demo
            </a>
        )}

        {project.private && (
            <span className="text-orange-400 font-medium">
            🔒 Enterprise Project (Private)
            </span>
        )}

    </div>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border p-8"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl" style={{ backgroundColor: `${project.color}20` }}>
        <Icon size={42} color={project.color} />
      </div>

      <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

      <p className="mb-6 leading-7" style={{ color: "var(--muted)" }}>
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}>
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2" style={{ color: "var(--text)" }}>
            <FaGithub />
            GitHub
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2" style={{ color: "var(--text)" }}>
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

        {project.private && <span className="font-medium" style={{ color: "#f59e0b" }}>🔒 Enterprise Project (Private)</span>}
      </div>
    </motion.div>
  );
}
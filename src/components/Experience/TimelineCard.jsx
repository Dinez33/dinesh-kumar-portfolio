import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function TimelineCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl border p-8"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      <div className="absolute -left-5 top-10 flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ backgroundColor: "var(--primary)" }}>
        <FaBriefcase />
      </div>

      <h3 className="text-2xl font-bold">{job.role}</h3>

      <p className="mt-2" style={{ color: "var(--accent)" }}>
        {job.company}
      </p>

      <p className="mb-5" style={{ color: "var(--muted)" }}>
        {job.duration}
      </p>

      <ul className="space-y-2" style={{ color: "var(--muted)" }}>
        {job.achievements.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.technologies.map((tech) => (
          <span key={tech} className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
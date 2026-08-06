import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function TimelineCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: .5 }}
      className="relative bg-slate-900 rounded-xl p-8 border border-slate-700"
    >
      <div className="absolute -left-5 top-10 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
        <FaBriefcase />
      </div>

      <h3 className="text-2xl font-bold">
        {job.role}
      </h3>

      <p className="text-cyan-400 mt-2">
        {job.company}
      </p>

      <p className="text-gray-400 mb-5">
        {job.duration}
      </p>

      <ul className="space-y-2 text-gray-300">
        {job.achievements.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6">
        {job.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <p className="text-cyan-400 uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-2">
        {title}
      </h2>
    </motion.div>
  );
}
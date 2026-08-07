import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 text-center">
      <p className="uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {subtitle}
      </p>

      <h2 className="mt-2 text-5xl font-bold">{title}</h2>
    </motion.div>
  );
}
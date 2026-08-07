import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border p-6 shadow-lg"
      style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
    >
      <Icon size={55} color={skill.color} className="mx-auto mb-4" />

      <h3 className="text-center text-lg font-semibold">{skill.name}</h3>
    </motion.div>
  );
}
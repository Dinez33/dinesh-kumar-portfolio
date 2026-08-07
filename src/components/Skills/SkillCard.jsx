import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 shadow-lg"
    >
      <Icon
        size={55}
        color={skill.color}
        className="mx-auto mb-4"
      />

      <h3 className="text-center text-lg font-semibold">
        {skill.name}
      </h3>
    </motion.div>
  );
}
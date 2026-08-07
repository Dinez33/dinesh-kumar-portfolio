import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "var(--background)", color: "var(--text)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-center text-5xl font-bold">
          Technical Skills
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
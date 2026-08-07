import { experience } from "../../data/experience";
import TimelineCard from "./TimelineCard";
import SectionTitle from "../Common/SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#050816] text-text"
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          title="Work Experience"
          subtitle="Career Journey"
        />

        <div className="space-y-8">
          {experience.map((job) => (
            <TimelineCard
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
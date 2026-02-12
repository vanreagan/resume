import type { SkillGroup } from "../types";

export const Skills = ({ skills }: { skills: SkillGroup[] }) => {
  return (
    <section className="flex flex-col gap-4 pb-2">
      <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800 mt-2">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
        {skills.map((group) => (
          <div key={group.name} className="flex flex-col gap-3">
            <h3 className="text-md font-bold text-violet-600 uppercase tracking-wider">
              {group.name}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.keywords.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200 print:border-gray-300 print:bg-transparent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

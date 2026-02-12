import { formatResumeDate } from "../utils/date";
import type { WorkExperience } from "../types";

export const Experience = ({ work }: { work: WorkExperience[] }) => {
  return (
    <section className="mb-10 break-inside-avoid">
      <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-6  pb-2">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {work.map((job, index) => (
          // break-inside-avoid ensures a job entry doesn't get sliced in half
          <div key={index} className="group ">
            {/* Header Row: Position & Date */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {job.position}
              </h3>
              <span className="text-sm font-medium text-gray-500 tabular-nums shrink-0">
                {formatResumeDate(job.startDate)} —{" "}
                {formatResumeDate(job.endDate)}
              </span>
            </div>

            {/* Company Name */}
            <div className="text-base text-accent font-medium mb-3">
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </div>

            {/* Summary (Optional) */}
            {job.summary && (
              <p className="text-sm text-gray-700 italic mb-3">{job.summary}</p>
            )}

            {/* Bullet Points */}
            <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1 mb-3 marker:text-gray-400 text-justify">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="pl-1">
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Tech Stack for this role */}
            {job.techStack && job.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-accent bg-violet-50 px-2 py-0.5 rounded border border-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

import type { Education as EducationType } from "../types";
import { formatResumeDate } from "../utils/date";

export const Education = ({ education }: { education: EducationType[] }) => {
  return (
    <section className="flex flex-col gap-4 pb-2">
      <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800 ">
        Education
      </h2>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between"
          >
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {edu.institution}
              </h3>
              <p className="text-sm text-gray-600">
                {edu.studyType} in {edu.area}
              </p>
            </div>
            <div className="text-sm font-medium text-gray-500 tabular-nums text-right">
              {formatResumeDate(edu.startDate)} &nbsp;&mdash;&nbsp;
              {formatResumeDate(edu.endDate)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

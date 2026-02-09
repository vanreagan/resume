import { resumeData } from "./data/resume";
import { Header } from "./components/Header";

const resume = resumeData;

export default function Document() {
  return (
    // A4/Letter Aspect Ratio Container: 8.5in x 11in = 204 x 264 tailwind units
    <div className="max-w-204 mx-auto min-h-264 bg-white p-12 shadow-xl print:shadow-none print:p-12 print:m-0 print:w-full">
      <Header basics={resume.basics} />

      <section className="mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {resume.skills?.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-md border border-gray-200"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-gray-800">
          Select Projects
        </h2>
        <div className="space-y-4">
          {resume.projects?.map((project) => (
            <article key={project.name}>
              <h3 className="font-bold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
              <div className="mt-1">
                {/* Semantic list for tech stack ensures ATS reads it associated with the project */}
                <ul className="flex gap-2 text-xs text-blue-600 font-mono">
                  {project.keywords?.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Floating Action Button (Visible only on screen) */}
      <div className="fixed bottom-8 right-8 no-print">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

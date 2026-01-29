import { resumeData } from "./data/resume";

const resume = resumeData;

function App() {
  return (
    // A4/Letter Aspect Ratio Container: 8.5in x 11in = 204 x 264 tailwind units
    <div className="max-w-204 mx-auto min-h-264 bg-white p-12 shadow-xl print:shadow-none print:p-0">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tight text-gray-900">
          {resume.basics.name}
        </h1>
        <p className="text-lg text-gray-600 mt-1">{resume.basics.label}</p>

        {/* Contact Info Row */}
        <div className="flex gap-4 text-sm mt-4 text-gray-500">
          <span>
            <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
          </span>
          <span>•</span>
          <span>
            <a href={`tel:${resume.basics.phone}`}>{resume.basics.phone}</a>
          </span>
          <span>•</span>
          <span>
            {resume.basics.location.city}, {resume.basics.location.country}
          </span>
        </div>
        <span className="text-xs text-gray-700">Legal Name:</span>
        <p className="text-xs text-gray-500">{resume.basics.legalName}</p>
      </header>

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

export default App;

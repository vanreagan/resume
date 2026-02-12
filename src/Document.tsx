import { resumeData } from "./data/resume";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { useEffect } from "react";

const resume = resumeData;

export default function Document() {
  // Let's update the title dynamically for a cute touch <3

  useEffect(() => {
    document.title = `${resume.basics.name} - ${resumeData.basics.label} Resume`;
  }, []);

  return (
    // A4/Letter Aspect Ratio Container: 8.5in x 11in = 204 x 264 tailwind units
    <div className="max-w-204 mx-auto min-h-264 bg-white p-12 shadow-xl print:shadow-none print:m-0 print:w-full print:p-0 flex flex-col gap-4 ">
      <Header basics={resume.basics} />
      <Skills skills={resume.skills} />
      <Education education={resume.education} />
      <Experience work={resume.work} />
      <Projects projects={resume.projects} />

      <div className="fixed bottom-8 right-8 no-print">
        <button
          onClick={() => window.print()}
          className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all cursor-pointer"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

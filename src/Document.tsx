import { resumeData } from "./data/resume";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { useEffect, useState } from "react";

import type { Option } from "./types";

const resume = resumeData;

// Some defaults.
const IS_LEGAL_NAME_VISIBLE = true;
const ARE_PRONOUNS_VISIBLE = true;
const IS_PHONE_VISIBLE = true;
const IS_SECONDARY_EMAIL_VISIBLE = false;

const optionsMenu: Option[] = [
  {
    id: "includePronouns",
    label: "Include pronouns",
    checked: ARE_PRONOUNS_VISIBLE,
  },
  {
    id: "includeLegalName",
    label: "Include legal name",
    checked: IS_LEGAL_NAME_VISIBLE,
  },
  {
    id: "includeSecondaryEmail",
    label: "Include secondary email",
    checked: IS_SECONDARY_EMAIL_VISIBLE,
  },
  {
    id: "includePhoneNumber",
    label: "Include phone number",
    checked: IS_PHONE_VISIBLE,
  },
];

export default function Document() {
  // State for options menu
  const [options, setOptions] = useState(optionsMenu);

  // Let's update the title dynamically for a cute touch <3
  useEffect(() => {
    document.title = `${resume.basics.name} - ${resumeData.basics.label} Resume`;
  }, []);

  // Handlers
  const handleOptionChange = (optionId: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId
          ? { ...option, checked: !option.checked }
          : option,
      ),
    );
  };

  return (
    // A4/Letter Aspect Ratio Container: 8.5in x 11in = 204 x 264 tailwind units
    <div className="max-w-204 mx-auto min-h-264 bg-white p-12 shadow-xl print:shadow-none print:m-0 print:w-full print:p-0 flex flex-col gap-4 ">
      <Header basics={resume.basics} options={options} />
      <Skills skills={resume.skills} />
      <Education education={resume.education} />
      <Experience work={resume.work} />
      <Projects projects={resume.projects} />

      <div className="fixed bottom-8 right-8 no-print p-4 bg-white rounded-md shadow-lg border border-gray-200 flex flex-col gap-4">
        <h2 className="font-bold text-lg">Options</h2>
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <input
              id={option.id}
              type="checkbox"
              checked={option.checked}
              readOnly
              onChange={() => handleOptionChange(option.id)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}

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

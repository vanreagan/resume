import { MapPin, Mail, Phone, Globe, Languages } from "lucide-react";
import {
  AiFillLinkedin as Linkedin,
  AiFillGithub as Github,
} from "react-icons/ai";
import type { Basics } from "../types";

const IS_LEGAL_NAME_VISIBLE = false;
const ARE_PRONOUNS_VISIBLE = true;
const IS_PHONE_VISIBLE = true;

const socialIconMap: Record<
  string,
  React.ComponentType<{ size: number; className?: string }>
> = {
  linkedin: Linkedin,
  github: Github,
  default: Globe,
};

export const Header = ({ basics }: { basics: Basics }) => {
  return (
    <header className="border-b border-gray-300 ">
      <div className="flex justify-around items-start gap-6">
        <div className="flex-1 space-y-2 mt-2">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-none">
            {basics.name}
            {ARE_PRONOUNS_VISIBLE && basics.pronouns && (
              <span className="text-base font-normal text-gray-400 ml-2">
                ({basics.pronouns})
              </span>
            )}
          </h1>

          {IS_LEGAL_NAME_VISIBLE && basics.legalName && (
            <span className="text-sm text-gray-400 italic block">
              ({basics.legalName})
            </span>
          )}

          <p className="text-2xl font-medium text-violet-600 tracking-wide">
            {basics.label}
          </p>

          <div className="flex items-center gap-2.5 justify-start text-gray-500">
            <MapPin size={16} className="shrink-0" />
            <span className="text-right">
              {basics.location.city}, {basics.location.country}
            </span>
          </div>

          <div className="flex items-center gap-2.5 justify-start text-sm font-medium text-gray-600 mt-4">
            <Languages size={16} className="shrink-0" />
            <span className="text-right">
              {basics.languages
                ?.map((lang) => `${lang.language} (${lang.fluency})`)
                .join(" • ")}
            </span>
          </div>
        </div>

        <div className="shrink-0 bg-slate-50 rounded-xl p-4 border border-gray-200 print:bg-transparent print:border-none print:p-0">
          <div className="flex flex-col gap-2.5 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2.5 justify-start hover:text-violet-600 transition-colors">
              <Mail size={18} className="text-violet-500 shrink-0" />
              <a href={`mailto:${basics.email}`} className="text-right">
                {basics.email}
              </a>
            </div>

            {IS_PHONE_VISIBLE && basics.phone && (
              <div className="flex items-center gap-2.5 justify-start hover:text-violet-600 transition-colors">
                <Phone size={18} className="text-violet-500 shrink-0" />
                <a href={`tel:${basics.phone}`} className="text-right">
                  {basics.phone}
                </a>
              </div>
            )}
            {basics.profiles?.map((profile) => {
              const Icon =
                socialIconMap[profile.network.toLowerCase()] ||
                socialIconMap["default"];

              return (
                <div
                  key={profile.network}
                  className="flex items-center gap-2.5 justify-start hover:text-violet-600 transition-colors"
                >
                  <Icon size={18} className="text-violet-500 shrink-0" />
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-right"
                  >
                    {profile.username}
                  </a>
                </div>
              );
            })}
            {/* 
            <div className="mt-4 pt-3 border-t border-gray-200">
              <div className="flex items-center gap-2.5 justify-end text-sm font-medium text-gray-600">
               
                <ul className="text-left">
                  {basics.languages?.map((lang) => (
                    <li key={lang.language}>
                      {lang.language} ({lang.fluency})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
             */}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed text-justify text-base">
          {basics.summary}
        </p>
      </div>
    </header>
  );
};

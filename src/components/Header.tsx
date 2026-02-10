import { MapPin, Mail, Phone, Globe } from "lucide-react";
import {
  AiFillLinkedin as Linkedin,
  AiFillGithub as Github,
} from "react-icons/ai";
import type { Basics } from "../types";

const IS_LEGAL_NAME_VISIBLE = false;

export const Header = ({ basics }: { basics: Basics }) => {
  return (
    <header className="mb-8 border-b border-gray-300 pb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            {basics.name}{" "}
          </h1>
          {IS_LEGAL_NAME_VISIBLE && basics.legalName ? (
            <span className="text-sm text-gray-400 italic">
              ({basics.legalName})
            </span>
          ) : null}
          <p className="text-xl font-medium text-violet-500 tracking-wide">
            {basics.label}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 font-medium mt-2">
          <MapPin size={16} />
          <span>
            {basics.location.city},{" "}
            {`${basics.location.region ? basics.location.region + ", " : ""}`}{" "}
            {basics.location.country}
          </span>
        </div>
      </div>

      {/* Middle Row: Contact Info ONLY */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-1.5 hover:text-violet-500 transition-colors">
          <Mail size={16} className="text-gray-400" />
          <a href={`mailto:${basics.email}`}>{basics.email}</a>
        </div>

        {basics.phone && (
          <div className="flex items-center gap-1.5 hover:text-violet-500 transition-colors">
            <Phone size={16} className="text-gray-400" />
            <a href={`tel:${basics.phone}`}>{basics.phone}</a>
          </div>
        )}

        {basics.profiles?.map((profile) => {
          const Icon =
            profile.network.toLowerCase() === "github"
              ? Github
              : profile.network.toLowerCase() === "linkedin"
                ? Linkedin
                : Globe;
          return (
            <div
              key={profile.network}
              className="flex items-center gap-1.5 hover:text-violet-500 transition-colors"
            >
              <Icon size={16} className="text-gray-400" />
              <a href={profile.url} target="_blank" rel="noreferrer">
                {profile.username}
              </a>
            </div>
          );
        })}
      </div>

      {/* Bottom Row: Summary */}
      <div className="text-gray-700 leading-relaxed text-justify max-w-none">
        {basics.summary}
      </div>
    </header>
  );
};

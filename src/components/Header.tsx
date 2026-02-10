import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import type { Basics } from "../types";

const IS_LEGAL_NAME_VISIBLE = false;

export const Header = ({ basics }: { basics: Basics }) => {
  return (
    <header className="flex flex-col gap-6 mb-8 border-b border-gray-200 pb-8">
      {/* Name and Title */}
      <div className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {basics.name}
        </h1>
        <p className="text-xl font-medium text-blue-600">{basics.label}</p>

        {IS_LEGAL_NAME_VISIBLE && basics.legalName && (
          <p className="text-xs text-gray-400">Legal: {basics.legalName}</p>
        )}
      </div>

      {/* Contact Grid - Adapts to content size */}
      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600">
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-gray-400" />
          <span>
            {basics.location.city}, {basics.location.country}
          </span>
        </div>

        {/* Email - Use mailto for functionality */}
        <div className="flex items-center gap-1.5">
          <Mail size={16} className="text-gray-400" />
          <a
            href={`mailto:${basics.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            {basics.email}
          </a>
        </div>

        {/* Phone */}
        {basics.phone && (
          <div className="flex items-center gap-1.5">
            <Phone size={16} className="text-gray-400" />
            <a
              href={`tel:${basics.phone}`}
              className="hover:text-blue-600 transition-colors"
            >
              {basics.phone}
            </a>
          </div>
        )}

        {/* Social Profiles Loop */}
        {basics.profiles?.map((profile) => {
          // Dynamic Icon mapping
          const Icon =
            profile.network.toLowerCase() === "github"
              ? AiFillGithub
              : profile.network.toLowerCase() === "linkedin"
                ? AiFillLinkedin
                : Globe;

          return (
            <div key={profile.network} className="flex items-center gap-1.5">
              <Icon size={16} className="text-gray-400" />
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {profile.username}
              </a>
            </div>
          );
        })}
      </div>

      {/* Summary Section - Placed here or in a separate component */}
      <div className="max-w-3xl">
        <p className="text-gray-700 leading-relaxed text-base text-justify">
          {basics.summary}
        </p>
      </div>
    </header>
  );
};

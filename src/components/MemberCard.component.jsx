import React from 'react';
import { ExternalLink, Linkedin, Mail } from "lucide-react";

const MemberCard = ({ name, designation, info, image, website, linkedin, email }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        <p className="text-sm text-blue-600 font-semibold mb-1">
          {designation}
        </p>

        <p className="text-sm text-gray-600 mb-3">
          {info}
        </p>

        <div className="flex items-center gap-3 mt-2">

          {/* Email */}
          {email && (
            <a
              href={`mailto:${email}`}
              title="Email"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
            </a>
          )}

          {/* Website */}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              title="Faculty Website"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}

          {/* LinkedIn */}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default MemberCard;

import React, { useState, useEffect } from 'react';
import { MapPin, Home as HomeIcon, Mail, User, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactPerson = {
    name: "Dr. Satish Kr. Regonda",
    role: "Chairman, RDC",
    email: "chair.rdc@iith.ac.in"
  };

  const address = {
    line1: "Rural Development Centre",
    line2: "Department of Civil Engineering, Block B, IIT Hyderabad, Kandi, Sangareddy - 502284, Telangana, India"
  };

  const organizationEmail = "rdc@iith.ac.in";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Contact us for any queries or register for a campus tour
          </p>
        </div>

        {/* CONTACT INFO & MAP SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 lg:mb-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">

            {/* Left Column - Contact Info */}
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Get In Touch
              </h3>

              {/* Contact Person */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <User className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    {contactPerson.name}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {contactPerson.role}
                  </p>
                  <a
                    href={`mailto:${contactPerson.email}`}
                    className="text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                    {contactPerson.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    Address
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {address.line1}
                    <br />
                    {address.line2}
                  </p>
                </div>
              </div>

              {/* Organisation Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${organizationEmail}`}
                    className="text-sm sm:text-base text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                    {organizationEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-64 sm:h-80 lg:h-auto">
              <iframe
                title="Civil Engineering Block B - IIT Hyderabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.5831662140847!2d78.12288577490225!3d17.5942317833808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf5b68a2b70c9%3A0x10da85b7336cfcd1!2sDepartment%20of%20Civil%20Engineering%2C%20Block%20B%2C%20IIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1730478201239!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '256px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* CAMPUS TOUR REGISTRATION SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              RDC's Outreach and Campus Visit Program
            </h2>

            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left sm:text-center">
              <p>
                RDC has adopted five villages in Kowdipally and Kandi mandals in the erstwhile Medak district to expand its outreach and impact. As part of its initiatives, RDC actively supports schools, colleges, and welfare communities across Telangana and the neighboring states of Maharashtra and Karnataka.
              </p>

              <p>
                To inspire young minds, RDC provides students with opportunities to explore the IIT Hyderabad campus. These visits offer exposure to advanced technology, high-end laboratories, and the Knowledge Resource Center, fostering curiosity and encouraging students toward higher education and innovation.
              </p>

              <p className="font-semibold text-gray-900">
                Join us in shaping the future by experiencing the world of cutting-edge research and learning at IIT Hyderabad!
              </p>
            </div>

            <a
              href="https://www.iith.ac.in/visit/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              Register for Campus Tour
              <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
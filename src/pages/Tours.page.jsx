import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Briefcase, Calendar, MapPin, Home as HomeIcon, Info, Award, Sparkles, ArrowRight, Mail, Phone, MapPinIcon } from 'lucide-react';

const Tours = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Campus Tour</h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore RDC facilities and rural innovation spaces at IIT Hyderabad
                </p>
            </div>

            {/* Interactive Map Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">RDC Facilities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">RDC Main Office</h3>
                            <p className="text-gray-600">IIT Hyderabad Campus</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all">
                            <h4 className="font-bold text-gray-900 mb-2">📍 Location</h4>
                            <p className="text-gray-600">Near Main Academic Building</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all">
                            <h4 className="font-bold text-gray-900 mb-2">🏢 Research Labs</h4>
                            <p className="text-gray-600">State-of-the-art facilities for rural technology development</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all">
                            <h4 className="font-bold text-gray-900 mb-2">💻 Innovation Center</h4>
                            <p className="text-gray-600">Collaborative workspace for project development</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visit Information */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-white">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
                    <p className="text-xl text-blue-100">
                        We welcome collaborators, researchers, and visitors interested in rural development
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Phone className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Contact</h3>
                        <p className="text-blue-100">chair.rdc@iith.ac.in</p>
                    </div>
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Address</h3>
                        <p className="text-blue-100">IIT Hyderabad, Kandi, Sangareddy</p>
                    </div>
                    <div className="text-center">
                        <Calendar className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Hours</h3>
                        <p className="text-blue-100">Mon-Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Tours;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Briefcase, MapPin as MapPinIcon, Users, Award, Link as LinkIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    const [newsItems, setNewsItems] = useState([])
    const [support, setSupport] = useState([])

    useEffect(() => {
        fetch('/data/data.json')
            .then(res => res.json())
            .then(data => {
                setNewsItems(data.newsItems || [])
                setSupport(data.support || [])
            })
            .catch(() => {
                setNewsItems([])
                setSupport([])
            })
    }, [])

    const sortedNews = [...newsItems].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <div className="min-h-screen">

            {/* ================= HERO ================= */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Swiper Background */}
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="${className}" style="background: white;"></span>`;
                        },
                    }}
                    loop={true}
                    className="h-full w-full"
                >
                    {[
                        "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
                        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95",
                        "/images/hero/1.jpg",
                        "/images/hero/2.jpg"
                    ].map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative h-full w-full">
                                <img
                                    src={img}
                                    alt={`Rural India ${idx + 1}`}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Hero Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-800/50 backdrop-blur-sm rounded-full mb-8 border border-blue-400/30">
                            <span className="text-sm font-medium text-white">✨ Empowering Rural India</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Rural Development Centre
                        </h1>

                        <p className="text-xl sm:text-2xl text-blue-100 mb-4">
                            IIT Hyderabad
                        </p>

                        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-12">
                            Bridging innovation and rural development through cutting-edge research
                            and sustainable solutions
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/events" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center group cursor-pointer">
                                Explore Our Efforts
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>

                            <Link to="/projects" className="px-8 py-4 bg-blue-800/50 backdrop-blur-sm border-2 border-blue-400/50 text-white rounded-lg font-semibold hover:bg-blue-700/50 transition-all">
                                View Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Custom Swiper Styles */}
                <style jsx>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          opacity: 1;
          background: white;
        }
      `}</style>
            </section>

            {/* ================= STATS + NEWS ================= */}
            <div className="py-10 bg-white max-w-6xl mx-auto px-4 sm:px-6">
                <div className="p-1 overflow-hidden grid lg:grid-cols-2 gap-6 items-stretch h-95">

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 h-full min-h-0">
                        {[
                            { label: 'Active Projects', value: '5+', icon: Briefcase },
                            { label: 'Villages Adopted', value: '5+', icon: MapPinIcon },
                            { label: 'Life Impacted', value: '2500+', icon: Users },
                            { label: 'Years of Impact', value: '6+', icon: Award }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-center text-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                                <stat.icon className="w-7 h-7 mx-auto mb-2 text-blue-600" />
                                <div className="text-2xl font-bold text-blue-900 mb-0.5">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* News Section */}
                    <div className="flex flex-col h-full min-h-0">
                        <div className="bg-white border rounded-lg shadow-sm flex flex-col h-full overflow-auto pb-2">

                            <div className="px-4 py-3 border-b flex-shrink-0">
                                <h2 className="text-lg font-bold text-gray-900">
                                    News & Updates
                                </h2>
                            </div>

                            <div className="flex-1 overflow-y-auto">
                                <ul className="divide-y">
                                    {sortedNews.map((item, idx) => (
                                        <li key={idx} className="p-4 text-sm">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-700 font-medium hover:underline"
                                            >
                                                {item.title}
                                            </a>
                                            <div className="text-gray-500 mt-1">
                                                {item.date} • {item.source}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* ================= ABOUT ================= */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                About Rural Development Centre
                            </h2>

                            <p className="text-base text-gray-700 leading-loose mb-5">
                                The Rural Development Center (RDC) was established in 2020 under the vision of Prof. B.S. Murty, Director of IIT-H. While IITs, including IIT-H, are renowned for academic excellence & global research impact, RDC emerged from a key question: <strong>What does the institution mean to its immediate neighbors, especially the surrounding rural communities?</strong>
                            </p>

                            <p className="text-base text-gray-700 leading-loose mb-5">
                                With this intent, RDC was conceived to bridge advanced knowledge systems & grassroots realities, translating IIT Hyderabad’s strengths into meaningful on-ground impact for nearby villages while developing models scalable to rural regions across India.
                            </p>

                            <p className="text-base text-gray-700 leading-loose">
                                Currently, RDC operates across 3 interconnected thematic areas—<strong>Education, Environment, Entrepreneurship & also runs a Skill Development Center</strong> to create employment opportunities for peri-urban & rural communities.
                            </p>
                        </div>

                        {/* Right Cards */}
                        <div className="grid grid-cols-2 gap-4 pt-20">
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Education
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Enhancing access to quality education through academic support, mentoring, exposure programs, and capacity-building support for school students and youth from rural communities.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Environment
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Promoting environmental awareness and sustainable practices, with emphasis on water resources, sanitation, waste management, and natural resource conservation.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Entrepreneurship
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Supporting livelihood generation by encouraging local entrepreneurship, skill development, and grassroots innovation to strengthen rural and peri-urban economies.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    Skill Development Center
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Providing structured skill training and employment-oriented programs aimed at creating sustainable work opportunities, particularly for rural and peri-urban populations.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= INITIATIVES ================= */}
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        We Support
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {support.map((i, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                                <div className="px-3 pt-3">
                                    <img
                                        src={i.img}
                                        alt={i.title}
                                        className="h-60 w-full object-cover rounded-lg"
                                    />
                                </div>

                                <div className="p-4">
                                    <a
                                        href={i.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-lg font-bold text-blue-900 hover:underline group"
                                    >
                                        {i.title}
                                        <LinkIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-900" />
                                    </a>
                                    <p className="text-gray-700 mt-1 text-sm">{i.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;

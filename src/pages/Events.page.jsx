import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

/* ---------------- IMAGE ROW (TRUE CONTINUOUS) ---------------- */
const ImageRow = ({ images = [], slug, reverse = false }) => {
  if (!Array.isArray(images) || images.length === 0) return null

  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={14}
      loop
      loopAdditionalSlides={images.length * 2}
      freeMode={{
        enabled: true,
        momentum: false,
        sticky: false,
      }}
      speed={10000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      allowTouchMove={false}
      watchSlidesProgress={false}
      className="w-full"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx} style={{ width: '210px' }}>
          <img
            src={`/images/events/${slug}/${img.file}`}
            alt={img.title}
            title={img.title}
            className="h-36 w-full object-cover rounded-xl"
            loading="lazy"
            draggable={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

/* ---------------- COLLAGE ---------------- */
const EventImageCollage = ({ images = [], slug }) => {
  if (!Array.isArray(images) || images.length === 0) return null

  return (
    <div className="space-y-5">
      {/* TOP ROW → LEFT TO RIGHT */}
      <ImageRow images={images} slug={slug} />

      {/* BOTTOM ROW → RIGHT TO LEFT */}
      <ImageRow images={images} slug={slug} reverse />
    </div>
  )
}

/* ---------------- EVENTS PAGE ---------------- */
const Events = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState('all')

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setEvents(data.events || []))
      .catch(() => setEvents([]))
  }, [])

  const filteredEvents = selectedEvent === 'all'
    ? events
    : events.filter(event => event.slug === selectedEvent)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Events
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Outreach, education, and innovation initiatives by RDC
          </p>
        </div>

        {/* NAVIGATION SECTION */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedEvent('all')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${selectedEvent === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
            >
              All
            </button>
            {events.map(event => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event.slug)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${selectedEvent === event.slug
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>

        {/* EVENT CARDS */}
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg mb-20 overflow-hidden"
          >
            {/* NOT 50/50 — COLLAGE IS FIXED WIDTH */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 p-10">

              {/* LEFT: TEXT */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {event.title}
                </h2>

                <p className="text-blue-600 font-semibold mt-1">
                  {event.subtitle}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {event.dates}
                </p>

                <div className="mt-6 space-y-4">
                  {(event.description || []).map((para, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <a
                  href={`/gallery?event=${event.slug}`}
                  className="inline-flex items-center text-blue-600 font-semibold mt-6 hover:text-blue-700"
                >
                  View More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>

              {/* RIGHT: NARROWER COLLAGE (~2 IMAGES) */}
              <div className="max-w-[460px] w-full pl-4">
                <EventImageCollage
                  images={event.images}
                  slug={event.slug}
                />
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Events
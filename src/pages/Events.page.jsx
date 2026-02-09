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

/* ---------------- EVENT CARD ---------------- */
const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
      {/* Responsive Grid: stacks on mobile, 2-column on desktop */}
      <div className="grid lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-8 lg:p-10">

        {/* LEFT: TEXT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {event.title}
          </h2>

          <p className="text-blue-600 font-semibold mt-1 text-sm sm:text-base">
            {event.subtitle}
          </p>

          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            {(event.description || []).map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}
          </div>

          <a
            href={`/gallery?event=${event.slug}`}
            className="inline-flex items-center text-blue-600 font-semibold mt-4 sm:mt-6 hover:text-blue-700 text-sm sm:text-base"
          >
            View More
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* RIGHT: COLLAGE - Full width on mobile, fixed width on desktop */}
        <div className="w-full lg:w-115 overflow-hidden">
          <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {/* TOP ROW → LEFT TO RIGHT */}
            <ImageRow images={event.images} slug={event.slug} />

            {/* BOTTOM ROW → RIGHT TO LEFT */}
            <ImageRow images={event.images} slug={event.slug} reverse />
          </div>
        </div>

      </div>
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Events
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Outreach, education, and innovation initiatives by RDC
          </p>
        </div>

        {/* NAVIGATION SECTION */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedEvent('all')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm sm:text-base ${selectedEvent === 'all'
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
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm sm:text-base ${selectedEvent === event.slug
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
          <EventCard key={event.id} event={event} />
        ))}

      </div>
    </section>
  )
}

export default Events
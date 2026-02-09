import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Search,
  ArrowDownUp,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const ITEMS_PER_PAGE = 30
const SWIPE_THRESHOLD = 50

const EVENT_COLORS = {
  prerna: 'bg-blue-100 text-blue-700',
  deeksha: 'bg-green-100 text-green-700',
  srusti: 'bg-purple-100 text-purple-700',
}

// Sort Menu Component (DRY - reused for mobile and desktop)
const SortMenu = ({ showSortMenu, setShowSortMenu, setSortAsc, sortRef }) => (
  <div ref={sortRef} className="relative">
    <button
      onClick={() => setShowSortMenu(s => !s)}
      className="p-2 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center justify-center">
      <ArrowDownUp className="w-4 h-4 lg:w-5 lg:h-5" />
    </button>

    {showSortMenu && (
      <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 border border-gray-300 rounded-xl shadow-lg z-10 overflow-hidden">
        <button
          onClick={() => {
            setSortAsc(false)
            setShowSortMenu(false)
          }}
          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
          Recent to Old
        </button>

        <button
          onClick={() => {
            setSortAsc(true)
            setShowSortMenu(false)
          }}
          className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
          Old to Recent
        </button>
      </div>
    )}
  </div>
)

const Gallery = () => {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState('')
  const [searchParams] = useSearchParams()

  const defaultEvent = searchParams.get('event') || 'all'
  const [filter, setFilter] = useState(defaultEvent)

  // default: recent → old
  const [sortAsc, setSortAsc] = useState(false)

  const [page, setPage] = useState(1)
  const [showSortMenu, setShowSortMenu] = useState(false)
  const sortRef = useRef(null)

  /* lightbox */
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  /* ---------- CLOSE SORT MENU ON OUTSIDE CLICK ---------- */
  useEffect(() => {
    const handleClickOutside = e => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSortMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setEvents(data.events || []))
      .catch(() => setEvents([]))
  }, [])

  /* ---------------- FLATTEN IMAGES ---------------- */
  const images = useMemo(() => {
    return events.flatMap(event =>
      (event.images || []).map(img => ({
        ...img,
        eventTitle: event.title,
        slug: event.slug,
      }))
    )
  }, [events])

  /* ---------------- FILTER + SEARCH + SORT ---------------- */
  const processedImages = useMemo(() => {
    setPage(1)

    let result = images
      .filter(img => (filter === 'all' ? true : img.slug === filter))
      .filter(img =>
        img.title.toLowerCase().includes(search.toLowerCase())
      )

    result.sort((a, b) => {
      const aNum = parseInt(a.file)
      const bNum = parseInt(b.file)
      return sortAsc ? aNum - bNum : bNum - aNum
    })

    return result
  }, [images, filter, search, sortAsc])

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(processedImages.length / ITEMS_PER_PAGE)

  const paginatedImages = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE
    return processedImages.slice(start, start + ITEMS_PER_PAGE)
  }, [processedImages, page])

  /* ---------------- KEYBOARD NAV (LOOPING) ---------------- */
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = e => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight')
        setLightboxIndex(i => (i + 1) % processedImages.length)
      if (e.key === 'ArrowLeft')
        setLightboxIndex(
          i => (i - 1 + processedImages.length) % processedImages.length
        )
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, processedImages.length])

  /* ---------------- SWIPE HANDLERS ---------------- */
  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) < SWIPE_THRESHOLD) return

    if (delta > 0) {
      // swipe left → next
      setLightboxIndex(i => (i + 1) % processedImages.length)
    } else {
      // swipe right → prev
      setLightboxIndex(
        i => (i - 1 + processedImages.length) % processedImages.length
      )
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Gallery
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Moments captured from RDC events and outreach programs
          </p>
        </div>

        {/* CONTROLS*/}
        <div className="sticky top-22 z-10 bg-gray-50/60 backdrop-blur-sm flex justify-center p-2 rounded-xl border border-gray-100">
          <div className="flex lg:hidden flex-col items-center gap-3 w-full max-w-md">
            {/* SEARCH */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search images..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* FILTER + SORT */}
            <div className="flex items-center gap-3 w-full">
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm font-medium focus:ring-1 focus:ring-blue-500 focus:outline-none">
                <option value="all">All Events</option>
                <option value="prerna">Prerna</option>
                <option value="deeksha">Deeksha</option>
                <option value="srusti">Srusti</option>
              </select>

              <SortMenu 
                showSortMenu={showSortMenu}
                setShowSortMenu={setShowSortMenu}
                setSortAsc={setSortAsc}
                sortRef={sortRef}
              />
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex flex-row items-stretch gap-4">
            {/* SEARCH */}
            <div className="relative w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images by title..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* FILTER */}
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="w-56 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-800 font-medium focus:ring-1 focus:ring-blue-500 focus:outline-none">
              <option value="all">All Events</option>
              <option value="prerna">Prerna</option>
              <option value="deeksha">Deeksha</option>
              <option value="srusti">Srusti</option>
            </select>

            {/* SORT */}
            <SortMenu 
              showSortMenu={showSortMenu}
              setShowSortMenu={setShowSortMenu}
              setSortAsc={setSortAsc}
              sortRef={sortRef}
            />
          </div>

        </div>

        {/* ===== GALLERY ===== */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 pt-8 sm:pt-10 lg:pt-12 ">
          {paginatedImages.map((img, idx) => (
            <figure
              key={idx}
              onClick={() => setLightboxIndex((page - 1) * ITEMS_PER_PAGE + idx)}
              className="mb-4 sm:mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={`/images/events/${img.slug}/${img.file}`}
                  alt={img.title}
                  loading="lazy"
                  className="
                    w-full object-cover
                    transition-transform duration-500 ease-out
                    hover:scale-[1.04]
                  "
                />
              </div>

              <figcaption className="p-2.5 sm:p-3 space-y-1">
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  {img.title}
                </p>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded-full ${EVENT_COLORS[img.slug]}`}
                >
                  {img.eventTitle}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={e => (touchEndX.current = e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white cursor-pointer z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* PREVIOUS BUTTON */}
          <button
            className="absolute left-2 sm:left-6 text-white cursor-pointer z-10"
            onClick={() =>
              setLightboxIndex(
                i => (i - 1 + processedImages.length) % processedImages.length
              )
            }
          >
            <ChevronLeft className="w-8 h-8 sm:w-9 sm:h-9" />
          </button>

          {/* IMAGE & INFO */}
          <div className="text-center px-4 sm:px-6">
            <img
              src={`/images/events/${processedImages[lightboxIndex].slug}/${processedImages[lightboxIndex].file}`}
              alt={processedImages[lightboxIndex].title}
              className="max-h-[70vh] sm:max-h-[80vh] max-w-[90vw] sm:max-w-[92vw] object-contain mx-auto"
            />

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 text-white">
              <span
                className={`text-xs px-3 py-1 rounded-full ${EVENT_COLORS[processedImages[lightboxIndex].slug]}`}
              >
                {processedImages[lightboxIndex].eventTitle}
              </span>
              <span className="text-sm sm:text-base font-medium opacity-90">
                {processedImages[lightboxIndex].title}
              </span>
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            className="absolute right-2 sm:right-6 text-white cursor-pointer z-10"
            onClick={() =>
              setLightboxIndex(i => (i + 1) % processedImages.length)
            }
          >
            <ChevronRight className="w-8 h-8 sm:w-9 sm:h-9" />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
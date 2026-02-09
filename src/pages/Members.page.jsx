import React, { useEffect, useState } from 'react'
import MemberCard from '../components/MemberCard.component'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { History, User } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Members = () => {
  const [members, setMembers] = useState(null)
  const [showSlider, setShowSlider] = useState(false)

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setMembers(data.members))
      .catch(() => setMembers(null))
  }, [])

  if (!members) return null

  // Combine past chairpersons with current chairman
  const allChairpersons = [
    ...(members['past-chairpersons'] || []),
    members.chairman
  ]

  // Current chairman is at the last index
  const currentChairmanIndex = allChairpersons.length - 1

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Members
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet the Chairman, committee members, and staffs driving RDC initiatives
          </p>
        </div>

        {/* CHAIRMAN */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-center">
            Chairman
          </h3>

          {!showSlider ? (
            <>
              <div className="flex justify-center pb-8 sm:pb-10 lg:pb-12">
                <div className="w-full sm:w-1/2 lg:w-1/4">
                  <MemberCard {...members.chairman} />
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 flex justify-center">
                <button
                  onClick={() => setShowSlider(true)}
                  className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer"
                >
                  <History size={16} />
                  <span>Show Past Chairpersons</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  initialSlide={currentChairmanIndex}
                  centeredSlides={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 1,
                    },
                  }}
                  className="chairpersons-swiper"
                >
                  {allChairpersons.map((person, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="flex justify-center pb-8 sm:pb-10 lg:pb-12">
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                          <MemberCard {...person} />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <div className="mt-6 sm:mt-8 flex justify-center">
                <button
                  onClick={() => setShowSlider(false)}
                  className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium text-sm rounded-md transition-all duration-200 cursor-pointer"
                >
                  <User size={16} />
                  <span>Show Current Chairperson Only</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* PROFESSORS COMMITTEE */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-center">
            Professors Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {members.professors.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </div>
        </div>

        {/* PROJECT STAFF */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 lg:mb-10 text-center">
            Project Staff
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {members.staff.map((member, idx) => (
              <MemberCard key={idx} {...member} />
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .chairpersons-swiper :global(.swiper-button-next),
        .chairpersons-swiper :global(.swiper-button-prev) {
          color: #2563eb;
        }
        
        .chairpersons-swiper :global(.swiper-pagination-bullet-active) {
          background-color: #2563eb;
        }

        /* Mobile: smaller navigation buttons */
        @media (max-width: 640px) {
          .chairpersons-swiper :global(.swiper-button-next),
          .chairpersons-swiper :global(.swiper-button-prev) {
            width: 32px;
            height: 32px;
          }
          
          .chairpersons-swiper :global(.swiper-button-next):after,
          .chairpersons-swiper :global(.swiper-button-prev):after {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  )
}

export default Members
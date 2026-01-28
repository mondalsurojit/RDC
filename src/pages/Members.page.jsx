import React, { useEffect, useState } from 'react'
import MemberCard from '../components/MemberCard.component'

const Members = () => {
  const [members, setMembers] = useState(null)

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setMembers(data.members))
      .catch(() => setMembers(null))
  }, [])

  if (!members) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Members
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the faculty, committee members, and staff driving RDC initiatives
          </p>
        </div>

        {/* COMMITTEE MEMBERS */}
        <Section
          title="Committee Members"
          data={members.committee}
        />

        {/* PROFESSORS COMMITTEE */}
        <Section
          title="Professors Committee"
          data={members.professors}
        />

        {/* PROJECT STAFF */}
        <Section
          title="Project Staff"
          data={members.staff}
        />

      </div>
    </section>
  )
}

const Section = ({ title, data }) => (
  <div className="mb-20">
    <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
      {title}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((member, idx) => (
        <MemberCard key={idx} {...member} />
      ))}
    </div>
  </div>
)

export default Members

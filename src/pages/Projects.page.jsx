import React from 'react'

const Projects = () => {
  const initiatives = [
    {
      sl: 1,
      title: 'Education – Teaching activities in ZPHS schools',
      about:
        'We conduct regular classes for students of grades 7–10. These sessions help students improve their understanding of various subjects. Currently, teaching activities are happening in six ZPHS schools in Kandi Mandal.',
    },
    {
      sl: 2,
      title: 'Environment',
      about:
        'RDC in collaboration with United Way, Hyderabad is working to create awareness about proper waste management. The focus is on waste segregation and proper disposal.',
    },
    {
      sl: 3,
      title: 'Social Entrepreneurship in rural areas',
      about: '',
    },
  ]

  const projects = [
    {
      sl: 1,
      title: 'IOT enabled aquaculture monitoring system to assist the farmers',
      pi: 'Prof. Shiv Govind Singh (Dept. of Electrical Engineering)',
      copis: 'Dr. Abhinav Kumar (Dept. of Electrical Engineering)',
      duration: '2 years',
    },
    {
      sl: 2,
      title:
        'Development of a generic low cost device for detection of heavy metals in ground water sources.',
      pi: 'Dr. Sushmee Badhulika (Dept. of Electrical Engineering)',
      copis: '-',
      duration: '2 years',
    },
    {
      sl: 3,
      title:
        'Utilization of waste corn cobs for the production of furfural',
      pi: 'Prof. Sunil Kumar Maity (Dept. of Chemical Engineering)',
      copis: '-',
      duration: '2 years',
    },
    {
      sl: 4,
      title:
        'Improving Personal Health and Hygiene in Rural Schools through Interactive Installation',
      pi: 'Dr. Prasad S. Onkar (Dept. of Design)',
      copis:
        'Dr. Mahati Chittem (Dept. of Liberal Arts), Dr. Delwyn Jude Remedios (Dept. of Design)',
      duration: '2 years',
    },
    {
      sl: 5,
      title:
        'Kitchen / Poultry waste for defluoridation of drinking water',
      pi: 'Prof. Ch. Subrahmanyam (Dept. of Chemistry)',
      copis: 'T. Shashidhar (Dept. of Civil Engineering)',
      duration: '2 years',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Projects & Initiatives
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            About RDC projects, and rural upliftment initiatives
          </p>
        </div>

        {/* PROJECTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Projects
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white text-gray-800">
              <thead className="bg-blue-100 text-gray-900">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">
                    Sl. No.
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Title of the Project
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    PI&apos;s Name
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Co-PIs
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.sl} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      {project.sl}
                    </td>
                    <td className="border border-gray-300 p-3 font-medium">
                      {project.title}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {project.pi}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {project.copis}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {project.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* INITIATIVES */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Initiatives
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 bg-white text-gray-800">
              <thead className="bg-blue-100 text-gray-900">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">
                    Sl. No.
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Title
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    About the Project
                  </th>
                </tr>
              </thead>
              <tbody>
                {initiatives.map(item => (
                  <tr key={item.sl} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">
                      {item.sl}
                    </td>
                    <td className="border border-gray-300 p-3 font-medium">
                      {item.title}
                    </td>
                    <td className="border border-gray-300 p-3">
                      {item.about || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Projects

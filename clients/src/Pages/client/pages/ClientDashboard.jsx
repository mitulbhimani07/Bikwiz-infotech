import React from 'react'
import ClientSidebar from '../navbar/ClientSidbar'
import ClientHeader from '../navbar/ClientHeader'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Users, Bookmark, Eye, Edit } from 'lucide-react'

import post1 from '../../../../src/assets/images/FindWork/work1.png'
import post2 from '../../../../src/assets/images/FindWork/work2.png'
import post3 from '../../../../src/assets/images/FindWork/work3.png'
import post4 from '../../../../src/assets/images/FindWork/work7.png'
import post5 from '../../../../src/assets/images/FindWork/work4.png'
import ClientFooter from '../navbar/ClientFooter'

const chartData = [
  { name: '10 Jan', solid: 4, dotted: null },
  { name: '02 Mar', solid: 9, dotted: null },
  { name: '23 Apr', solid: 29, dotted: null },
  { name: '13 Jun', solid: 20, dotted: null },
  { name: '04 Aug', solid: 22, dotted: null },
  { name: '15 Nov', solid: 12, dotted: null },
  { name: '06 Jan', solid: 7, dotted: 7 },
  { name: '27 Feb', solid: null, dotted: 5 },
  { name: '20 Apr', solid: null, dotted: 14 },
  { name: '10 May', solid: null, dotted: 9 }
]

function ClientDashboard() {
  const postedJobs = [
    { id: 1, title: "Product Manager", company: "Fulltime, Spotify", logo: post1, bgColor: "bg-green-100" },
    { id: 2, title: "Software Engineer", company: "Parttime, Dribbble", logo: post2, bgColor: "bg-pink-100" },
    { id: 3, title: "Product Manager", company: "Fulltime, TechCorp", logo: post3, bgColor: "bg-blue-100" },
    { id: 4, title: "Product Designer", company: "Parttime, UIUX", logo: post4, bgColor: "bg-gray-100" },
    { id: 5, title: "Marketing Specialist", company: "Parttime, Starbucks", logo: post5, bgColor: "bg-green-100" }
  ]

  const stats = [
    { icon: Users, number: "07", label: "Posted Job", bgColor: "bg-white", iconColor: "text-orange-500" },
    { icon: Bookmark, number: "03", label: "Shortlisted", bgColor: "bg-white", iconColor: "text-orange-500" },
    { icon: Eye, number: "1.7k", label: "Application", bgColor: "bg-white", iconColor: "text-orange-500" },
    { icon: Edit, number: "04", label: "Save Candidate", bgColor: "bg-white", iconColor: "text-orange-500" }
  ]

  return (
    <div className="flex  overflow-hidden bg-[#fff0e5]">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10">
          <ClientHeader />
        </div>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-orange-500 mb-6">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 flex items-center space-x-4 justify-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <IconComponent className="text-orange-500" size={20} />
                  </div>
                  <div className="ps-4">
                    <h3 className="text-2xl font-bold text-orange-500">{stat.number}</h3>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Grid: Posted Jobs + Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Posted Jobs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-medium text-orange-400 mb-4">Posted Job</h2>
              <hr className="border-gray-200" />
              <div className="space-y-4 mt-4">
                {postedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg ${job.bgColor} flex items-center justify-center`}>
                        <img src={job.logo} alt="" className="w-6 h-6" />
                      </div>
                      <div className="ps-3">
                        <h3 className="font-medium text-orange-400 text-md mb-1">{job.title}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Views Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-orange-400 text-2xl mb-4 font-medium">Job Views</h3>
              <hr className="border-gray-200" />
              <div className="flex items-center justify-between mb-6 ps-4 pe-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1 mt-4">Job Statistics</h2>
                  <p className="text-sm text-gray-500">Showing Job Statistic May 19-25</p>
                </div>
                <div className="flex bg-orange-50 rounded-lg p-1">
                  <button className="px-4 py-2 bg-white text-orange-500 rounded-md text-sm font-medium">Week</button>
                  <button className="px-4 py-2 text-orange-400 rounded-md text-sm">Month</button>
                  <button className="px-4 py-2 text-orange-400 rounded-md text-sm">Year</button>
                </div>
              </div>

              {/* Chart */}
              <div className="h-64 lg:h-100">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid horizontal={true} vertical={false} stroke="#E5E7EB" strokeWidth={1} />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={true}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      height={30}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      domain={[-10, 40]}
                      ticks={[-10, -5,0,5, 10,15, 20,25, 30,35, 40]}
                    />
                    <Line
                      type="monotone"
                      dataKey="solid"
                      stroke="#F97316"
                      strokeWidth={4}
                      dot={false}
                      connectNulls={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="dotted"
                      stroke="#F97316"
                      strokeWidth={4}
                      strokeDasharray="8 8"
                      dot={{ fill: '#F97316', strokeWidth: 0, r: 4 }}
                      connectNulls={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>

        <ClientFooter/>
      </div>
      
    </div>
  )
}

export default ClientDashboard

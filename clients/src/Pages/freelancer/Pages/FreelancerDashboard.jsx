import React from 'react'
import FreelancerSidbar from '../Navbar/FreelancerSidbar'
import FreelancerHeader from '../Navbar/FreelancerHeader'
import ClientFooter from '../../client/navbar/ClientFooter'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, Bookmark, Eye, Edit } from 'lucide-react'

import post1 from '../../../../src/assets/images/FindWork/work1.png'
import post2 from '../../../../src/assets/images/FindWork/work2.png'
import post3 from '../../../../src/assets/images/FindWork/work3.png'
import post4 from '../../../../src/assets/images/FindWork/work7.png'
import post5 from '../../../../src/assets/images/FindWork/work4.png'

 const pieData = [
    { name: 'Unsuitable', value: 60, color: '#F97316' },
    { name: 'Interviewed', value: 40, color: '#FDBA74' }
  ];

function FreelancerDashboard() {

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
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
      <div className="  lg:block lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:flex-shrink-0">
              <FreelancerSidbar />
            </div>


             <div className="flex flex-col flex-1 min-w-0">
                    {/* Header */}
                    <div className="sticky top-0 z-10">
                      <FreelancerHeader />
                    </div>

                   <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
                             {/* Page Title */}
                             <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">Dashboard</h1>
                   
                             {/* Stat Cards */}
                             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                               {stats.map((stat, index) => {
                                 const IconComponent = stat.icon
                                 return (
                                   <div
                                     key={index}
                                     className="bg-white rounded-2xl p-4 sm:p-6 flex items-center space-x-4 shadow-sm"
                                   >
                                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                       <IconComponent className="text-orange-500" size={20} />
                                     </div>
                                     <div className="ps-2 sm:ps-4">
                                       <h3 className="text-xl sm:text-2xl font-bold text-orange-500">{stat.number}</h3>
                                       <p className="text-sm text-gray-400">{stat.label}</p>
                                     </div>
                                   </div>
                                 )
                               })}
                             </div>
                   
                             {/* Jobs + Chart */}
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                               {/* Posted Jobs */}
                               <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
                                 <h2 className="text-xl sm:text-2xl font-medium text-orange-400 mb-4">Posted Job</h2>
                                 <hr className="border-gray-200" />
                                 <div className="space-y-4 mt-4">
                                   {postedJobs.map((job) => (
                                     <div
                                       key={job.id}
                                       className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                     >
                                       <div className="flex items-center space-x-3">
                                         <div className={`w-10 h-10 rounded-lg ${job.bgColor} flex items-center justify-center`}>
                                           <img src={job.logo} alt={job.title} className="w-6 h-6" />
                                         </div>
                                         <div className="ps-2">
                                           <h3 className="font-medium text-orange-400 text-sm sm:text-md mb-1 truncate">
                                             {job.title}
                                           </h3>
                                           <p className="text-xs sm:text-sm text-gray-500">{job.company}</p>
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
                   
                               {/* Chart Section */}
                               <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
           <h1 className="text-2xl font-medium text-orange-500 mb-6">Jobs Applied Status</h1>
          <hr className="border-gray-200 mb-4" />
          
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-orange-500 mb-6">Job statistics</h1>
            <p className="text-sm text-gray-500">Showing Job Statistic May 19-25</p>
          </div>

          <div className="flex bg-orange-50 rounded-lg p-1 mb-6 w-fit">
            <button className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-orange-500 rounded-md text-sm font-medium shadow-sm">Week</button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 text-orange-400 rounded-md text-sm">Month</button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 text-orange-400 rounded-md text-sm">Year</button>
          </div>

          {/* Pie Chart */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            
            {/* Legend */}
            <div className="mt-4 space-y-3">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-gray-800">{entry.value}%</div>
                    <div className="text-sm text-gray-500">{entry.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
                             </div>
                           </main>
                      <ClientFooter/>
                  </div>
    </div>
  )
}

export default FreelancerDashboard
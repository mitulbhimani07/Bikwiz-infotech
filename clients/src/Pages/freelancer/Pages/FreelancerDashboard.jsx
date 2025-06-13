import React from 'react'
import FreelancerSidbar from '../Navbar/FreelancerSidbar'
import FreelancerHeader from '../Navbar/FreelancerHeader'
import ClientFooter from '../../client/navbar/ClientFooter'

function FreelancerDashboard() {
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

                        <h1>Dashboard</h1>
                    </main>
                      <ClientFooter/>
                  </div>
    </div>
  )
}

export default FreelancerDashboard
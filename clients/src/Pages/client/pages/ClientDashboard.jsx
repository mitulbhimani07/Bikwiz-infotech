import React from 'react'
import ClientSidbar from '../navbar/ClientSidbar'
import ClientHeader from '../navbar/ClientHeader'
function ClientDashboard() {
  return (
    <div>
      <div className="flex">
        <ClientSidbar />
      <ClientHeader />
      </div>
    </div>
  )
}

export default ClientDashboard
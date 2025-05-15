import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SMEConnection() {
  const [selected, setSelected] = useState('')
  const navigate=useNavigate()
  console.log("selected",selected)

  const handleNext =()=>{
    navigate(`/signup?selected=${selected}`);
  }

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      {/* Header with logo */}
      <div className="mb-12 ms-12">
        <h1 className="text-xl text-gray-800">Bikwiz Infotech</h1>
      </div>

      {/* Main content */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-900 mb-10">Join as a client or freelancer</h2>
        
        {/* Selection cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
          {/* Expert card */}
          <div 
            className={`border rounded-lg px-20 py-10 flex flex-col items-center cursor-pointer transition relative ${
              selected === 'client' ? 'border-[#F54900] shadow-md' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelected('client')}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F54900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-2">I'm a client, hiring for a project</h3>
            <p className="text-xl text-gray-900">offering services</p>
            
            {/* Selection circle */}
            <div className="absolute top-4 right-4 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              {selected === 'client' && <div className="w-4 h-4 bg-[#F54900] rounded-full"></div>}
            </div>
          </div>
          
          {/* Business card */}
          <div 
            className={`border rounded-lg px-20 py-10 flex flex-col items-center cursor-pointer transition relative ${
              selected === 'freelencer' ? 'border-[#F54900] shadow-md' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelected('freelencer')}
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-[#F54900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 21C20 17.13 16.42 14 12 14C7.58 14 4 17.13 4 21" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-light text-gray-900 mb-2">I'm a freelancer, looking for work</h3>
            <p className="text-xl text-gray-900">looking for expertise</p>
            
            {/* Selection circle */}
            <div className="absolute top-4 right-4 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
              {selected === 'freelencer' && <div className="w-4 h-4 bg-[#F54900] rounded-full"></div>}
            </div>
          </div>
        </div>
        
        {/* Create Account button */}
        <button 
          className={`px-6 py-3 rounded-md font-medium text-lg transition ${
            selected ? 'bg-[#F54900] text-white hover:bg-orange-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!selected}
          onClick={handleNext}
        >
          
            Create Account
         
        </button>
        
        {/* Login link */}
        <div className="mt-6 text-gray-700">
          Already have an account? 
          <a href="#" className="text-[#F54900] font-medium ml-2 hover:underline">Log In</a>
        </div>
      </div>
    </div>
  )
}
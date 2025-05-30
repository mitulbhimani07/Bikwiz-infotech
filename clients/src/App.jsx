import { useState } from 'react'

import './App.css'
import Header from './header-footer/Header'
import AllRoutes from './AllRoutes'
import Footer from './header-footer/Footer'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import { CloudSnowIcon, X } from 'lucide-react'; // or use any icon

function App() {

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App

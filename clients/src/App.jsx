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
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  toastOptions={{
    duration: 4000,
    removeDelay: 1000,
    style: {
      background: 'white',
      color: 'black',
      width: 'auto',
      padding: '10px 12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      borderRadius: '8px',
    },
    success: {
      iconTheme: {
        primary: 'green',
        secondary: 'white',
      },
    },
    error: {
      iconTheme: {
        primary: 'red',
        secondary: 'white',
      },
    },
    // Custom render to show close button
    render: (t) => (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <div>{t.message}</div>
        <button
          style={{
            marginLeft: '16px',
            background: 'transparent',
            border: 'none',
            color: 'black',
            cursor: 'pointer',
          }}
          onClick={() => toast.dismiss(t.id)}
        >
          <CloudSnowIcon/>
        </button>
      </div>
    )
  }}
/>
    </>
  )
}

export default App

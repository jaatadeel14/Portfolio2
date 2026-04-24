import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden bg-stone-50 text-stone-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute -left-1/4 top-0 h-[520px] w-[80%] rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
          <div className="absolute -right-1/4 top-1/3 h-[480px] w-[70%] rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/8" />
          <div className="absolute bottom-0 left-1/2 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <Navbar />
        <main>
          <Home />
          <About />
          <Portfolio />
          <Experiance />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgb(15 23 42)',
            color: '#f1f5f9',
            border: '1px solid rgb(30 41 59)',
            borderRadius: '12px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#34d399',
              secondary: '#0f172a',
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: '#f87171',
              secondary: '#0f172a',
            },
          },
        }}
      />
    </>
  )
}

export default App

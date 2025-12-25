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
   <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
   <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
   </div>
   <Toaster 
     position="top-right"
     toastOptions={{
       duration: 3000,
       style: {
         background: '#363636',
         color: '#fff',
       },
       success: {
         duration: 3000,
         iconTheme: {
           primary: '#22c55e',
           secondary: '#fff',
         },
       },
       error: {
         duration: 3000,
         iconTheme: {
           primary: '#ef4444',
           secondary: '#fff',
         },
       },
     }}
   />

    </>
  )
}

export default App

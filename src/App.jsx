import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Scope from './pages/Scope'
import Milestones from './pages/Milestones'
import Risks from './pages/Risks'
import Team from './pages/Team'

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="p-6"
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <nav className="bg-blue-700 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-10">
        <ul className="flex justify-center gap-6 text-lg font-medium">
          <li><Link to="/" className="hover:underline">🏠 Home</Link></li>
          <li><Link to="/scope" className="hover:underline">📋 Scope</Link></li>
          <li><Link to="/milestones" className="hover:underline">🧱 Milestones</Link></li>
          <li><Link to="/risks" className="hover:underline">⚠️ Risks</Link></li>
          <li><Link to="/team" className="hover:underline">👥 Team</Link></li>
        </ul>
      </nav>
      <div className="pt-24 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/scope" element={<AnimatedPage><Scope /></AnimatedPage>} />
            <Route path="/milestones" element={<AnimatedPage><Milestones /></AnimatedPage>} />
            <Route path="/risks" element={<AnimatedPage><Risks /></AnimatedPage>} />
            <Route path="/team" element={<AnimatedPage><Team /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Scope from './pages/Scope'
import Milestones from './pages/Milestones'
import Risks from './pages/Risks'
import Team from './pages/Team'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-blue-600 text-white p-4 shadow">
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">🏠 Home</Link></li>
          <li><Link to="/scope" className="hover:underline">📋 Scope</Link></li>
          <li><Link to="/milestones" className="hover:underline">🧱 Milestones</Link></li>
          <li><Link to="/risks" className="hover:underline">⚠️ Risks</Link></li>
          <li><Link to="/team" className="hover:underline">👥 Team</Link></li>
        </ul>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </div>
  )
}

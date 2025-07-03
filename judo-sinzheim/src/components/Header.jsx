import { Link } from "react-router-dom"
import React from "react"

export default function Header() {
  return (

    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Judo Sinzheim
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Start</Link>
          <Link to="/training" className="text-gray-700 hover:text-blue-600">Training</Link>
          <Link to="/probetraining" className="text-gray-700 hover:text-blue-600">Probetraining</Link>
          <Link to="/UnserVerein" className="text-gray-700 hover:text-blue-600">Unser Verein</Link>
          <Link to="/kontakt" className="text-gray-700 hover:text-blue-600"> Kontakt & Anfahrt </Link>
        </div>
      </nav>
    </header>

  )
}
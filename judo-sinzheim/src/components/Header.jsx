import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          <img src="src\assets\Logo\DeSo Logo 64px.svg" alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Start</Link>
          <Link to="/training" className="text-gray-700 hover:text-blue-600">Training</Link>
          <Link to="/probetraining" className="text-gray-700 hover:text-blue-600">Probetraining</Link>
          <Link to="/UnserVerein" className="text-gray-700 hover:text-blue-600">Unser Verein</Link>
          <Link to="/kontakt" className="text-gray-700 hover:text-blue-600">Kontakt & Anfahrt</Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-blue-700" /> : <Menu className="w-6 h-6 text-blue-700" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col items-center">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Start</Link>
          <Link to="/training" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Training</Link>
          <Link to="/probetraining" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Probetraining</Link>
          <Link to="/UnserVerein" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Unser Verein</Link>
          <Link to="/kontakt" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Kontakt & Anfahrt</Link>
        </div>
      )}
    </header>
  );
}

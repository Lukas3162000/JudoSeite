import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F9F3EC] shadow sticky top-0 z-100 ">

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link to="/">
          <img src="src\assets\Logo\DeSo Logo 64px.svg" alt="Logo_Judo_Club_Sinzheim" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 font-regular text-xl" >
          <Link to="/" className="hover-underline text-[#0F1B20] hover:text-[#C22B26] ">Start</Link>
          <Link to="/training" className="hover-underline text-[#0F1B20] hover:text-[#C22B26]">Training</Link>
          <Link to="/probetraining" className="hover-underline text-[#0F1B20] hover:text-[#C22B26]">Probetraining</Link>
          <Link to="/UnserVerein" className="hover-underline text-[#0F1B20] hover:text-[#C22B26]">Unser Verein</Link>
          <Link to="/kontakt" className="hover-underline text-[#0F1B20] hover:text-[#C22B26]">Kontakt & Anfahrt</Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-[#C22B26]" /> : <Menu className="w-6 h-6 text-[#0F1B20]" />}
          </button>
        </div>
      </nav>


      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-8 space-y-2 flex flex-col items-center text-xl">
          <Link to="/" className="block text-[#0F1B20] hover:text-[#C22B26]" onClick={() => setIsOpen(false)}>Start</Link>
          <Link to="/training" className="block text-[#0F1B20] hover:text-[#C22B26]" onClick={() => setIsOpen(false)}>Training</Link>
          <Link to="/probetraining" className="block text-[#0F1B20] hover:text-[#C22B26]" onClick={() => setIsOpen(false)}>Probetraining</Link>
          <Link to="/UnserVerein" className="block text-[#0F1B20] hover:text-[#C22B26]" onClick={() => setIsOpen(false)}>Unser Verein</Link>
          <Link to="/kontakt" className="block text-[#0F1B20] hover:text-[#C22B26]" onClick={() => setIsOpen(false)}>Kontakt & Anfahrt</Link>
        </div>
      )}

      
    </header>
  );
}

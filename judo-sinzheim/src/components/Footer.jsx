import React from "react";
import { Facebook, Instagram } from "lucide-react";
import FranzGraf from "../assets/Sponsors/FranzGraf.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-sm pt-10 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">

        {/* Top Row: Info & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm mb-2">© 2025 Judo-Club Sinzheim</p>
            <div className="space-x-4">
              <a href="#/legal/impressum" className="underline">Impressum</a>
              <a href="#/legal/datenschutz" className="underline">Datenschutz</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100054365507488"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C22B26]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/judo_club_sinzheim/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C22B26]"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Verbands-Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <p className="mb-2">Zertifizierter Verein im Deutschen Judo-Bund e.V.</p>
            <a
              href="https://www.judobund.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.judo-sinzheim.de/Bilder/2016/DJB_Zertifikat_Button_2019.png"
                alt="DJB Zertifikat"
                width={80}
                height={80}
              />
            </a>
          </div>
          <div className="text-center">
            <p className="mb-2">Mitglied im Badischen Judo Verband e.V.</p>
            <a
              href="http://www.badischer-judo-verband.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.judo-sinzheim.de/Bilder/2016/bjv.png"
                alt="BJV Logo"
                width={80}
                height={80}
              />
            </a>
          </div>
        </div>

        {/* Sponsoren */}
        <div className="text-center">
          <p className="font-semibold mb-4">Ein ganz großes Dankeschön unseren Unterstützern:</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a href="https://www.schoeck.de/de/home" target="_blank" rel="noopener noreferrer">
              <img src="https://www.judo-sinzheim.de/start-Dateien/Logo_Schoeck_DE_2017_RGB.jpg" alt="Schöck" className="h-16" />
            </a>
            <a href="https://www.n-komm.de" target="_blank" rel="noopener noreferrer">
              <img src="https://judo-sinzheim.de/Bilder/2016/image004.png" alt="n-komm" className="h-16" />
            </a>
            <a href="https://www.judo-sinzheim.de/pflegeseiert.htm" target="_blank" rel="noopener noreferrer">
              <img src="https://www.judo-sinzheim.de/start-Dateien/image006.png" alt="Pflegeseiert" className="h-16" />
            </a>
            <a href="https://www.haarscharf-buehl.de" target="_blank" rel="noopener noreferrer">
              <img src="https://www.judo-sinzheim.de/start-Dateien/image008.png" alt="Haarscharf" className="h-16" />
            </a>
            <Link to="/sponsors/franz-graf">
              <img src={FranzGraf} alt="Franz Graf" className="h-16" />
            </Link>
            <a href="https://www.gerstenmaier.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.judo-sinzheim.de/start-Dateien/image012.png" alt="Gerstenmaier" className="h-16" />
            </a>
            <a href="https://www.ek-architekten.de/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.judo-sinzheim.de/start-Dateien/image014.png" alt="EK Architekten" className="h-16" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

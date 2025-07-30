import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

import FranzGraf from "../assets/Sponsors/FranzGraf.svg";
import FranzGrafLogo from "../assets/Sponsors/white/Franz_Graf_white.svg"
import gerstemaierBauschatzLogo from "../assets/Sponsors/white/gerstemaier_bauschatz_white.svg"
import HaarscharfLogo from "../assets/Sponsors/white/Haarscharf_white.svg"
import nKommLogo from "../assets/Sponsors/white/n-komm_white.svg"
import PflegeSeiertLogo from "../assets/Sponsors/white/Pflege_Seiert_white.svg"
import schoeckLogo from "../assets/Sponsors/white/schoeck_white.svg"

import BJVLogo from "../assets/SVGs/BJV_white.svg"

export default function Footer() {
  return (
    <footer className="bg-[#0F1B20] text-white text-sm pt-10 pb-6 mt-12">
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
          <div className="text-center ">
            <p className="mb-2 ">Zertifizierter Verein im Deutschen Judo-Bund e.V.</p>
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
                className="mx-auto"
              />
            </a>
          </div>

          <div className="text-center ">
            <p className="mb-2 ">Mitglied im Badischen Judo Verband e.V.</p>
            <a
              href="http://www.badischer-judo-verband.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={BJVLogo}
                alt="BJV Logo"
                width={200}
                className="mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Sponsoren */}
        <div className="text-center">
          <p className="font-semibold mb-4 ">Ein ganz großes Dankeschön unseren Unterstützern:</p>
          <div className="flex flex-wrap justify-center gap-10 items-center">

            <Link to="/sponsors/ambulante-pflege-seiert">
              <img src={PflegeSeiertLogo} alt="Ambulante Pflege Seiert" className="h-16" />
            </Link>

            <Link to="/sponsors/haarscharf-buehl">
              <img src={HaarscharfLogo} alt="Haarscharf Friseursalon Logo" className="h-16" />
            </Link>

            <Link to="/sponsors/n-komm">
              <img src={nKommLogo} alt="n-komm" className="h-16" />
            </Link>

            <Link to="/sponsors/schoeck-bauteile">
              <img src={schoeckLogo} alt="Schoeck GmbH" className="h-16" />
            </Link>

            <Link to="/sponsors/franz-graf">
              <img src={FranzGraf} alt="Franz Graf" className="h-16" />
            </Link>

            <Link to="/sponsors/gerstenmaier-bauschatz">
              <img src={gerstemaierBauschatzLogo} alt="Gerstenmaier-Bauschatz-logo" className="h-16" />
            </Link>


          </div>

        </div>

      </div>
    </footer>
  );
}

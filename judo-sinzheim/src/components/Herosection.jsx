import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
<div className="relative bg-[#0F1B20] overflow-hidden py-16">
  {/* Top Right Background Graphic */}
  <img
    src="src/assets/top_Left.svg"
    alt="Top Right Graphic"
    className="absolute top-0 right-0 w-120 z-0 pointer-events-none"
  />

  {/* Bottom Left Background Graphic */}
  <img
    src="src/assets/bottom_right.svg"
    alt="Bottom Left Graphic"
    className="absolute bottom-0 left-0 w-120 z-0 pointer-events-none"
  />

  {/* Hero Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
    
    {/* Text Content */}
    <div className="max-w-xl text-white space-y-12">
      <h1 className="text-6xl font-bold ">JC SINZHEIM e.V.</h1>
      <p className="text-2xl font-light text-white">
        Unser Verein bietet ein sicheres, sportliches Umfeld für Anfänger:innen und Fortgeschrittene – jetzt Probetraining vereinbaren!
      </p>
      <div className="flex gap-4 flex-col md:flex-row items-center">

        <Link to="/Training">
         <button className="bg-[#C22B26] hover:scale-105 ease-in-out duration-300 cursor-pointer text-white px-12 border-2 border-color-white py-2 rounded-full font-semibold">Training</button>
        </Link>

        <Link to="/Kontakt">
          <button className="border cursor-pointer hover:scale-105 ease-in-out duration-300 border-white text-white px-4 py-2 rounded-full font-semibold">Kontakt & Anfahrt</button>
        </Link>
      </div>
      
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <img
        src="src/assets/Hero Graphic JC sinzhiem.png"
        alt="Gruppe"
        className="row-span-2 h-[300px] object-contain"
      />
      <img
        src="src/assets/Hero Graphic JC sinzhiem_small.png"
        alt="Kämpfer"
        className="h-[140px] object-contain"
      />
      <img
        src="src/assets/Hero Graphic JC sinzhiem_medium.png"
        alt="Mitte"
        className="col-span-1 self-start justify-self-center h-[200px] object-contain"
      />
    </div>
  </div>
</div>



    </>
    

  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestHeroVideo from "../assets/Video/TestHeroVideo.mp4";
import TestHeroVideoMobile from "../assets/Video/TestHeroVideoMobile.mp4";



export default function HeroSection() {

  const [isMobileRation,setIsMobileRatio] = useState(false);

  useEffect(() => {
    const checkAspectRatio = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setIsMobileRatio(ratio < 0.8);
    };
    checkAspectRatio();
    window.addEventListener("resize", checkAspectRatio);
    return () => window.removeEventListener("resize",checkAspectRatio);
  }, [])


  return (
    <>
<div className="relative overflow-hidden py-16">

      {/* Video-Hintergrund */}
      {isMobileRation ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          src={TestHeroVideoMobile}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          src={TestHeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />


    

  {/* Top Right Background Graphic */}
  
  <img
    src="src/assets/top_Left.svg"
    alt="Top Right Graphic"
    className="absolute top-0 right-0 w-120 z-11  opacity-0 animate-fade-slide-in-right"
  />

  {/* Bottom Left Background Graphic */}
  <img
    src="src/assets/bottom_right.svg"
    alt="Bottom Left Graphic"
    className="absolute bottom-0 left-0 w-120 z-11 opacity-0 animate-fade-slide-in-left"
  />

  {/* Hero Content */}
  <div className="relative z-12 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
    
    {/* Text Content */}
    <div className="max-w-xl text-white space-y-12">
      <h1 className="text-4xl sm:text-6xl font-bold ">JC SINZHEIM e.V.</h1>
      <p className="text-xl sm:text-2xl font-light text-white">
        Unser Verein bietet ein sicheres, sportliches Umfeld für Anfänger:innen und Fortgeschrittene – jetzt Probetraining vereinbaren!
      </p>

      <div className="flex gap-4 flex-col md:flex-row items-center w-full">


        <Link to="/Training">
         <button className="bg-[#C22B26] hover:bg-[#FF3B35] w-[50vw] md:w-[300px] w-1/2 hover:scale-105 ease-in-out duration-300 cursor-pointer text-white px-12 border-color-white py-2 rounded-full font-semibold">Training</button>
        </Link>

        <Link to="/Kontakt">
          <button className=" hover:bg-[#E0E0E0] w-[50vw] md:w-[300px] cursor-pointer hover:scale-105 ease-in-out duration-300 border-black bg-white text-black px-4 py-2 rounded-full font-semibold">Kontakt & Anfahrt</button>
        </Link>


      </div>
      
    </div>


      {/* Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 hidden lg:grid">
        <img
          src="src/assets/Hero Graphic JC sinzhiem.png"
          alt="Gruppe"
          className="row-span-2 h-[300px] object-contain opacity-0 animate-fade-slide-in-right delay-500"
        />
        <img
          src="src/assets/Hero Graphic JC sinzhiem_small.png "
          alt="Kämpfer"
          className="h-[140px] object-contain opacity-0 animate-fade-slide-in-right delay-1200"
        />
        <img
          src="src/assets/Hero Graphic JC sinzhiem_medium.png"
          alt="Mitte"
          className="col-span-1 self-start justify-self-center h-[200px] object-contain opacity-0 animate-fade-slide-in-right delay-1800"
        />
      </div>
    
   

  </div>
</div>



    </>
    

  );
}

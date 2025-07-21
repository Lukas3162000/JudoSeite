import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TestHeroVideo from "../assets/Video/TestHeroVideo.mp4";

export default function SmallHeroSection({Title, subline, backgroundVideo }) {
  const videoSrc = backgroundVideo || TestHeroVideo;

  return (
    <>




      <div className="relative bg-[#0F1B20] overflow-hidden flex py-16">
        {/* Top Right Background Graphic */}
        <img
          src="src/assets/top_Left.svg"
          alt="Top Right Graphic"
          className="absolute top-0 right-0 w-120 z-2 opacity-0 animate-fade-slide-in-right"
        />

        {/* Bottom Left Background Graphic */}
   
          <img
            src="src/assets/bottom_right.svg"
            alt="Bottom Left Graphic"
            className="absolute top-[170px] sm:top-[45px] left-0 w-120 z-2 opacity-0 animate-fade-slide-in-left"
          />
   
        {/* Background-Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
            
      
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1" />


        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">

          
          
          {/* Text Content */}
          <div className="max-w-xl text-white flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl font-bold ">{Title}</h1>
            <p className="text-xl sm:text-2xl font-light text-white">
              {subline}
            </p>
            <div className="flex gap-4 flex-col md:flex-row items-center">
            </div>
            
          </div>

        </div>
      </div>
    </>
  );
}

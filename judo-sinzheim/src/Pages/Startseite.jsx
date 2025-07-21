import React from 'react'
import HeroSection from '../components/Herosection'
import NewsSection from '../components/NewsSection'
import { Link } from 'react-router-dom'

export default function Startseite() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Trainingsangebot */}
      <section className="pt-8 pb-4 px-4 max-w-4xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row gap-6 items-center">
          {/* Bildplatzhalter */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-60 rounded-xl flex items-center justify-center text-gray-500">
              Bild Trainingsangebot
            </div>
          </div>

          {/* Textinhalt */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4">

            <div>
              <h3 className="text-m font-semibold text-[#C22B26] mb-1">Judo in Sinzheim</h3>
              <h2 className="text-2xl font-semibold ">Unser Training</h2>
            </div>

            <p className="text-gray-700">
              Vom Anfänger bis zum Fortgeschrittenen – unser Trainingsplan bietet Judo für alle Altersklassen. Mit altersgerechten Gruppen fördern wir Technik, Fairness und Spaß am Sport.
            </p>
            
            <Link to="/Training">
              <button className="bg-[#C22B26]  hover:bg-[#FF3B35] hover:scale-105 ease-in-out duration-300 cursor-pointer text-white px-12 py-2 rounded-full font-semibold">Zu den Trainingszeiten</button>
            </Link>

          </div>
        </div>
      </section>

      {/* Unser Verein */}
      <section className="py-2 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row-reverse gap-6 items-center">
          
          {/* Bildplatzhalter */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-60 rounded-xl flex items-center justify-center text-gray-500">
              Bild Unser Verein
            </div>

      

          </div>

          {/* Textinhalt */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4">

            <div >
              <h3 className="text-m font-semibold text-[#C22B26] mb-1 ">Unser Verein</h3>
              <h2 className="text-2xl font-semibold ">Judo Club Sinzheim e.V.</h2>
            </div>


            <p className="text-gray-700">
              Der JC Sinzheim e.V. blickt auf eine lange Judotradition zurück. Wir stehen für Gemeinschaft, Engagement und sportliche Entwicklung in einem familiären Umfeld.
            </p>
            <Link to="/UnserVerein">
              <button className="bg-[#C22B26] hover:bg-[#FF3B35] hover:scale-105 ease-in-out duration-300 cursor-pointer text-white px-12 py-2 rounded-full font-semibold">Mehr zum Verein</button>
            </Link>  
          </div>
          
        </div>
      </section>

      {/* News Scroller */}
      <section>
        <NewsSection />
      </section>
    </>
  )
}

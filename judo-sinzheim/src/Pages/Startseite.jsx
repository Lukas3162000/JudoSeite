import { useState } from 'react'
import React from 'react'
import HeroSection from '../components/Herosection'
import NewsScroller from '../components/newsSection'

export default function Startseite() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Was uns ausmacht */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Was uns ausmacht</h2>
          <p className="text-gray-700">
            Der Judo-Club Sinzheim steht für respektvollen Umgang, Teamgeist und Freude an Bewegung. Unser Training richtet sich an Kinder ab 6 Jahren, Jugendliche und Erwachsene – egal ob Anfänger:in oder mit Erfahrung.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Dein Kontakt</h2>
            <p className="text-gray-800 font-medium">Max Mustermann</p>
            <p className="text-gray-600 mb-2">Ansprechpartner Probetraining</p>
            <a href="mailto:kontakt@judo-sinzheim.de" className="text-[#C22B26] underline">
              kontakt@judo-sinzheim.de
            </a>
          </div>
        </div>
      </section>

      {/* News Scroller */}
      <section>
        <NewsScroller />
      </section>

    </>
  )
}

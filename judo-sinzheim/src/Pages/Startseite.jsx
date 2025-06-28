import { useState } from 'react'
import React from 'react'

export default function Startseite() {

  return (
    <>
      <section className="text-center py-12 px-4 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Judo in Sinzheim – für Kinder & Erwachsene
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Unser Verein bietet ein sicheres, sportliches Umfeld für Anfänger:innen und Fortgeschrittene – jetzt Probetraining vereinbaren!
        </p>
        <a
          href="#/probetraining"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Jetzt Probetraining
        </a>
      </section>

      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Was uns ausmacht</h2>
        <p className="text-gray-700">
          Der Judo-Club Sinzheim steht für respektvollen Umgang, Teamgeist und Freude an Bewegung. Unser Training richtet sich an Kinder ab 6 Jahren, Jugendliche und Erwachsene – egal ob Anfänger:in oder mit Erfahrung.
        </p>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Dein Kontakt</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-800 font-medium">Max Mustermann</p>
          <p className="text-gray-600">Ansprechpartner Probetraining</p>
          <a href="mailto:kontakt@judo-sinzheim.de" className="text-blue-600 underline">
            kontakt@judo-sinzheim.de
          </a>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img src="https://judo-sinzheim.de/wp-content/uploads/2024/12/Bild4-1024x388.png" alt="Kinder beim Judo-Training" className="w-full object-cover" />
        </div>
      </section>


    </>
  )
}


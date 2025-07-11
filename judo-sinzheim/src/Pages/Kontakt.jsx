import { useState } from 'react'
import React from 'react'

import SmallHeroSection from '../components/SmallHeroSection'

export default function Kontakt() {
  return (
    <>
      <SmallHeroSection
        Title={"Kontakt & Anfahrt"}
        subline={"Klarer Weg zum ersten Wurf – so erreichst du uns."}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">
          
          {/* Kontaktabschnitt */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
            <p className="mb-1 font-semibold">Christian Schnäbele</p>
            <p className="mb-1">Judo-Club Sinzheim</p>
            <p>
              <a
                href="mailto:kontakt@judo-sinzheim.de"
                className="text-[#C22B26] underline"
              >
                1.vorstand@judo-sinzheim.de
              </a>
            </p>
          </div>

          {/* Anfahrtsabschnitt */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Anfahrt</h2>
            <p className="mb-4">
              Training in der St.Vinzenz-Sporthalle Sinzheim <br />
              Kirchstraße 3, 76547 Sinzheim
            </p>

            <iframe
              className="w-full h-64 rounded-md border"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.835738192663!2d8.162016662657638!3d48.760657961625185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971ffd226ceecf%3A0x1d42d99b9f6ecde9!2sKirchstra%C3%9Fe%203A%2C%2076547%20Sinzheim!5e1!3m2!1sde!2sde!4v1752270294286!5m2!1sde!2sde"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

import { useState } from 'react'
import React from 'react'

export default function Kontakt() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kontakt & Anfahrt</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p className="mb-1">Max Mustermann</p>
        <p className="mb-1">Judo-Club Sinzheim</p>
        <p>
          <a href="mailto:kontakt@judo-sinzheim.de" className="text-blue-600 underline">
            kontakt@judo-sinzheim.de
          </a>
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Anfahrt</h2>
        <p className="mb-2">
          Training in der Schulturnhalle Sinzheim <br />
          Schulstraße 12, 76547 Sinzheim
        </p>

        <iframe
          className="w-full h-64 rounded-md border"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.6842702819083!2d8.17118651567561!3d48.764823216646504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970f68f2278d8d%3A0xabcdef123456789!2sSchulstra%C3%9Fe%2012%2C%2076547%20Sinzheim!5e0!3m2!1sde!2sde!4v1234567890123"
        ></iframe>
      </div>
    </div>
  )
}



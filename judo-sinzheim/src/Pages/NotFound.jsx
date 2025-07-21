import { Link } from "react-router-dom"
import React from "react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-5xl font-bold text-[#C22B26] mb-4">404</h1>
      <p className="text-lg text-[#0F1B20] mb-6">
        Die Seite konnte nicht gefunden werden.
      </p>
      <Link
        to="/"
        className="inline-block bg-[#C22B26] hover:bg-[#FF3B35] text-lg text-white font-semibold py-2 px-6 rounded-full transition"
      >
        Zurück zur Startseite
      </Link>
    </div>
  )
}

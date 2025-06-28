import { Link } from "react-router-dom"
import React from "react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Die Seite konnte nicht gefunden werden.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
      >
        Zurück zur Startseite
      </Link>
    </div>
  )
}

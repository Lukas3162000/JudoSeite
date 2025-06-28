import { useState } from 'react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-sm text-center py-6 mt-12">
      © 2025 Judo-Club Sinzheim ·{" "}
      <a href="#/legal/impressum" className="underline">Impressum</a> ·{" "}
      <a href="#/legal/datenschutz" className="underline">Datenschutz</a>
    </footer>
  )
}

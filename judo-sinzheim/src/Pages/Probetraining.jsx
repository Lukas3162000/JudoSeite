import { useState } from 'react'
import React from 'react'

import TrainerCard from "../components/TrainerCard"

export default function Probetraining() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Probetraining</h1>
      <p className="text-gray-700 mb-10">
        Egal ob Kind, Jugendlicher oder Erwachsener – bei uns kann jede*r ganz
        unkompliziert und kostenlos reinschnuppern. Einfach vorbeikommen und mitmachen!
      </p>

      {/* Was mitbringen */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Was sollte ich mitbringen?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Bequeme Sportkleidung (lange Hose, T-Shirt)</li>
          <li>Schlappen für die Halle</li>
          <li>Wasserflasche</li>
          <li>Gute Laune & Neugier</li>
        </ul>
      </section>

      {/* Ablauf */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Wie läuft das Probetraining ab?</h2>
          <p className="text-gray-600 mb-6">
          Du möchtest Judo einfach mal ausprobieren?  <br />Kein Problem – bei uns kannst du ganz unverbindlich
          und kostenlos zum Probetraining kommen. So läuft’s ab:
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
          <div className="bg-white p-4 rounded-2xl shadow-sm ">
            <div className="text-4xl mb-2">🚶‍♂️</div>
            <h3 className="font-semibold">Einfach vorbeikommen</h3>
            <p className="text-sm text-gray-600">Kein Formular, keine Anmeldung nötig.</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm ">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-semibold">Trainer begrüßen dich</h3>
            <p className="text-sm text-gray-600">Wir erklären dir alles Schritt für Schritt.</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm ">
            <div className="text-4xl mb-2">🥋</div>
            <h3 className="font-semibold">Direkt mitmachen</h3>
            <p className="text-sm text-gray-600">Einfach ausprobieren, ganz ohne Druck.</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm ">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="font-semibold">Anmelden, wenn's passt</h3>
            <p className="text-sm text-gray-600">Das Formular gibt's dann bei uns vor Ort.</p>
          </div>

        </div>


      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Welches Training ist für mich geeignet?</h2>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Kinder ab 5 */}
          <a href="/training#/training">
            <div className="bg-white shadow-sm rounded-2xl p-4 hover:bg-slate-50 hover:cursor-pointer text-center">
              <div className="text-3xl mb-2">👧</div>
              <h3 className="font-semibold text-lg">Kinder ab 5 Jahren</h3>
              <p className="text-gray-600 text-sm">Freitag · 17:15 Uhr</p>
            </div>
          </a>

          {/* Kinder ab 7 */}
          <a href="/training#/training">
            <div className="bg-white shadow-sm rounded-2xl p-4 hover:bg-slate-50 hover:cursor-pointer  text-center">
              <div className="text-3xl mb-2">🧒</div>
              <h3 className="font-semibold text-lg">Kinder ab 7 Jahren</h3>
              <p className="text-gray-600 text-sm">Dienstag oder Donnerstag · 16:15 Uhr</p>
            </div>
          </a>

          {/* Jugendliche & Erwachsene */}
          <a href="">
            <div className="bg-white shadow-sm rounded-2xl p-4 hover:bg-slate-50 hover:cursor-pointer text-center">
              <div className="text-3xl mb-2">👨‍🦱</div>
              <h3 className="font-semibold text-lg">Jugendliche & Erwachsene</h3>
              <p className="text-gray-600 text-sm">Mittwoch oder Donnerstag · 19:00 Uhr</p>
            </div>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          → Die vollständigen Zeiten findest du auf unserer{" "}
          <a href="/training#/training" className="text-blue-600 underline">Trainingsseite</a>.
        </p>
      </section>


<div className="mt-12 mb-12 text-center rounded-2xl bg-slate-50 p-4">
  <p className="text-lg mb-4 font-medium text-gray-800">
    Bereit fürs Probetraining? Oder noch Fragen?
  </p>
  <a
    href="#/kontakt"
    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition"
  >
    Kontakt & Anfahrt
  </a>
</div>



      {/* Kontakt / Ansprechpartner */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Ansprechpartner</h2>
        <TrainerCard
          name="Sarina Ridinger"
          role="Trainerin C & B"
          dan="3. DAN"
          email="cheftrainer@judo-sinzheim.de"
          img="https://judo-sinzheim.de/wp-content/uploads/2016/10/sarina-189x300.png"
        />
      </section>

      {/* Kontakt & Anfahrt */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Noch Fragen?</h2>
        <p className="text-gray-700 mb-2">
          Schreib uns gern eine E-Mail an{" "}
          <a href="mailto:cheftrainer@judo-sinzheim.de" className="text-blue-600 underline">
            cheftrainer@judo-sinzheim.de
          </a>{" "}
          oder schau einfach bei uns in der Halle vorbei.
        </p>
        <p className="text-sm text-gray-500">
          📍 <a href="/kontakt#/kontakt" className="underline">Hier findest du die Anfahrt</a>
        </p>
      </section>

      {/* Optional Anmeldung */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Anmeldung nach dem Probetraining</h2>
        <p className="text-gray-700">
          Wenn dir das Training gefällt, kannst du dich im Anschluss anmelden.  
          Den Anmeldebogen bekommst du bei uns vor Ort oder kannst ihn dir{" "}
          <a href="/pfad-zur-pdf" className="text-blue-600 underline">hier als PDF herunterladen</a>.
        </p>
      </section>
    </main>
  )
}

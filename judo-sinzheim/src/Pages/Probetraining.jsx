import { useState } from 'react'
import React from 'react'

import TrainerCard from "../components/TrainerCard"
import SmallHeroSection from '../components/SmallHeroSection'

export default function Probetraining() {
  return (
    <>
      <SmallHeroSection
        Title={"Probetraining"}
        subline={
          <>
            Egal ob Kind, Jugendlicher oder Erwachsener – bei uns kann jede*r ganz unkompliziert und kostenlos reinschnuppern. <br />
            Einfach vorbeikommen und mitmachen!
          </>
        }
      />

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12 text-[#0F1B20]">

        {/* Was mitbringen */}
        <section>
          <div className="bg-[#FFFFFF] rounded-t-2xl px-6 py-4 shadow-sm">
            <h2 className="text-2xl font-semibold">Was sollte ich mitbringen?</h2>
          </div>
          <div className="bg-white rounded-b-2xl px-6 py-4 shadow-sm">
            <ul className="list-disc list-inside space-y-1 text-[#4B5563]">
              <li>Bequeme Sportkleidung (lange Hose, T-Shirt)</li>
              <li>Schlappen für die Halle</li>
              <li>Wasserflasche</li>
              <li>Gute Laune & Neugier</li>
            </ul>
          </div>
        </section>

        {/* Ablauf */}
        <section>
          <div className="bg-[#FFFFFF] rounded-t-2xl px-6 py-4 shadow-sm">
            <h2 className="text-2xl font-semibold mb-1">Wie läuft das Probetraining ab?</h2>
            <p className="text-[#4B5563]">
              Du möchtest Judo ausprobieren? Komm einfach unverbindlich und kostenlos zum Probetraining!
            </p>
          </div>
          <div className="bg-white rounded-b-2xl px-6 py-6 shadow-sm">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "🚶‍♂️", title: "Einfach vorbeikommen", desc: "Kein Formular, keine Anmeldung nötig." },
                { icon: "🤝", title: "Trainer begrüßen dich", desc: "Wir erklären dir alles Schritt für Schritt." },
                { icon: "🥋", title: "Direkt mitmachen", desc: "Einfach ausprobieren, ganz ohne Druck." },
                { icon: "📝", title: "Anmelden, wenn's passt", desc: "Das Formular gibt's dann bei uns vor Ort." }
              ].map((item, i) => (
                <div key={i} className="bg-[#F9F9F9] p-4 rounded-2xl shadow-sm text-[#0F1B20]">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-[#4B5563]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welches Training */}
        <section>
          <div className="bg-[#FFFFFF] rounded-t-2xl px-6 py-4 shadow-sm">
            <h2 className="text-2xl font-semibold mb-1">Welches Training ist für mich geeignet?</h2>
            <p className="text-[#4B5563]">
              Egal ob Kind, Jugendlicher oder Erwachsener – hier findest du das passende Training.
            </p>
          </div>
          <div className="bg-white rounded-b-2xl px-6 py-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: "👧", title: "Kinder ab 5 Jahren", time: "Freitag · 17:15 Uhr" },
                { icon: "🧒", title: "Kinder ab 7 Jahren", time: "Dienstag oder Donnerstag · 16:15 Uhr" },
                { icon: "👨‍🦱", title: "Jugendliche & Erwachsene", time: "Mittwoch oder Donnerstag · 19:00 Uhr" }
              ].map((item, i) => (
                <a key={i} href="/training#/training">
                  <div className="bg-[#F9F9F9] shadow-sm rounded-2xl md:min-h-[144px] p-4 hover:bg-[#E0E0E0] ease-in-out duration-300 hover:cursor-pointer text-center text-[#0F1B20]">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#4B5563] text-sm">{item.time}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-sm text-[#4B5563] mt-4">
              → Die vollständigen Zeiten findest du auf unserer{" "}
              <a href="/training#/training" className="text-[#C22B26] underline">Trainingsseite</a>.
            </p>
          </div>
        </section>

        {/* CTA Box */}
        <section className="max-w-full mx-auto">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Anmeldung Card */}
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm p-6 text-[#0F1B20]">
              <h2 className="text-2xl font-semibold mb-2">Anmeldung</h2>
              <p className="mb-6 text-[#4B5563]">
                Hat dir das Training gefallen? Melde dich einfach an! Den Anmeldebogen gibt’s bei uns vor Ort oder zum Download.
              </p>

              <a
                href="https://judo-sinzheim.de/Vorlagen/aufnahmenantrag/Aufnahmeantrag_Mitgliedschaft_JCS_2020-09-24.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#C22b26] hover:bg-[#FF3B35] shadow-md hover:shadow-lg transition px-6 py-3 rounded-full font-medium text-white"
              >
                📄 Anmeldebogen als PDF herunterladen
              </a>
            </div>

            {/* Kontakt & Anfahrt Card */}
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm p-6 text-[#0F1B20]">
              <h2 className="text-2xl font-semibold mb-2">Kontakt & Anfahrt</h2>
              <p className="text-m mb-6 text-[#4B5563]">
                Bereit fürs Probetraining oder hast du noch Fragen? Wir helfen dir gern weiter – schreib uns oder schau einfach vorbei!
              </p>
              <a
                href="#/kontakt"
                className="inline-block bg-[#C22b26] hover:bg-[#FF3B35] shadow-md hover:shadow-lg transition px-6 py-3 rounded-full text-base font-semibold text-white"
              >
                Kontakt & Anfahrt
              </a>
            </div>
          </div>
        </section>

        {/* Ansprechpartner */}
        <section>
          <div className="bg-[#FFFFFF] rounded-t-2xl px-6 py-4 shadow-sm">
            <h2 className="text-2xl font-semibold mb-1">Ansprechpartner</h2>
            <p className="text-[#4B5563]">
              Schreib uns gern eine E-Mail an{" "}
              <a href="mailto:cheftrainer@judo-sinzheim.de" className="text-[#C22B26] underline">
                cheftrainer@judo-sinzheim.de
              </a>{" "}
              oder schau einfach bei uns in der Halle vorbei.
            </p>
          </div>
          <div className="bg-white rounded-b-2xl px-6 py-6 shadow-sm">
            <TrainerCard
              name="Sarina Ridinger"
              role="Trainerin C & B"
              dan="3. DAN"
              email="cheftrainer@judo-sinzheim.de"
              img="https://judo-sinzheim.de/wp-content/uploads/2016/10/sarina-189x300.png"
            />
          </div>
        </section>
      </main>
    </>
  )
}

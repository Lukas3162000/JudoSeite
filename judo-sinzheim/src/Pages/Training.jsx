import { useState } from 'react'
import React from 'react'

import SmallHeroSection from '../components/SmallHeroSection'
import TrainerCard from '../components/TrainerCard'

export default function Training() {
  return (
    <>
      <SmallHeroSection
        Title={"Training"}
        subline={"Hier findest du alle Informationen zu unseren Trainingszeiten, Altersgruppen und unserem Trainerteam."}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* Trainingszeiten */}
        <section>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Trainingszeiten</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* Dienstag */}
              <div className="rounded-2xl p-4 bg-[#F9F9F9] shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Dienstag</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>16:15 – 17:30 Uhr: U11/U13</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#E38A87] text-[#0F1B20]">Anfänger</span>
                  </li>
                  <li className="flex justify-between">
                    <span>17:30 – 19:00 Uhr: U11/U13</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#C22B26] text-white">Fortgeschrittene</span>
                  </li>
                  <li className="flex justify-between">
                    <span>19:00 – 20:30 Uhr: U15/U18/U21/Ü21</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#2A3338] text-white">Erwachsene</span>
                  </li>
                </ul>
              </div>

              {/* Mittwoch */}
              <div className="rounded-2xl p-4 bg-[#F9F9F9] shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Mittwoch</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>17:15 – 18:30 Uhr: U9/U11</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#F2E7DE] text-[#0F1B20]">Bambinis</span>
                  </li>
                  <li className="flex justify-between">
                    <span>18:30 – 20:00 Uhr: Breitensport</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#2A3338] text-white">Erwachsene</span>
                  </li>
                </ul>
              </div>

              {/* Donnerstag */}
              <div className="rounded-2xl p-4 bg-[#F9F9F9] shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Donnerstag</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>17:30 – 19:00 Uhr: U11/U13</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#C22B26] text-white">Fortgeschrittene</span>
                  </li>
                  <li className="flex justify-between">
                    <span>19:00 – 20:30 Uhr: U15/U18/U21/Ü21</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#2A3338] text-white">Erwachsene</span>
                  </li>
                </ul>
              </div>

              {/* Freitag */}
              <div className="rounded-2xl p-4 bg-[#F9F9F9] shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Freitag</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>17:15 – 18:30 Uhr: U9/U11</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[#F2E7DE] text-[#0F1B20]">Bambinis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Altersklassen Erklärung */}
        <section>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <details className="group">
              <summary className="cursor-pointer list-none font-medium text-gray-800 flex items-center justify-between">
                <span className='text-xl'>Was bedeuten die Altersklassen (U9, U11 usw.)?</span>
                <svg
                  className="ml-2 h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="mt-3 text-sm text-gray-600 space-y-2">
                <p>
                  Die Bezeichnungen wie <strong>U9</strong> oder <strong>U11</strong> stehen für Altersgruppen im Judo.
                  Das "U" bedeutet "unter", also z.&nbsp;B.:
                </p>
                <ul className="list-disc list-inside">
                  <li><strong>U9:</strong> Kinder unter 9 Jahren</li>
                  <li><strong>U11:</strong> Kinder unter 11 Jahren</li>
                  <li><strong>U13:</strong> Kinder unter 13 Jahren</li>
                  <li><strong>U15/U18/U21:</strong> Jugendliche unter 15, 18 bzw. 21 Jahren</li>
                </ul>
                <p>
                  Die Einteilung hilft, die Trainingsgruppen fair und sicher zu gestalten. Die Zuordnung erfolgt je nach Alter und Erfahrungsstand.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Trainingsort */}
        <section>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Trainingsort</h2>
            <p>
              Alle Trainings finden in der St. Vinzenz-Sporthalle Sinzheim statt:
              <br />
              Kirchstraße 3, 76547 Sinzheim
            </p>
          </div>
        </section>

        {/* Fragen zum Training */}
        <section>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Fragen zum Training?</h2>
            <p>
              Bei Fragen zum Ablauf oder zum passenden Training melden Sie sich gerne per E-Mail an:
              <br />
              <a href="mailto:cheftrainer@judo-sinzheim.de" className="text-[#C22B26] underline">
                cheftrainer@judo-sinzheim.de
              </a>
            </p>
          </div>
        </section>

        {/* Trainerteam */}
        <section>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Unser Trainerteam</h2>
            <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-6">
              <TrainerCard
                name="Sarina Ridinger"
                role="Trainerin C & B"
                dan="3. DAN"
                email="cheftrainer@judo-sinzheim.de"
                img="https://judo-sinzheim.de/wp-content/uploads/2016/10/sarina-189x300.png"
              />
              <TrainerCard
                name="Christian Schnäbele"
                role="Trainer C"
                dan="3. DAN"
                email="1.vorstand@judo-sinzheim.de"
                img="https://judo-sinzheim.de/wp-content/uploads/2019/01/PHOTO-2019-01-26-19-48-29-1-380x254.jpg"
              />
              <TrainerCard
                name="Marie-Sophie Gröger"
                role="Trainerin"
                dan="1. DAN"
                email="jugendvertretung@judo-sinzheim.de"
                img="https://judo-sinzheim.de/wp-content/uploads/2019/01/PHOTO-2019-01-26-19-48-30-380x254.jpg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import React from "react";
import mockNews from "../Data/mockNews";
import { Link } from "react-router-dom";

export default function NewsSection() {
  return (
    <section className="pt-8 pb-4 px-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6">

        {/* Textblock oben */}
        <div className="text-center flex flex-col gap-4">
          <div>
            <h3 className="text-m font-semibold text-[#C22B26] mb-1">News</h3>
            <h2 className="text-2xl font-semibold">Aktuelles rund um den Verein</h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hier findest du die neuesten Meldungen, Erfolge und Termine rund um den JC Sinzheim e.V.
          </p>
          <Link to="/News">
            <button className="bg-[#C22B26] hover:bg-[#FF3B35] hover:scale-105 ease-in-out duration-300 cursor-pointer text-white px-12 py-2 rounded-full font-semibold">
              Alle News anzeigen
            </button>
          </Link>
        </div>

        {/* Scrollbare News-Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth pb-2 px-1">
          {mockNews.map((news) => (
            <Link key={news.id} to={`/News/${news.slug}`} className="snap-start">
              <div className="min-w-[280px] min-h-[320px] max-w-xs bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 transition-transform hover:scale-105 hover:shadow-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{news.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

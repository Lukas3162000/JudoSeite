import React from "react";
import mockNews from "../Data/mockNews";
import { Link } from "react-router-dom";



export default function NewsScroller() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-2 text-[#C22B26] flex justify-center">News</h3>
        <h2 className="text-2xl font-semibold mb-6 text-[#0F1B20] flex justify-center text-center">Aktuelles rund um den Verein</h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth pb-4">
          {mockNews.map((news) => (
            <Link to={`/News/${news.slug}`}>
              <div
                key={news.id}
                className="snap-start min-w-[280px] min-h-[320px] max-w-xs bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 transition-transform hover:scale-105 hover:shadow-lg"
              >
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

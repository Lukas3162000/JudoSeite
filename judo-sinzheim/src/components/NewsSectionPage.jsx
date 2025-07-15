import React, { useState } from "react";
import mockNews from "../Data/mockNews";
import { Link } from "react-router-dom";




const ITEMS_PER_PAGE = 4;

export default function NewsSectionPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(mockNews.length / ITEMS_PER_PAGE);

  const pagedNews = mockNews.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (

    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-2 text-[#C22B26] flex justify-center">
          News
        </h3>
        <h2 className="text-2xl font-semibold mb-6 text-[#0F1B20] flex justify-center text-center">
          Aktuelles rund um den Verein
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {pagedNews.map((news) => (
            <Link to={`/News/${news.slug}`}>
              <div
                key={news.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
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

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-[#C22B26]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

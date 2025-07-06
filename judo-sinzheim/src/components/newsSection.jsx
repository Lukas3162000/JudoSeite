import React from "react";

const mockNews = [
  {
    id: 1,
    title: "Sommerevent war ein voller Erfolg!",
    image: "https://source.unsplash.com/featured/?event,people",
    excerpt: "Letztes Wochenende hatten wir über 100 Teilnehmer beim Sommerfest!",
  },
  {
    id: 2,
    title: "Neue Trainingszeiten ab August",
    image: "https://source.unsplash.com/featured/?training,sports",
    excerpt: "Ab August gelten neue Trainingszeiten – jetzt informieren.",
  },
  {
    id: 3,
    title: "Wir sind jetzt auf Instagram!",
    image: "https://source.unsplash.com/featured/?instagram,socialmedia",
    excerpt: "Folgt uns auf Instagram für aktuelle Einblicke ins Vereinsleben.",
  },
  {
    id: 4,
    title: "Probetraining für Neueinsteiger",
    image: "https://source.unsplash.com/featured/?fitness,beginner",
    excerpt: "Jetzt kostenlos anmelden und reinschnuppern!",
  },
  {
    id: 5,
    title: "Sieg bei regionalem Turnier!",
    image: "https://source.unsplash.com/featured/?sports,celebration",
    excerpt: "Unser Team hat das Turnier mit 3:0 gewonnen – Glückwunsch!",
  },
];

export default function NewsScroller() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-2 text-[#C22B26] flex justify-center">News</h3>
        <h2 className="text-2xl font-semibold mb-6 text-[#0F1B20] flex justify-center">Aktuelles rund um den Verein</h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth pb-4">
          {mockNews.map((news) => (
            <div
              key={news.id}
              className="snap-start min-w-[280px] max-w-xs bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 transition-transform hover:scale-105 hover:shadow-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
}

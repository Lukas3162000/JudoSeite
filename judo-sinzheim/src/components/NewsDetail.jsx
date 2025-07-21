import { useParams } from "react-router-dom";
import mockNews from "../Data/mockNews";

export default function NewsDetail() {
  const { slug } = useParams();
  const article = mockNews.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-xl text-red-500">Artikel nicht gefunden</h2>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-xl mb-6" />
        <h1 className="text-3xl font-bold text-[#0F1B20] mb-2">{article.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{new Date(article.date).toLocaleDateString()}</p>
        <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">{article.content}</p>
      </div>
    </section>
  );
}

import { useParams } from "react-router-dom";
import sponsors from "../Data/Sponsors";
import { Link } from "react-router-dom";

export default function SponsorDetails() {
  const { slug } = useParams();
  const sponsor = sponsors.find((s) => s.slug === slug);

  if (!sponsor) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-xl text-red-600">Sponsor nicht gefunden</h2>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl px-4">
        {sponsor.image && (
          <a href={sponsor.logo}>
            <img
              src={sponsor.image}
              alt={sponsor.title}
              className="w-full h-64 object-contain mb-6 rounded-lg"
            />
          </a>
          
        )}

        <h1 className="text-3xl font-bold mb-2">{sponsor.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{sponsor.category}</p>

        <div className="space-y-2 text-gray-800 mb-6">
          <p>{sponsor.address.street}</p>
          <p>{sponsor.address.city}</p>
          <p>Telefon: {sponsor.phone}</p>
          <p className={sponsor.website != ""? "block" : "hidden"}>Website: <a href={sponsor.logo} className="hover:text-[#C22B26] ease-in-out duration-300 hover:underline">{sponsor.website}</a></p>
          <p className={sponsor.fax != ""? "block" : "hidden"}>Fax: {sponsor.fax}</p>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${sponsor.email}`} className="hover:text-[#C22B26] ease-in-out duration-300 hover:underline">
              {sponsor.email}
            </a>
          </p>
        </div>

        <p className="text-base whitespace-pre-line leading-relaxed">{sponsor.content}</p>
      </div>
    </section>
  );
}

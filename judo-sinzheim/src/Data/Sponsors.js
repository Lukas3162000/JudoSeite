import { Link } from "react-router-dom"
import FranzGrafLogo from "../assets/Sponsors/coloured/Franz_Graf_coloured.svg"
import gerstemaierBauschatzLogo from "../assets/Sponsors/coloured/gerstenmaier_bauschatz_coloured.svg"
import HaarscharfLogo from "../assets/Sponsors/coloured/Haarscharf_coloured.svg"
import nKommLogo from "../assets/Sponsors/coloured/n_komm_coloured.svg"
import PflegeSeiertLogo from "../assets/Sponsors/coloured/Pflege_Seiert_coloured.svg"
import schoeckLogo from "../assets/Sponsors/coloured/schoeck_coloured.svg"




const sponsors = [
  {
    title: "Franz Graf",
    slug: "franz-graf",
    logo: "",
    image: FranzGrafLogo, // optional großes Bild
    category: "Garten- und Landschaftsbau",
    address: {
      street: "Im Grün 22",
      city: "76534 Baden-Baden",
    },
    phone: "07223-9536910",
    website: "",
    fax: "07223-9536911",
    email: "firma.franz.graf@gmail.com",
    content: `Meister für Garten- und Landschaftsbau.`,
  },

  {
    title: "Gerstenmaier & Bauschatz",
    slug: "gerstenmaier-bauschatz",
    logo: "https://bauschatz-gruppe.de/",
    image: gerstemaierBauschatzLogo, // optional großes Bild
    category: "Automobilhandel",
    address: {
      street: "Flugstraße 27",
      city: "76534 Baden-Baden",
    },
    phone: "07571 72050",
    website: "www.bauschatz-gruppe.de",
    fax: "",
    email: "info@autohaus-bauschatz.de",
    content: `Die Autohaus Bauschatz & Gerstenmaier Gruppe ist ein familiengeführtes Unternehmen.`,
  },

  {
    title: "Schöck Bauteile GmbH",
    slug: "schoeck-bauteile",
    logo: "https://www.schoeck.com/de/",
    image: schoeckLogo, // optional großes Bild
    category: "Baugewerbe",
    address: {
      street: "Schöckstraße 1",
      city: "76534 Baden-Baden",
    },
    phone: "07223 967-0",
    website: "https://www.schoeck.com/de/",
    fax: "",
    email: "schoeck-de@schoeck.com",
    content: `Zuverlässigkeit trägt`,
  },

  {
    title: "n-komm GmbH",
    slug: "n-komm",
    logo: "https://www.n-komm.de",
    image: nKommLogo, // optional großes Bild
    category: "IT und Services",
    address: {
      street: "Unterweingartenfeld 6",
      city: "76135 Karlsruhe",
    },
    phone: "+49 (0)721 354600",
    website: "https://www.n-komm.de",
    fax: "",
    email: "info@n-komm.de",
    content: `Digitaler Wandel mit flexiblen & effizienten IT-Lösungen`,
  },

  {
    title: "Ambulanter Pflegedienst Seiert Individuelle Pflege",
    slug: "ambulante-pflege-seiert",
    logo: "",
    image: PflegeSeiertLogo, // optional großes Bild
    category: "Ambulanter Pflegedienst",
    address: {
      street: "Franz-Rauch-Straße 1a",
      city: "76547 Sinzheim",
    },
    phone: "+49 (0)7221 988006",
    website: "",
    fax: "+49 7221988077",
    email: "ambulante-pflege-seiert@t-online.de",
    content: `Grundpflegerische Leistungen sowie Betreuung und hauswirtschaftliche Versorgung`,
  },

  {
    title: "Friseursalon Haarscharf",
    slug: "haarscharf-buehl",
    logo: "https://www.haarscharf-buehl.de/",
    image: HaarscharfLogo, // optional großes Bild
    category: "Friseursalon",
    address: {
      street: "Schlossstraße 24",
      city: "77815 Bühl",
    },
    phone: "+49 (0)7223 23648",
    website: "https://www.haarscharf-buehl.de/",
    fax: "",
    email: "info@haarscharf-buehl.de",
    content: `Unsere Philosophie: Zeit für Qualität. Unser Anspruch: Kompetenz durch Weiterbildung`,
  },



  
];

export default sponsors;

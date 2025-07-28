import { Link } from "react-router-dom"
import FranzGrafLogo from "../assets/Sponsors/white/Franz_Graf_white.svg"
import gerstemaierBauschatzLogo from "../assets/Sponsors/white/gerstemaier_bauschatz_white.svg"
import HaarscharfLogo from "../assets/Sponsors/white/Haarscharf_white.svg"
import nKommLogo from "../assets/Sponsors/white/n-komm_white.svg"
import PflegeSeiertLogo from "../assets/Sponsors/white/Pflege_Seiert_white.svg"
import schoeckLogo from "../assets/Sponsors/white/schoeck_white.svg"




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

  
];

export default sponsors;

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


import Startseite from "./Pages/Startseite"
import Training from "./Pages/Training"
import Probetraining from "./Pages/Probetraining"
import Kontakt from "./Pages/Kontakt"
import NotFound from "./Pages/NotFound"
import UnserVerein from "./Pages/UnserVerein";
import News from "./Pages/News";
import NewsDetail from "./components/NewsDetail";
import SponsorDetails from "./components/SponsorDetails";
import HaraldSchneiderEhrenseite from "./Pages/Haraldschneider";

import "./index.css"
import { ImportIcon } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Startseite />} />
          <Route path="training" element={<Training />} />
          <Route path="probetraining" element={<Probetraining />} />
          <Route path="UnserVerein" element={<UnserVerein />} />
          <Route path="News" element={<News />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="HaraldSchneider" element={<HaraldSchneiderEhrenseite />} />
          <Route path="News/:slug" element={<NewsDetail />} />
          <Route path="sponsors/:slug" element={<SponsorDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

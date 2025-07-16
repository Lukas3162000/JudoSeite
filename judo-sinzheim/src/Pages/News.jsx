import React from "react";
import NewsScroller from "/src/components/newsSection.jsx"
import NewsSectionPage from "../components/NewsSectionPage.jsx";
import SmallHeroSection from "../components/SmallHeroSection.jsx";


export default function News() {
    
    
    return(
        <>

        <SmallHeroSection Title={"News"} subline={"Aktuelles rund um den Verein"}/>

            <NewsSectionPage />
        </>
    )
}
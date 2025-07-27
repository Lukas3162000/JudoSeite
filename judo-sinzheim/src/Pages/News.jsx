import React from "react";
import NewsScroller from "/src/components/newsSection.jsx"
import NewsSectionPage from "../components/NewsSectionPage.jsx";
import SmallHeroSection from "../components/SmallHeroSection.jsx";


import News_DeSo from "../assets/Video/News_DeSo.mp4";
import News_MoSo from "../assets/Video/News_MoSo.mp4";

export default function News() {
    
    
    return(
        <>

        <SmallHeroSection 
        Title={"News"} 
        subline={"Aktuelles rund um den Verein"}
        backgroundVideoDeSo={News_DeSo}
        backgroundVideoMoSo={News_MoSo}
        />

            <NewsSectionPage />
        </>
    )
}
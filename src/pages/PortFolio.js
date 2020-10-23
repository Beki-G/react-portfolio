import React from "react";
import Footer from "../components/Footer/Footer";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid"
import Navbar from "../components/Navbar/Navbar"
import ProjectBlurb from "../components/ProjectBlurb/ProjectBlurb";

function Portfolio(){
    return(
        <div className="bg-lgCyan">
            <Navbar />
            <ProjectBlurb />
            <ProjectGrid />
            <Footer />
        </div>
    )
}

export default Portfolio;
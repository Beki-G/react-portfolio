import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar"
import ProjectGrid from "../components/ProjectGrid/ProjectGrid"

function Portfolio(){
    return(
        <div className="bg-lgCyan">
            <ProjectGrid />
            <Footer />
        </div>
    )
}

export default Portfolio;
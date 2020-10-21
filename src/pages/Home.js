import React from"react";
import CardGrid from "../components/CardGrid/CardGrid";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero"
import Profile from "../components/Profile/Profile";


function Home(){

    return(
        <div className="bg-gray-200">
            
            <Hero />
            <Profile />
            <CardGrid />
            <Footer />
        </div>
    )
}

export default Home;
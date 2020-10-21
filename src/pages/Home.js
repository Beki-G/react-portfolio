import React from"react";
import CardGrid from "../components/CardGrid/CardGrid";
import Hero from "../components/Hero/Hero"
import Profile from "../components/Profile/Profile";


function Home(){

    return(
        <div className="bg-gray-200">
            
            <Hero />
            <Profile />
            <CardGrid />
            
        </div>
    )
}

export default Home;
import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar"

import "./styles.css"

function Hero() {
  return (
    <div
      className="hero-image w-full block"
      // style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}
    >
      <Navbar />
      <div className="flex h-40 lg:h-64 mx-auto px-7 justify-center items-center text-2xl text-white container md:text-4xl hero-text text-center" >
        <div className="block">
        <Typewriter 
            options={{
              strings: [`Hi I'm Beki`, `A loving bird owner`, `and a Web Developer`, ],
              autoStart: true,
              loop: true,
            }}
            />
        
        </div>
          
        {/* <h3 className="text-lg text-gray-200 md:text-2xl block">
          I come from a strong administrative and customer service background. 
        </h3> */}
      </div>
    </div>
  );
}

export default Hero;

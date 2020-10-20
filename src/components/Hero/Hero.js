import React from "react";
import Typewriter from "typewriter-effect";

import "./styles.css"

function Hero() {
  return (
    <div
      className="py-20 hero"
      // style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}
    >
      <div className="mt-20 text-4xl text-white container mx-auto px-6">
        <Typewriter 
            options={{
              strings: [`Hi I'm Beki`, `I'm a web developer`],
              autoStart: true,
              loop: true,
            }}/>
        <h3 className="text-2xl mb-8 text-gray-200">
          I come from a strong administrative and customer service background. 
        </h3>


      </div>
    </div>
  );
}

export default Hero;

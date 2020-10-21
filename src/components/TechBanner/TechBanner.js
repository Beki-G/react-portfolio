import React from "react";

function TechBanner() {
  return (
    <div className="bg-white text-yellow-300 rounded text-center ">
      <div className="flex justify-center">
        <div className="bg-white rounded-full h-16 w-16 -mt-8 flex items-center justify-center">
        <i className="fas fa-code"></i>
        </div>
      </div>
      <div >
        <h1 className="text-xl text-yellow-300  font-bold">Tech</h1>
        <p className="pb-4 text-gray-600 text-sm">
          Here are some of the technologies I'm familiar with
        </p>
      </div>

    </div>
  );
}

export default TechBanner;
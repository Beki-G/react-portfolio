import React from "react";
import Card from "../Card/Card";
import TechBanner from "../TechBanner/TechBanner";

function CardGrid() {
    const knowledgeBase=[
        {
            type:"Browser",
            name: "HTML",
        },
        {
            type:"Browser",
            name: "CSS",
        },
        {
            type:"Browser",
            name: "JQuery",
        },
        {
            type:"Browser",
            name: "Javascript",
        },
        {
            type:"Framework",
            name: "Bootstrap",
        },
        {
            type:"Framework",
            name: "Bulma",
        },
        {
            type:"Framework",
            name: "React",
        },
        {
            type:"Framework",
            name: "Tailwind",
        },
        {
            type:"DevTools",
            name: "Git",
        },
        {
            type:"DevTools",
            name: "GitHub",
        },
        {
            type:"DevTools",
            name: "Heroku",
        },
        {
            type:"Databases",
            name: "MongoDB",
        },
        {
            type:"Databases",
            name: "MySQL",
        },
        {
            type:"Server Side",
            name: "Node.js",
        },
        {
            type:"Server Side",
            name: "Express.js",
        },
        {
            type:"Server Side",
            name: "APIs",
        },
    ]
  return (
    <div className=" bg-lgCyan mt-16 md:mt-0">
        <TechBanner />
        <br />
      <div className="flex flex-wrap overflow-hidden w-4/5 mx-auto mt-8">
        {knowledgeBase.map((entry, index)=>{
            return <Card data={entry} key={index} />
        })}
      </div>
    </div>
  );
}

export default CardGrid;

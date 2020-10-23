import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectCard from "../ProjectCard/ProjectCard"

function ProjectGrid() {
    const projects=[
        {
            projectTitle:"CodeLocker", 
            deployed:"https://codel0cker.herokuapp.com/",
            github:"https://github.com/MarkKelly00/codeLocker",
            gif:`codelocker.png`
        },
        {
            projectTitle:"Shikigami Trait Searcher", 
            deployed:"https://beki-g.github.io/Shikigami-trait-searcher/index.html",
            github:"https://github.com/Beki-G/Shikigami-trait-searcher",
            gif:"ShikiAbilitySearch.gif"
        },
        {
            projectTitle:"Timed JS Quiz", 
            deployed:"https://beki-g.github.io/timedQuiz/",
            github:"https://github.com/Beki-G/timedQuiz",
            gif:"jsQuiz.png"
        },
        {
            projectTitle:"Weather Dashboard", 
            deployed:"https://beki-g.github.io/weatherDashboard/",
            github:"https://github.com/Beki-G/weatherDashboard",
            gif:"weather.png"
        },
        {
            projectTitle:"React Employee Directory", 
            deployed:"https://beki-g.github.io/react-employee-directory/",
            github:"https://github.com/Beki-G/react-employee-directory",
            gif:"emoployee.gif"
        },
        {
            projectTitle:"Quote Goat", 
            deployed:"https://quotegoat.herokuapp.com/",
            github:"https://github.com/Beki-G/QuoteGOAT",
            gif:"quote.png"
        },
    ]
  return (
    <div>
        <Navbar />
    <div className=" bg-lgCyan mt-16 md:mt-0 w-4/5 mx-auto min-h-9/10">
        
        <br />
      <div className="flex flex-wrap -mx-2 overflow-hidden ">
        {projects.map((entry, index)=>{
            return <ProjectCard data={entry} key={index} />
        })}
      </div>
    </div>
    </div>
  );
}

export default ProjectGrid;

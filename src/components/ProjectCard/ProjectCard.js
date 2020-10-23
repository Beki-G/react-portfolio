import React from "react";

function ProjectCard({ data }) {
    

    return (
    <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 mx-auto">
      <div className="bg-white w-11/12 md:w-3/4 shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-5 mx-auto">
        <img
          src={require(`../../imgs/${data.gif}`)}
          className="h-48 w-full object-contain object-center"
          alt="example"
        />
        <div className="w-full flex flex-col">
          <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">
           {data.projectTitle}
          </h3>
          <p className="p-3 pt-1 cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            alias?
          </p>
          <button className="bg-aquamarine hover:bg-tuscany hover:text-aquamarine text-eagleGreen px-3 py-1 m-2 focus:outline-none rounded">
            <a href={data.deployed} target="_blank" rel="noopener noreferrer">Check it out</a>
          </button>
          <button className="bg-sky hover:bg-eagleGreen hover:text-slateGray text-eagleGreen px-3 py-1 m-2 focus:outline-none rounded">
            <a href={data.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

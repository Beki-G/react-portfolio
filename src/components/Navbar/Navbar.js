import React, { useState } from "react";
import {Link} from "react-router-dom"
// import logo from "../../assets/initials.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSideMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }


  return (
      <nav className="bg-transparent sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <Link to="/" ><img className="h-10" src={require("../../imgs/initials.png")} alt="BG initials" /></Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleSideMenu}
              type="button"
              className="block text-lgCyan bg-eagleGreen hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d={
                    isOpen
                      ? "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      : "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={` px-2 pt-2 pb-4 sm:flex sm:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block py-1  px-2 text-eagleGreen bg-lgCyan font-extrabold rounded hover:bg-lgCyan hover:text-midGreen"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="mt-1 block py-1 px-2 text-eagleGreen bg-lgCyan rounded font-extrabold hover:bg-lgCyan hover:text-midGreen sm:mt-0 sm:ml-2"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="mt-1 block py-1 font-extrabold px-2 text-eagleGreen bg-lgCyan rounded bold hover:bg-lgCyan hover:text-midGreen sm:mt-0 sm:ml-2"
          >
            Contact Me
          </Link>
        </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-white">
      <div className="navbar-start ml-0 sm:ml-0 md:ml-2 lg:ml-7 xl:ml-16">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn lg:hidden xl:hidden btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu ml-3 mt-2 shadow rounded-lg w-52 bg-white"
          >
            <li className="font-medium pl-3 py-2 text-base text-secondary hover:bg-slate-100">
              Home
            </li>
            <a href="#project">
              <li className="font-medium pl-3 py-2 text-base text-secondary hover:bg-slate-100">
                Project
              </li>
            </a>
            <li className="font-medium pl-3 py-2 text-base text-secondary hover:bg-slate-100">
              Services
            </li>
          </ul>
        </div>
        <Link to="/">
          <h5 className="md:ml-3 md:flex lg:flex xl:flex font-bold text-2xl text-secondary transition hover:scale-105">
            RHP<span className="text-primary">.</span>
          </h5>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-12">
          <li className="font-semibold text-base text-secondary transition hover:text-primary hover:scale-105 cursor-pointer">
            Home
          </li>
          <a href="#project">
            <li className="font-semibold text-base text-secondary transition hover:text-primary hover:scale-105 cursor-pointer">
              Project
            </li>
          </a>
          <a href="#service">
            <li className="font-semibold text-base text-secondary transition hover:text-primary hover:scale-105 cursor-pointer">
              Services
            </li>
          </a>
        </ul>
      </div>
      <div className="navbar-end mr-2 sm:mr-4 md:mr-7 lg:mr-12 xl:mr-20">
        <a href="https://wa.me/6285797556102" target="_blank">
          <button className="bg-white border border-primary text-primary text-base font-medium py-2 px-5 rounded-xl transition hover:scale-105">
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

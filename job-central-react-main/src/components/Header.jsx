import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative lg:flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <div className="text-3xl font-bold tracking-wide text-gray-800 ">
            JobCentral
          </div>
        </Link>
        <ul className="items-center lg:space-x-8 lg:flex">
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appliedJobs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <Link to="/">
          <button className="btn-primary">Start applying</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

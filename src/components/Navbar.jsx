import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-rose-50 flex justify-around h-16 items-center">
      <h2 className="text-xl font-semibold text-rose-700 cursor-pointer">
        <NavLink to="/">e-Shopping</NavLink>
      </h2>
      <ul className="flex space-x-10">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

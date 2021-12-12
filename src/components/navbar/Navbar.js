import React from "react";
import "./navbarcss.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              COMMITTEE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PROGRAMS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              REGISTRATION
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link " href="#">
              PATRONS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

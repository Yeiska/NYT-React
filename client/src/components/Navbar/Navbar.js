import React from "react";
import { link } from "react-router-dom";
import "./Navbar.css";

const Navbar = pops => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p>NYT Article Scrubber</p>
        <input type = "text"></input>
        <button type= "search">Search</button>
    </nav>
);
export default Navbar;
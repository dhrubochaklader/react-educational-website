import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
  return (
    <div className="abc">
      <Link to="/home">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;

import React from "react";
import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <IconContext.Provider value={{ className: "footer-icon" }}>
        <a href="#">
          <FaTwitterSquare />
        </a>
        <a href="#">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <FaInstagramSquare />
        </a>
        <a href="#">
          <FaGithubSquare />
        </a>
      </IconContext.Provider>
    </div>
  );
}

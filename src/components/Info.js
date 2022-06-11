import React from "react";
import recentPhoto from "../images/recent-photo.jpg";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

console.log(recentPhoto);
export default function Info() {
  return (
    <div className="info-container">
      <img src={recentPhoto} alt="Recent photo" className="photo" />
      <h1 className="name">Katherine Zha</h1>
      <h3 className="position">Frontend Developer</h3>
      <p className="website">katherinezha.website</p>
      <div className="buttons">
        <a href="#" className="email">
          <IconContext.Provider value={{ className: "email-icon" }}>
            <div>
              <MdEmail />
            </div>
          </IconContext.Provider>
          Email
        </a>

        <a href="#" className="linkedIn">
          <IconContext.Provider value={{ className: "linkedIn-icon" }}>
            <div>
              <FaLinkedin />
            </div>
          </IconContext.Provider>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

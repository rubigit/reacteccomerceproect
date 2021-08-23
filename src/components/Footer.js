import React from "react";
import logo from "img/logo-portrait-dark-01.svg";

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <a href="index.html" className="logofooter">
          <img src={logo} alt="Lilights logo" height="80" />
        </a>
        <ul className="social">
          <li>
            <a href="#">
              <span className="material-icons">face</span>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="material-icons">camera_alt</span>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="material-icons">alternate_email</span>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
        <nav aria-label="Legal" className="legal">
          <ul className="legal">
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">Accessibility Policy</a>
            </li>
          </ul>
        </nav>
        <p className="copyright">
          &copy; Lilights, 2012 - present. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;

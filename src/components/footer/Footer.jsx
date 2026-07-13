import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Jevon Al Salgus</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/jevonls/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://github.com/JevonAlSalgus"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jevonalsalgus/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Jevon Al Salgus. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

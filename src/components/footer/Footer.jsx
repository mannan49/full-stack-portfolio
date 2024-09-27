import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        Manan Nasir
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#"> Home </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about"> About </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience"> Experience </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services"> Services </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio"> Portfolio </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact"> Contacts </a>{" "}
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/manan-nasir-243aa6190/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/MMananNasir1" target="_blank">
          <BsTwitter />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009863538012"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Muhammad Manan Nasir. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {" "}
        <FaUserTie />{" "}
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveNav("#experiences")}
        className={activeNav === "#experiences" ? "active" : ""}
      >
        {" "}
        <BiBook />{" "}
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        {" "}
        <BsFillGearFill />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {" "}
        <BiMessageDetail />{" "}
      </a>
    </nav>
  );
};

export default Nav;

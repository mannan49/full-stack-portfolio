import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5> What I offer </h5>
      <h2> Services </h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3> UI/UX Design </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p> Responsive web design through Tailwind CSS </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p> Proficient to convert Figma Design into Web Design. </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                {" "}
                Implementation of user-friendly UI/UX designs for optimal user
                engagement.{" "}
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3> Progressive Web Apps </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p> Building scalable web applications with React</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p> Skilled in optimizing performance </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                {" "}
                Experienced in integrating APIs and managing data efficiently in
                React.{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

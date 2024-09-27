import React from "react";
import "./Experience.css";
import { FaAngular, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
const Experience = () => {
  return (
    <section id="experiences">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaAngular className="experience_details_icons" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Building dynamic Single Page Applications</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details_icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">
                  Component-based UI development
                </small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details_icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced web programming</small>
              </div>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_details_icons" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Efficient state management</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="experience_details_icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">
                  Utility-first CSS framework
                </small>
              </div>
            </article>
            <article className="experience_details">
              <FaCss3 className="experience_details_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Styling and layout design</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Back End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiDotnet className="experience_details_icons" />
              <div>
                <h4>.NET Core</h4>
                <small className="text-light">
                  Building scalable applications
                </small>
              </div>
            </article>
            <article className="experience_details">
              <FaNodeJs className="experience_details_icons" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">
                  Asynchronous event-driven framework
                </small>
              </div>
            </article>
            <article className="experience_details">
              <DiMsqlServer className="experience_details_icons" />
              <div>
                <h4>MS SQL</h4>
                <small className="text-light">Structured data management</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details_icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">
                  Document-oriented NoSQL database
                </small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className="experience_details_icons" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">
                  Fast and minimalist framework
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

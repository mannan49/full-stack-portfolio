/* eslint-disable no-unused-vars */
import "./Experience.css";
import { FaAngular, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNgrx,
  SiDotnet,
  SiRabbitmq,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiReactivex,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";

const frontendSkills = [
  { icon: FaAngular, label: "Angular" },
  { icon: SiNgrx, label: "NgRx" },
  { icon: SiReactivex, label: "RxJS" },
  { icon: FaReact, label: "React" },
  { icon: SiRedux, label: "RTK" },
  { icon: SiTailwindcss, label: "Tailwind" },
];

const backendSkills = [
  { icon: DiDotnet, label: "ASP.NET" },
  { icon: SiRabbitmq, label: "RabbitMQ" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: DiMsqlServer, label: "MS SQL" },
  { icon: SiJsonwebtokens, label: "JWT" },
  { icon: FaNodeJs, label: "NodeJS" },
];

const Experience = () => {
  return (
    <section id="experiences">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front End Development</h3>
          <div className="experience_content">
            {frontendSkills.map(({ icon: Icon, label }, index) => (
              <article className="experience_details" key={index}>
                <Icon className="experience_details_icons" />
                <div>
                  <h4>{label}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Back End Development</h3>
          <div className="experience_content">
            {backendSkills.map(({ icon: Icon, label }, index) => (
              <article className="experience_details" key={index}>
                <Icon className="experience_details_icons" />
                <div>
                  <h4>{label}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import "./About.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src="https://res.cloudinary.com/dqmgf14ee/image/upload/v1756146713/portfolio/red_profile_ascpfy.png" alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Job Experience</h5>
              <small>1 Year+</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small> 10+ Projects </small>
            </article>
          </div>
          <p>
            I am a skilled Full Stack developer with expertise in building modern,
            scalable, and interactive web applications using latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import "./Portfolio.css";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

const data = [
  // {
  //   id: 1,
  //   image: "https://res.cloudinary.com/dqmgf14ee/image/upload/v1756151513/portfolio/Screenshot_2025-08-26_005339_fxdscw.png",
  //   title: "Quiz Mine Web App",
  //   description:
  //     "Built a quiz site for students of matric and intermediate contain login/signup functionality, user can select test of every chapter of Physics, Chemistry, Biology etc. and at the end result is displayed in the form of performance percentage. Tech Stack: React, React Hot Toast, Nivo Charts, CSS 3, Redux",
  //   github: "https://github.com/mannan49/quizmine_user.git",
  //   demo: "https://quizmine-user.vercel.app/login",
  // },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dqmgf14ee/image/upload/v1756151513/portfolio/Screenshot_2025-08-26_005339_fxdscw.png",
    title: "Dareecha Dashboard",
    description:
      "Build a complete LMS dashboard for myself where I can upload books, write notes, add MCQs and other educational material which will be shared to students on student portal.",
    github: "https://github.com/mannan49/angular-dareecha-admin-dashboard",
    demo: "https://angular-dareecha-admin-dashboard.vercel.app/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dqmgf14ee/image/upload/v1756150811/portfolio/Screenshot_2025-08-26_004140_cj1rlf.png",
    title: "LEAP Patient Portal",
    description:
      "Contributed to the Appointment Booking, Patient Portal, and other LEAP modules by developing and enhancing backend endpoints and microservice integrations. Implemented frontend features using Angular, RxJS, and NgRx to improve state management, performance, and user experience. ",
    github: "",
    demo: "https://sandbox.leaphealth.ai/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dqmgf14ee/image/upload/v1756150954/portfolio/Screenshot_2025-08-26_004410_taeuhl.png",
    title: "Tap & Travel",
    description: "Tap and Travel",
    github: "https://github.com/mannan49/tap-and-travel-user-frontend.git",
    demo: "https://tap-and-travel-user-frontend.vercel.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfoio_container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <div>
                <h3 id="portfolio_item_heading"> {title} </h3>
                <h5>{description}</h5>
              </div>
              <div className="portfolio_item_cta">
                {github && (
                  <div className="btn github-link">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    <FaGithub size={24} />
                  </div>
                )}
                {demo && (
                  <div className="btn github-link">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <HiOutlineLightBulb size={24} />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

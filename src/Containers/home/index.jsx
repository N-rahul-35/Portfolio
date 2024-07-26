import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Image from "../../Images/Profile.jpeg";
import Resume from "../../Images/Resume_Rahul.pdf"; // Import the resume PDF

import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Rahul 
          <br />
          Software Developer
        </h1>
      </div>
      <div className="home__profile-picture-container">
        <img src={Image} alt="Profile" />
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href={Resume} download="resume.pdf">
            <button className="download-resume-button">Download Resume</button>
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;

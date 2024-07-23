import React from "react";

//import PageHeaderContent from "../../Components/pageHeadercontent";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { FaLaptopCode, FaChartLine } from "react-icons/fa";
import { SiC, SiCplusplus  } from "react-icons/si";

//import { SiTensorflow, SiPytorch} from "react-icons/fa"
const personalDetails = [
  {
    label: "Name",
    value: "Rahul Kumar Chaudhary",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "rahul.pivs@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9508665402",
  },
];

const jobSummary =
            "Hello! I'm [Rahul Kumar], a passionate front-end developer with a keen eye for aesthetics and UI design.I specialize in creating visually stunning and highly functional websites that deliver exceptional user experiences.My journey into web development began with a fascination for how things work behind the scenes on the internet. This curiosity led me to pursue a  B.Tech in Information Technology from IIEST Shibpur, where I developed a strong foundation in web technologies and user experience design."
const About = () => {
  return (
    <section id="about" className="about">
      {/* <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      /> */}
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaLaptopCode size={50} color="var( --cyan-theme-main-color)" />
              </div>
              <div>
                <FaChartLine size={50} color="var( --cyan-theme-main-color)" />
              </div>
              <div>
                <SiC size={50} color="var(--cyan-theme-main-color)" />
              </div>
              <div>
                <SiCplusplus size={50} color="var(--cyan-theme-main-color)" />
              </div>
              {/* <div>
                <SiTensorflow size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiPytorch size={60} color="var(--yellow-theme-main-color)" />
          </div> */}
            </div>
          </Animate>
        </div>
      </div>  
    </section>
  );
};
export default About;

/*
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeadercontent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaLaptopCode, FaChartLine, FaChartPie, FaPaintBrush } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "John Doe",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "demo@example.com",
  },
  {
    label: "Contact No",
    value: "+11 3456789056",
  },
];

const jobSummary =
  "Seasoned and independent Front End Developer with 5 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaLaptopCode size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaChartLine size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaChartPie size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaPaintBrush size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;*/
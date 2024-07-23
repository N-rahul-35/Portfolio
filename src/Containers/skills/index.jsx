// import { Line } from "rc-progress";
// import React from "react";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { Animate, AnimateKeyframes } from "react-simple-animate";
// import PageHeaderContent from "../../Components/pageHeadercontent";
// import { skillsData } from "./utils";
// import './style.scss';

// const Skills = () => {
//   return (
//     <section id="skills" className="skills">
//       <PageHeaderContent
//         headerText="My Skills"
//         icon={<BsInfoCircleFill size={40} />}
//       />
//        { <div className="skills__content-wrapper">
//         {skillsData.map((item, i) => (
//           <div key={i} className="skills__content-wrapper__inner-content">
//             <Animate
//               play
//               duration={1}
//               delay={0.3}
//               start={{
//                 transform: "translateX(-200px)",
//               }}
//               end={{
//                 transform: "translateX(0px)",
//               }}
//             >
//               <h3 className="skills__content-wrapper__inner-content__category-text">
//                 {item.label}
//               </h3>
//               <div className="skills__content-wrapper__inner-content__progressbar-container">
//                 {item.data.map((skillItem, j) => (
//                   <AnimateKeyframes
//                     play
//                     duration={1}
//                     keyframes={["opacity : 1", "opacity : 0"]}
//                     iterationCount="1"
//                   >
//                     <div className="progressbar-wrapper" key={j}>
//                       <p>{skillItem.skillName}</p>
//                       <Line
//                         percent={skillItem.percentage}
//                         strokeWidth="2"
//                         strokeColor="var(--yellow-theme-main-color)"
//                         trailWidth="2"
//                         strokeLinecap="square"
//                       />
//                     </div>
//                   </AnimateKeyframes>
//                 ))}
//               </div>
//             </Animate>
//           </div>
//         ))}
//       </div> 
    
// // <div className="skills__content-wrapper">
// //       {skillsData.map((item, i) => (
// //         <div key={i} className="skills__content-wrapper__inner-content">
// //           <Animate
// //             play
// //             duration={1}
// //             delay={0.3}
// //             start={{
// //               transform: "translateX(-200px)",
// //             }}
// //             end={{
// //               transform: "translateX(0px)",
// //             }}
// //           >
// //             <h3 className="skills__content-wrapper__inner-content__category-text">
// //               {item.label}
// //             </h3>
// //             <div className="skills__content-wrapper__inner-content__progressbar-container">
// //               {item.data.map((skillItem, j) => (
// //                 <AnimateKeyframes
// //                   play
// //                   duration={1}
// //                   keyframes={["opacity: 1", "opacity: 0"]}
// //                   iterationCount="1"
// //                   key={j} // Unique key for each skill item
// //                 >
// //                   <div>
// //                   <li key={j} className="skills__item">
// //                       <span className="skills__icon">{skillItem.icon}</span> 
// //                       <span className="skills__name">{skillItem.skillName}</span> 
// //                       - {skillItem.percentage}%
// //                     </li>
// //                     <Line
// //                       percent={skillItem.percentage}
// //                       strokeWidth="2"
// //                       strokeColor="var(--yellow-theme-main-color)"
// //                       trailWidth="2"
// //                       strokeLinecap="square"
// //                     />
// //                   </div>
// //                 </AnimateKeyframes>
// //               ))}
// //             </div>
// //           </Animate>
// //         </div>
// //       ))}
//     //</div>

//       }
//     </section>
//   );
// };
// export default Skills;


import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import PageHeaderContent from "../../Components/pageHeadercontent";
import { skillsData } from "./utils";
import './style.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--cyan-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                      {/* <span className="percentage" style={{ color: "var(--cyan-theme-main-color)" }}>
                        {skillItem.percentage}%
                      </span> */}
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

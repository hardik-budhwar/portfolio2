import React from "react";
import { GiSkills } from "react-icons/gi"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from "rc-progress";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import "./styles.scss";
const data = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "SCSS",
        percentage: "75",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "80",
      },
      {
        skillName: "REACT JS",
        percentage: "80",
      },
      {
        skillName: "REDUX",
        percentage: "70",
      },
    ],
  },
  {
    label: "PROGRAMMING SKILLS",
    data: [
      {
        skillName: "C++",
        percentage: "90",
      },
      {
        skillName: "C",
        percentage: "65",
      },
      {
        skillName: "DSA",
        percentage: "70",
      }
    ],
  },
  {
    label: "EXTRA",
    data: [
      {
        skillName: "SQL",
        percentage: "90",
      },
      {
        skillName: "GIT",
        percentage: "68",
      },
      {
        skillName: "GITHUB",
        percentage: "35",
      }
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {data.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={skill.skillName}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
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
}

export default Skills;

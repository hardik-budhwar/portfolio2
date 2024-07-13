import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import "./styles.scss";
const data = {
  experience: [
    {
      title: "Front end dev : ",
      subTitle: "Prodigy infotech",
      description:
        " Hand on experience on real time projects ",
      date:
       "2024",
    },
    {
      title: "Front end dev : ",
      subTitle: "Wandaa Exchange",
      description:
        "worked on to maintain the UI of the webpage to get more user attention",
      date:
       "2023",
    },
    {
      title: "Co head security : ",
      subTitle: "MOKSHA",
      description:
        " Managed 10 teams to ensure crowd safety at MOKSHA ",
      date:
      "2024",
    },
  ],
  education: [
    {
      title: "Secondary :",
      subTitle: "Model School,Rohtak",
      description:
        "10th Grade",
      date:
        "2018"
    },
    {
      title: "Higher Secondary :",
      subTitle: "Mother khazani convent school,Delhi",
      description:
        "12th Grade in Science",
      date:
        "2020"
    },
    {
      title: "B.Tech",
      subTitle: "NSUT",
      description:
        "Btech in ECE",
      date:
        "2025"
    },
  ],
};

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                //date="2011 - present"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4> 
                </div>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-sub-text-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                //date="2011 - present"
                iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;

import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./styles.scss";
import ImageOne from "../../images/crypto.jpeg";
import ImageTwo from "../../images/dsa.jpeg";
import ImageThree from "../../images/mines.jpeg";
/*import ImageFour from "../../images/pexels-karolina-grabowska-4195324.jpg";
import ImageFive from "../../images/pexels-picjumbocom-196644.jpg";
import ImageSix from "../../images/pexels-miguel-á-padriñán-68562.jpg";
import ImageSeven from "../../images/pexels-pixabay-39284.jpg";
import ImageEight from "../../images/pexels-pixabay-261705.jpg";
import ImageNine from "../../images/pexels-tirachard-kumtanom-733857.jpg";
import ImageTen from "../../images/pexels-pixabay-276514.jpg";*/

const portfolioData = [
  {
    sectionId: 2,
    projectName: "Crypto tracker",
    projectLink: "",
    image: ImageOne,
  },
  {
    sectionId: 3,
    projectName: "Metro app",
    projectLink: "",
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "Mines game",
    projectLink: "",
    image: ImageThree,
  },
  /*{
    sectionId: 3,
    projectName: "Supplier Design App",
    projectLink: "",
    image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "Shopping Cart Design",
    projectLink: "",
    image: ImageFive,
  },
  {
    sectionId: 2,
    projectName: "Notes Application",
    projectLink: "",
    image: ImageSeven,
  },
  {
    sectionId: 3,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageSix,
  },
  {
    sectionId: 3,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageEight,
  },
  {
    sectionId: 3,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageNine,
  },
  {
    sectionId: 3,
    projectName: "ToDo Application",
    projectLink: "",
    image: ImageTen,
  },*/
];

const filteroptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Web Development",
    id: 2,
  },
  {
    label: "DSA",
    id: 3,
  },
];

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li className={option.id === filterValue && 'active'} onClick={() => setFiltervalue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

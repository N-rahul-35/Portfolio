import React from "react";
// import PageHeaderContent from "../../Components/pageHeadercontent";
// import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../Images/image1.jpg";
import ImageTwo from "../../Images/image2.jpg";
import ImageThree from "../../Images/image3.jpg";
import ImageFour from "../../Images/image4.jpg";
import ImageFive from "../../Images/image5.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Amazon_clone",
    image: ImageOne,
    link: "https://itb074.github.io/Amazon_clone/",
  },
  {
    id: 3,
    name: "Movie App",
    link: "https://movie-app-two-flax.vercel.app/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Street light fault prediction",
    image: ImageThree,
    link: "https://github.com/itb074/street_light_fault_prediction",
  },
  {
    id: 2,
    name: "Road Accident Analysis",
    image: ImageFour,

    link: "https://github.com/itb074/Road-Accident-Analysis",
  },
  // {
  //   id: 3,
  //   name: "Shopping cart design",
  //   image: ImageFive,
  //   link: "",
  // },
];

const filterData = [
  {
    filterId: 1,
    label: "All My Projects",
  },
  // {
  //   filterId: 2,
  //   label: "Developement",
  // },
  // {
  //   filterId: 3,
  //   label: "Design",
  // },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      
      <div className="portfolio__content">
        { <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>  }
        <div className="Portfolio__title"> 
          
        </div>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
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
};
export default Portfolio;


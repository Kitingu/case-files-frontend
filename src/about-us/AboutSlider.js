import React, { useEffect, useState } from "react";
import "../assets/aboutSlider.scss";

import back from "../images/back.png";
import next from "../images/next.png";
const data = [
  {
    header: "Provide1 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide2 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide3 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide4 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide5 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide6 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
  {
    header: "Provide7 insights from research into the law inpractice",
    content:
      "in conflict and crisis settings in Eastern Africa, where most people only have access to localcourts and where custmary or religious laws and authoritiesoften command legitimacy",
  },
];
export default () => {
  const [slideData, setSlideData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    if (window.screen.width < 600) {
      setSlideData(data.slice(page, page + 1));
      setItemsPerSlide(1);
    }
    if (window.screen.width > 600 && window.screen.width < 900) {
      setSlideData(data.slice(page, page + 2));
      setItemsPerSlide(2);
    }
    if (window.screen.width > 900) {
      setSlideData(data.slice(page, page + 3));
      setItemsPerSlide(3);
    }
  }, [page]);
  console.log(slideData);

  return (
    <div className="sliderContainer">
      <button
        onClick={() => {
          page > 0 && setPage(page - 1);
        }}
        className="controlButton"
      >
        <img src={back} alt="back" />
      </button>{" "}
      <div className="slides">
        {slideData.map((slide) => (
          <div className="slide">
            <p>
              <strong>{slide.header} </strong>
              {slide.content}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          page < data.length - itemPerSlide && setPage(page + 1);
        }}
        className="controlButton"
      >
        <img src={next} alt="next" />
      </button>
    </div>
  );
};

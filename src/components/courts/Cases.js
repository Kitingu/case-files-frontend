import React, { useState } from "react";
import "../../assets/courts/cases.scss";
import Pagination from "custom_react_pages";
import back from "../../images/back.png";
import next from "../../images/next.png";
import ShowMore from "react-show-more-text";
import data from "./data";
import { Link } from "react-router-dom";
export default () => {
  const [head, setHead] = useState(0);
  const [contentHead, setContentHead] = useState("");

  return (
    <div className="casesContainer">
      <div className="header">
        {data.map((country, index) => (
          <button
            style={head === index ? { background: "rgb(68, 56, 121)" } : {}}
            type="button"
            onClick={() => setHead(0)}
          >
            <span className="country">{country.country}</span>
            <span
              className="border"
              style={head === index ? { background: "#fff" } : {}}
            />
          </button>
        ))}
      </div>
      <Pagination
        itemsPerPage={4}
        activePageStyle={{ backgroundColor: "#7285a5", color: "#fff" }}
        next={<img src={next} alt="next" />}
        prev={<img src={back} alt="back" />}
        data={data[head].cases}
        pageButtons={10}
        onePage={(court, index) => (
          <div>
            <h2>{court.title}</h2>
            <h4>{court.court}</h4>
            <p>Recorded by observer {court.observer}</p>
            <h4>Summary</h4>
            <p>{court.summary}</p>
            {contentHead === court.id && (
              <>
                <h3>Comment</h3>
                <p> {court.comment}</p>
              </>
            )}
            <div>
              <button
                onClick={() =>
                  setContentHead(contentHead === court.id ? "" : court.id)
                }
                type="button"
              >
                {contentHead === court.id ? "ShowLess" : "ShowMore"}
              </button>
              <button type="button">Download</button>
              <button type="button">Download</button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

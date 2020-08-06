import React, { useState } from "react";
import "../../assets/courts/cases.scss";
import Pagination from "custom_react_pages";
import back from "../../images/back.png";
import next from "../../images/next.png";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default () => {
  const [head, setHead] = useState(0);
  const [contentHead, setContentHead] = useState("");

  return (
    <div className="casesContainer">
      <div className="header">
        {data.map((country, index) => (
          <button
            style={head === index ? { background: 'rgb(68, 56, 121)' } : {}}
            type="button"
            onClick={() => setHead(0)}
          >
            <span className="country">{country.country}</span>
            <span
              className="border"
              style={head === index ? { background: '#fff' } : {}}
            />
          </button>
        ))}
      </div>
      <Pagination
        itemsPerPage={4}
        activePageStyle={{ backgroundColor: '#7285a5', color: '#fff' }}
        next={<img src={next} alt="next" />}
        prev={<img src={back} alt="back" />}
        data={data[head].cases}
        pageButtons={10}
        onePage={(court, index) => (
          <div className="court">
            <h2>{court.title}</h2>
            <h4>{court.court}</h4>
            <p className="observer">Recorded by observer {court.observer}</p>
            <h4>Summary</h4>
            <p>{court.summary}</p>
            {contentHead === court.id && (
              <>
                <h4>Comment</h4>
                <p> {court.comment}</p>
              </>
            )}
            <div className="download-buttons">
              <button
                onClick={() =>
                  setContentHead(contentHead === court.id ? '' : court.id)
                }
                type="button"
              >
                {contentHead === court.id ? 'Read Less' : 'Read More'}
              </button>
              <button type="button"><a href={court.docUrl}>  <FontAwesomeIcon icon="file-word"/>  Download</a> </button>
              <button type="button"><a href={court.pdfUrl}> <FontAwesomeIcon icon="file-pdf"/> Download</a> </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

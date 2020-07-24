import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from 'custom_react_pages';
import back from '../../images/back.png';
import next from '../../images/next.png';
import '../../assets/archive/archive.scss';
import '../../assets/courts/cases.scss';
import CourtsHero from '../courts/CourtsHero';
import heroImage from '../../images/war.jpg';
import archivesData from './data';

const towns = [
  'Case Summary archive reports',
  'Juba',
  'Juba POC',
  'Nimule',
  'Rumbek',
  'Torit',
  'Wau',
  'Yambio',
  'Yei',
];
const Archive = () => {
  const [current, setCurrent] = useState('Juba');
  console.log(current);

  return (
    <>
      <CourtsHero backgroundImage={heroImage} />
      <div className="jumbotron archives">
        <div className="side-bar">
          <h3>Legal Activists</h3>
          {towns.map((town) => {
            let count = 0;
            archivesData.forEach((archive) => {
              if (archive.location === town) {
                count += 1;
              }
            });
            return (
              <p className={`location active-${town === current}`} onClick={() => setCurrent(town)}>
                {town} ({count})
              </p>
            );
          })}
        </div>
        <div className="main-content">
          <Pagination
            itemsPerPage={4}
            activePageStyle={{ backgroundColor: '#7285a5', color: '#fff' }}
            next={<img src={next} alt="next" /> }
            prev={<img src={back} alt="back" />}
            pageButtons={10}
            data={archivesData.filter(
              (archive) => archive.location === current
            )}
            onePage={(archive, index) => (
              
              <div className="archive">
                <h3>{archive.name}</h3>
                <p>{archive.summary}</p>
                {archive.documents.map((doc) => {
                  return (
                    <div className="download-buttons">
                      <button type="button">
                        <a href={doc.doc_url}>
                          {' '}
                          <FontAwesomeIcon icon="file-word" /> Download
                        </a>{' '}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Archive;

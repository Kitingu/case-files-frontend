/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from 'custom_react_pages';
import back from '../../images/back.png';
import next from '../../images/next.png';
import '../../assets/archive/archive.scss';
import '../../assets/courts/cases.scss';
import CourtsHero from '../courts/CourtsHero';
import ArchivesHero from '../../images/Archives.png';
import archivesData from './data';
import axios from 'axios';

const towns = [
  'Case summary archive reports',
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
  const pdfs = /([a-zA-Z0-9\s_\\.\-\(\):])+(.pdf)$/;
  const token = localStorage.getItem('auth_access_token');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getData = async () => {
    // eslint-disable-next-line no-unused-vars
    const data = await axios.get(
      'https://app.justicenetworksea.org/api/v1/cases',
      config
    );
  };
  useEffect(() => {
    getData();
  });

  return (
    <>
      <CourtsHero backgroundImage={ArchivesHero} />
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
              <p
                key={town}
                className={`location active-${town === current}`}
                onClick={() => setCurrent(town)}
              >
                {town} ({count})
              </p>
            );
          })}
        </div>
        <div className="main-content">
          {current === 'Case summary archive reports' ? (
            <div>
              {archivesData
                .filter(
                  (archive) =>
                    archive.location === 'Case summary archive reports'
                )
                .map((newArchive) => {
                  return (
                    <div key={newArchive.id} className="case-summary">
                      <p>
                        <strong>{newArchive.name} </strong>
                      </p>
                      <a href={newArchive.documents[0].doc_url}>
                        {pdfs.test(newArchive.documents[0].doc_url) ? (
                          <FontAwesomeIcon icon="file-pdf" />
                        ) : (
                          <FontAwesomeIcon icon="file-word" />
                        )}{' '}
                        download
                      </a>
                      {console.log(newArchive.documents[0].doc_url)}
                    </div>
                  );
                })}
            </div>
          ) : (
            <Pagination
              itemsPerPage={4}
              activePageStyle={{ backgroundColor: '#7285a5', color: '#fff' }}
              next={<img src={next} alt="next" />}
              prev={<img src={back} alt="back" />}
              pageButtons={10}
              data={archivesData.filter(
                (archive) => archive.location === current
              )}
              onePage={(archive, index) => (
                <div key={index} className="archive">
                  <h3>{archive.name}</h3>
                  <p>{archive.summary}</p>
                  {archive.documents.map((doc) => {
                    return (
                      <div key={doc.doc_url} className="download-buttons">
                        <button type="button">
                          <a href={doc.doc_url}>
                            {' '}
                            {pdfs.test(doc.doc_url) ? (
                              <FontAwesomeIcon icon="file-pdf" />
                            ) : (
                              <FontAwesomeIcon icon="file-word" />
                            )}{' '}
                            Download
                          </a>{' '}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Archive;

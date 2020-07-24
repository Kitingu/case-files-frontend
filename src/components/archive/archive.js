import React from 'react';
import '../../assets/archive/archive.scss';
import CourtsHero from '../courts/CourtsHero';
import heroImage from '../../images/war.jpg';
const towns = [
  {
    juba: 13,
    'Juba POC': 12,
    Nimule: 11,
    Rumbek: 9,
    Torit: 9,
    Wau: 9,
    Yambio: 9,
    Yei: 9,
  },
];
const Archive = () => {
  return (
    <>
      <CourtsHero backgroundImage={heroImage} />
      <div className="jumbotron archives">
        <div className="side-bar">
          <h3>Legal Activists</h3>
          <li>Case Summary archive reports (13)</li>
          {/* {towns.keys(town =>{
            {console.log(town)}
            return (
            <p>{town}</p>
            )
          })} */}
        </div>
        <div className="main-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            dicta voluptate quas totam autem aliquam pariatur voluptatibus
            repellendus blanditiis earum cupiditate voluptatum, culpa
            accusantium laborum non fuga beatae vero illo.
          </p>
          <div className="download-buttons">
            <button> Download </button>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            dicta voluptate quas totam autem aliquam pariatur voluptatibus
            repellendus blanditiis earum cupiditate voluptatum, culpa
            accusantium laborum non fuga beatae vero illo.
          </p>
          <div className="download-buttons">
            <button> Download </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Archive;

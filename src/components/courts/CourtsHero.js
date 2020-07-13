import React from 'react'

const CourtsHero = (props) => {
    return (
      <div
        style={{ background: `url(${props.backgroundImage})` }}
        className="hero-image hero-courts"
      ></div>
    );
}

export default CourtsHero

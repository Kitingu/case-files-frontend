import React from "react";

export default ({ onClick, type, name, className }) => (
  <button className={className} onClick={onClick} type={type} name={name}>
    {name}
  </button>
);

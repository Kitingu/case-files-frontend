import React from "react";

export default ({ onSubmit, onChange, type, name, placeholder, className, id }) => (
  <input className={className} id={id} onChange={onChange} type={type} name={name} placeholder={placeholder} />
);

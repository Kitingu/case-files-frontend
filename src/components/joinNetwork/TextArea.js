import React from "react";

export default ({ onSubmit, onChange, type, name, placeholder, className }) => (
  <textarea className={className} onChange={onChange} type={type} name={name} placeholder={placeholder} />
);

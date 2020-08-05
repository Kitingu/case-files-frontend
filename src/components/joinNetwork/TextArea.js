import React from "react";

export default ({ onSubmit, onChange, type, name, placeholder, className, register }) => (
  <textarea className={className} onChange={onChange} type={type} name={name} ref={register} placeholder={placeholder} />
);

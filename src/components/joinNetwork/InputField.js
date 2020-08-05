import React from "react";

export default ({ onSubmit, onChange, type, name, placeholder, className, id, register }) => (
  <input className={className} id={id} onChange={onChange} type={type} ref={register} name={name} placeholder={placeholder} />
);

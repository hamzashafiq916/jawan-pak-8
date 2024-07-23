import React from "react";

const InputField = ({ label, type, onchange, placeholder, value }) => {
  return (
    <>
      <form action="">
        <label htmlFor="">{label}</label><br></br>
        <input type={type} onChange={onchange} placeholder={placeholder} value={value} required/>
      </form>
    </>
  );
};

export default InputField;

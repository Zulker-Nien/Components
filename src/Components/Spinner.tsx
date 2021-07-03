import React from "react";
import "./spinner.css";
const Spinner = (props: any) => {
  return (
    <>
      {props.size === "small" ? (
        <div className="Spinner0"></div>
      ) : props.size === "big" ? (
        <div className="Spinner1"></div>
      ) : props.size === "huge" ? (
        <div className="Spinner2"></div>
      ) : (
        <div className="Spinner2"></div>
      )}
    </>
  );
};

export default Spinner;

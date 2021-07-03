import React from "react";
import "./button.css";
const Button = (props: any) => {
  let kolor = "#fdfdfd";
  let color = `${props.color}`;
  {
    color === "danger"
      ? (kolor = "darkred")
      : color === "warning"
      ? (kolor = "goldenrod")
      : (kolor = "blue");
  }

  return (
    <>
      {props.appearance === "sharp" && props.size === "large" ? (
        <div className="Button ButtonL" style={{ backgroundColor: `${kolor}` }}>
          <h1>Button</h1>
        </div>
      ) : props.appearance === "sharp" && props.size === "small" ? (
        <div className="Button ButtonS" style={{ backgroundColor: `${kolor}` }}>
          <h3>Button</h3>
        </div>
      ) : props.appearance === "rounded" && props.size === "large" ? (
        <div
          className="Button ButtonL"
          style={{ backgroundColor: `${kolor}`, borderRadius: "30px" }}
        >
          <h1>Button</h1>
        </div>
      ) : props.appearance === "rounded" && props.size === "small" ? (
        <div
          className="Button ButtonS"
          style={{ backgroundColor: `${kolor}`, borderRadius: "30px" }}
        >
          <h3>Button</h3>
        </div>
      ) : (
        <div className="Button" style={{ backgroundColor: `${kolor}` }}>
          <h3>Button</h3>
        </div>
      )}
    </>
  );
};

export default Button;

import React from "react";
import "./avatar.css";
const Avatar = (props: any) => {
  return (
    <>
      {props.appearance === "circle" && props.size==="large" ? (
        <div className="circle" style={{ height: "200px",width: "200px" }}>
          <img className="img"src={props.src} alt="avatar" />
        </div>
      ) : props.appearance === "circle" && props.size ==="small" ? (
        <div className="circle" style={{ height: "50px",width: "50px"  }}>
          <img className="img1"src={props.src} alt="avatar" />
        </div>
      ) : props.appearance === "square" && props.size==="large" ?(
        <div className="square" style={{ height: "200px",width: "200px" }}>
          <img className="img"src={props.src} alt="avatar" />
        </div>
      ) : props.appearance ==="square" && props.size ==="small" ? (
        <div className="square" style={{ height: "50px",width: "50px" }}>
          <img className="img1"src={props.src} alt="avatar" />
        </div>
      ): <div className="square" style={{ height: "100px",width: "100px" }}>
      <img className="img1"src={props.src} alt="avatar" />
    </div>}
    </>
  );
};

export default Avatar;

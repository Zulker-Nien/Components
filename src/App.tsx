import React from "react";
import Avatar from "./Components/Avatar";
import Button from "./Components/Button";
import Spinner from "./Components/Spinner";
import IMG from "./Components/avatar.png";

const App = () => {
  return (
    <div>
      {/* AVATAR COMPONENT */}
      <Avatar
        appearance="circle" //circle or square
        src={IMG} //link to image
        size="small" //large or small
      />


      {/* Button COMPONENT */}
      <Button
        appearance="rounded" //sharp or rounded
        size="small" //large or small
        color="warning" // danger , warning, primary
      />


      {/* Spinner COMPONENT */}
      <Spinner
        size="huge" //small, big, huge
      />
    </div>
  );
};

export default App;

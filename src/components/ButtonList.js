import React from "react";
import Button from "./Button";

let ButtonLists = [
  "All",
  "Plip plip",
  "yeahTube",
  "JK-tamil",
  "madan",
  "madan-gowri",
];

const ButtonList = () => {
  return (
    <div>
      {ButtonLists?.map((button, index) => (
        <Button name={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;

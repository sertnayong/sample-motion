import React, { useState } from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { transform } from "typescript";

type Props = {};

const getTransformStyles = (isMouseEntered: boolean, index: number) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  transitionDelay: `${index * 0.02}s`
})

const FancyButton = (props: Props) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  console.log("isMouseEntered>> ", isMouseEntered);

  return (
    <button
      className="fancy-button"
      onMouseEnter={() => {
        setIsMouseEntered(true);
      }}
      onMouseLeave={() => {
        setIsMouseEntered(false);
      }}
    >
      <span className="fancy-button-text-container">
        {splitStringUsingRegex("Fancy Button").map((character, index) => (
          <span className="fancy-button-char-container" key={index}>
            <span style={getTransformStyles(isMouseEntered, index)}>{character}</span>
            <span style={getTransformStyles(isMouseEntered, index)}>{character}</span>
          </span>
        ))}
      </span>
    </button>
  );
};

export default FancyButton;

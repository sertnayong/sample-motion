import { motion } from "framer-motion";
import React from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import TextSpan from "../utils/textSpan";


const TextSping = () => {
  const sentenc = "Sert Nayong".split("");

  return (
    <>
      <div>
        {sentenc.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </div>
    </>
  );
};

export default TextSping;

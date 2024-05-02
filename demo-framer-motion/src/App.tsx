/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import FancyButton from "./components/FancyButton";
import splitStringUsingRegex from "./utils/splitStringUsingRegex";
import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import TextSpan from "./utils/textSpan";
import Scrolling from "./components/Scrolling";
import AnimateBox from "./components/AnimateBox";
import TextSping from "./components/TextSping";
import TextSlide from "./components/TextSlide";
import IconButton from "./components/IconButton";

import {Facebook, GitHub, Instagram, Twitter, Youtube } from 'react-feather'

function App() {

  return (
    <>
      <FancyButton />
      <TextSlide/>
      <TextSping/>
      <AnimateBox />
      <Scrolling />
      <div className="flex items-center gap-4">
        <IconButton text="Github">
          <GitHub size={20} />
        </IconButton>

        <IconButton text="Facebook" color="bg-blue-500">
          <Facebook size={20} />
        </IconButton>

        <IconButton text="Instagram" color="bg-gradient-to-tr from-yellow-500 to purple-500 via-pink-500">
          <Instagram size={20} />
        </IconButton>

        <IconButton text="Twitter" color="bg-sky-500">
          <Twitter size={20} />
        </IconButton>
        
        <IconButton text="Subscribe" color="bg-red-500">
          <Youtube size={20} />
        </IconButton>
      </div>
    </>
  );
}

export default App;

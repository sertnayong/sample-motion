import { motion } from 'framer-motion';
import React from 'react'
import splitStringUsingRegex from '../utils/splitStringUsingRegex';

type Props = {}

const heading = "Elegant Text Reveal";
const text =
  "In This tutorial I'll be teaching you how to create beautiful letter-by-letter text reveal animation. We'll use React and Framer Motion library for the declarative approach on defining animations.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const TextSlide = (props: Props) => {
    const headingChars = splitStringUsingRegex(heading);
    const textChars = splitStringUsingRegex(text);
  
  return (
    <div className="mt-5">
    <motion.h1
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      className='text-2xl font-bold'
    >
      {headingChars.map((char) => (
        <motion.span
          key={char}
          transition={{ duration: 0.5 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
    <motion.p
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.02 }}
      className='text-xl'
    >
      {textChars.map((char) => (
        <motion.span
          key={char}
          transition={{ duration: 0.35 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  </div>

  )
}

export default TextSlide
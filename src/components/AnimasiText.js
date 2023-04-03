import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  inital: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  inital: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimasiText = ({ text, className = '' }) => {
  return (
    <div className="flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center dark:text-light sm:py-0">
      <motion.h1
        className={`dark:text-light inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        inital="initail"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block "
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimasiText;

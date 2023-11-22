import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

export default function Loader() {
  return (
    <motion.div
      className='flex h-screen w-full items-center justify-center'
      variants={loadingContainerVariants}
      initial='start'
      animate='end'
    >
      <motion.div
        className='aspect-square h-4 w-4 rounded-full bg-main'
        variants={loadingCircleVariants}
        transition={{
          duration: 0.5,
          repeatType: "reverse",
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className='mx-2 aspect-square h-4 w-4 rounded-full bg-main'
        variants={loadingCircleVariants}
        transition={{
          duration: 0.5,
          repeatType: "reverse",
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className='aspect-square h-4 w-4 rounded-full bg-main'
        variants={loadingCircleVariants}
        transition={{
          duration: 0.5,
          repeatType: "reverse",
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

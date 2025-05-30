import React from 'react';
import { motion } from 'motion/react';

const AnimatedText = ({ text }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ marginRight: '5px' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedText;

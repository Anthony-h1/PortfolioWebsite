import Image from 'next/image';
import React from 'react';
import { assets } from '../../assets/assets';
import { motion } from 'motion/react';
import AnimatedText from './AnimatedText';

const Header = ({isDarkMode , setIsDarkMode}) => {
  return (
    <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-8">
      <div>
        
      </div>
      <AnimatedText text="Hello! I'm Anthony Ho "/> 
      <motion.h3 
      initial={{y: -20, opacity:0}}
      whileInView={{y: 0, opacity:1 }}
      transition={{duration: 0.6, delay:0.3}}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
       <Image src={assets.hand_icon} alt="" className="w-8" />
      </motion.h3>
      <h1 className="text-3x1 sm:text-6x1 lg:text-[59px] font-Ovo">
        A guy who likes to solve problems.</h1>
      <p className="max-w-2x1 mx-auto font-Ovo ">
        A fresh graduate from Malaysia who's passionate in self-improvement.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.a 
        initial={{y: 30, opacity:0}}
        whileInView={{y: 0, opacity:1 }}
        transition={{duration: 0.6, delay:0.8}} 
          href="https://linktr.ee/anthonyyho"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me{' '}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
         initial={{y: 30, opacity:0}}
         whileInView={{y: 0, opacity:1 }}
         transition={{duration: 0.6, delay:1}} 
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 dark:text-black bg-white flex items-center gap-2"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

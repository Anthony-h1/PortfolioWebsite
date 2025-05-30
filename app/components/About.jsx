import { assets, infoList } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';
import { toolsData } from '../../assets/assets';
import { motion } from 'motion/react';

function About({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 
      scroll-mt-20"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3x1 max-w-none">
          <Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3x1"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2x1 font-Ovo">
            I am a developer seeking constant improvements. Throughout my study
            years, I've had worked with different individuals to create
            innovative application. I'm looking for a place where I can provide
            my skills.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 dark:border-white rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} />
                <h3 className="my-4 font-bold text-gray-700 dark:text-white ">
                  {title}
                  <p className="text-gray-600 dark:text-white text-sm">
                    {description}{' '}
                  </p>
                </h3>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700  dark:text-white font-Ovo font-bold">
            {' '}
            Tools I Use{' '}
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

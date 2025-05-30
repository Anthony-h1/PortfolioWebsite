import React from 'react';
import { workData } from '../../assets/assets';
import Image from 'next/image';
import { assets } from '../../assets/assets';

export const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4> */}
      <h2 className="text-center text-5xl font-Ovo">My latest projects</h2>
      <p className="text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo">
        You can find my past projects at here! Welcome to explore all of it,
        take your time.
      </p>

      <div className="grid grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white dark:text-black w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-Ovo font-light">{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="border rounded-full px-2 border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition mx-1">
                <Image src={assets.send_icon} alt="send icon" className="w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] dark:text-white border-gray-700 dark:border-white rounded-full
        py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show more{' '}
        <Image
          src={assets.right_arrow_bold}
          alt="Right Arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;

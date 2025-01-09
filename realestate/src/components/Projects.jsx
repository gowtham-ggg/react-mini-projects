import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import {motion} from "framer-motion"
const Projects = () => {
  const [currentIndex, setCurretIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(()=>{
    const updateCardToShow = ()=>{
      if(window.innerWidth >= 1024){
        setCardToShow(projectsData.length);
      }
      else{
        setCardToShow(1);
      };
    }
      updateCardToShow();

      window.addEventListener('resize', updateCardToShow)
      return ()=> window.removeEventListener('resize', updateCardToShow)

  },[])


  const nextProject = () => {
    setCurretIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurretIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
    initial={{ opacity: 0, x:-200 }}
    transition={{duration: 1}}
    whileInView={{opacity : 1, x:0}}
    viewport={{once : true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{' '}
        <span className="underline underline-offset-4 decoration-1">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

import mckp from "/9.webp";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Mockup = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const progress = scrollY / (documentHeight - windowHeight);
      setScrollProgress(progress);
      controls.start({ x: progress * -800 }); // Adjust multiplier for desired effect
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [controls]);

  return (
    <div
      className="bg-cover bg-center h-screen bg-[#FF0007] overflow-hidden"
    >
      <motion.div
      className="sm:w-[200%] sm:h-auto w-[390%] "
        animate={controls}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <motion.img
          src={mckp}
          alt="Parallax Image"
          className="sm:w-[50%] sm:h-auto sm:m-auto w-[200%]"
        />
      </motion.div>
    </div>
  );
};

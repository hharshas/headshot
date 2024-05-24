import "./styles.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";


const galleryData = [
    {
      id: 1,
      src: {img1},
      title: "Original",
      subtitle: "Drink the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      id: 2,
      src: {img2},
      title: "Kicks",
      subtitle: "Drink the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      id: 3,
      src: {img3},
      title: "Guts",
      subtitle: "Drink the Beauty",
      category: "Shooting / Adv.Campaing",
    },
    {
      id: 4,
      src: {img4},
      title: "Fire",
      subtitle: "Drink the Beauty",
      category: "Shooting / Adv.Campaing",
    },
  ]  

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -200);
  return (
    <scroller_section className = "w-screen h-screen bg-black">
      <div className="w-full h-full" ref={ref} style={{ 
        backgroundImage: `url(/img${id}.jpeg)`, 
        backgroundSize: 'cover', // Optionally set background size
        backgroundPosition: 'center', // Optionally set background size
        backgroundRepeat: 'no-repeat' // Optionally set background repeat
      }}>
        {/* <img className="w-full opacity-80 bg-black" src={`/img${id}.jpeg`} alt="A London skyscraper" /> */}
      </div>
      <motion.h2 className="otffont tracking-widest sm:text-[250px] text-[90px] absolute text-white" style={{ y }}>{galleryData[id-1].title}</motion.h2>
    </scroller_section>
  );
}   

export default function Scroller() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="base">
      {[1, 2, 3, 4].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}

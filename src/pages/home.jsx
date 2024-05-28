import React from "react";
import bg from "/2.webp";
import bottle from "/4sus.webp";
import title from "/1.webp";
import context from "/10.webp";
import caf from "/8.webp";
import { motion } from "framer-motion";
import { Section } from "../App";
export const Home = () => {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="-z-20 h-screen w-screen absolute"
        src={bg}
        alt="Background"
      />
      <Section>
        <img
          className="-z-10 sm:top-[200px] top-[160px] sm:w-[300px] w-[160px] sm:h-auto sm:right-[560px] right-[-10px] absolute "
          src={bottle}
          alt="Bottle"
        />
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <img
            className="-z-20 sm:top-1 top-[80px] sm:w-[1300px] w-[1000px] sm:h-auto sm:left-[136px] left-[10px] absolute"
            src={title}
            alt="CREATIVE JUICE"
          />
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          {/* <div className="sm:text-[28px] spratanotf flex justify-start text-white font-bold">
            Everybody longs to belong. <br />
            We stand out. For the <br />
            rebel among us, an energy <br /> drink to blow your mind.
          </div> */}
          <img
            className="-z-20 sm:top-96 top-[300px] sm:w-[500px] w-[200px] sm:h-auto sm:left-[160px] left-[10px] absolute hidden sm:block"
            src={context}
            alt="context"
          />
          <div className="sm:text-[28px] text-[20px] sm:hidden top-[260px] left-5 absolute spratanotf leading-tight text-white font-bold">
            Everybody longs to <br />
            belong. We stand out. <br/> <br/>
            For the  rebels among <br />
            us, an energy  drink <br/> 
            to blow your mind.
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.5,
          }}
        >
          <img
            className="-z-10 sm:top-[500px] top-[560px] sm:w-[300px] w-[180px] sm:h-auto sm:right-[40px] right-[1px] absolute "
            src={caf}
            alt="caf"
          />
        </motion.div>
      </Section>
      {/* <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, transition: { delay: 1 }, y: 0 }}
        >
          <img
            className="-z-10 sm:top-[250px] top-[200px] sm:w-[240px] w-[140px] sm:h-auto sm:right-[640px] right-[120px] absolute "
            src={bottle}
            alt="Bottle"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1.5 } }}
        >
          <img
            className="-z-20 sm:top-1 top-[100px] sm:w-[1300px] w-[1000px] sm:h-auto sm:left-[150px] left-[10px] absolute"
            src={title}
            alt="CREATIVE JUICE"
          />
        </motion.div>
        <motion.div
          className="sm:ml-[200px] absolute sm:top-[440px] top-[470px] sm:left-0 left-[90px] sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 2 } }}
        >
          <div className="sm:text-[28px] flex justify-start text-white font-bold">
            Everybody longs to belong. <br />
            We stand out. For the <br />
            rebel among us, an energy <br /> drink to blow your mind.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, transition: { delay: 1.5 } }}
        >
          <img
            className="-z-10 sm:top-[500px] top-[0px] sm:w-[300px] w-[180px] sm:h-auto sm:right-[40px] right-[180px] absolute "
            src={caf}
            alt="caf"
          />
        </motion.div>
      </div> */}
    </div>
  );
};

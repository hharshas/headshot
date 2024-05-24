import { useState } from 'react'
import './App.css'

import {motion} from "framer-motion"
import { Home } from './pages/home';
import { TickerPage } from './pages/ticker';
import ContactComponent from "./pages/Contact/ContactContainer"
import Scroller from './pages/scroller';
import FooterT from './pages/footer';
import { AnimatePresence } from "framer-motion"
import { useLocomotiveScroll, usePreLoader } from "./hooks"
import CustomCursor from './pages/CustomCursor';
import Loader from './pages/Loader';
import {MyForm} from './pages/MyForm';
import ScrollToTop from "react-scroll-to-top";
import { Mockup } from './pages/mockup';


export const Section = (props) =>{
  const {children} = props;
  return (
      <motion.section className='z-0 relative'
      initial = {{ 
          opacity:0,
          y: 50,
      }}
      animate={{
          opacity :1,
          y:0,
          transition: {
              duration :1,
              delay: 0.6,
          }
      }}> {children} </motion.section>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const { preLoader } = usePreLoader({ isPreLoading: true, delay: 3 })

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <>
    
    <AnimatePresence>{preLoader ? <Loader /> : null}</AnimatePresence>
      <AnimatePresence>
      {!preLoader && (
         <div className='app'>
           {!isMobile && <CustomCursor />} 
           <Home />
           <TickerPage />
           <Scroller />
           {/* <ContactComponent /> */}
           <Mockup />
           <MyForm />
           <FooterT />
           <ScrollToTop smooth viewBox="0 0 18 18" svgPath='M4 8l5 -5l5 5l-1 1l-4 -4l-4 4ZM4 12l5 -5l5 5l-1 1l-4 -4l-4 4Z' style={{"backgroundColor" : 'yellow', "zIndex" : 4000, animation: 'bounceUpDown 2s ease infinite'}} width='40px' />

       </div>
      )}
      </AnimatePresence>
  </>
  )
}

export default App

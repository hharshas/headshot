import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const useLocomotiveScroll = (start) => {
  useEffect(() => {
    if (!start) return

    const scrollEl = document.getElementById("App")
    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      multiplier: 1,
      class: "is-reveal",
    })

    locoScroll.on("scroll", () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        }
        return null
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x
        }
        return null
      },
    })

    const lsUpdate = () => {
      if (locoScroll) locoScroll.update()
    }

    ScrollTrigger.addEventListener("refresh", lsUpdate)
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate)
        locoScroll.destroy()
        locoScroll = null
      }
    }
    // locoScroll.update()
  }, [start])

  return null
}

export default useLocomotiveScroll

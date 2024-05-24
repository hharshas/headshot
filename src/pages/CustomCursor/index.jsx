import { useEffect, useRef } from "react"
import styled from "styled-components"

const Cursor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  pointer-events: none;
  position: fixed;
  z-index: 2000;
  overflow: hidden;
  background: white;
  mix-blend-mode: difference;
  transform: translate3d(0, 0, 0);
  transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const CustomCursor = () => {
  const cursorRef = useRef(null)
  // prettier-ignore
  const positionRef = useRef([
    { mouseX: 0, mouseY: 0, destinationX: 0, destinationY: 0, distanceX: 0, distanceY: 0, key: -1, },
  ])

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      positionRef.current.mouseX = clientX - cursorRef.current.clientWidth / 2
      positionRef.current.mouseY = clientY - cursorRef.current.clientHeight / 2
    })
  }, [])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      // prettier-ignore
      const {mouseX, mouseY, destinationX, destinationY, distanceX, distanceY} = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      if (cursorRef && cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`
    }
    followMouse()
  }, [])

  return <Cursor ref={cursorRef} />
}

export default CustomCursor

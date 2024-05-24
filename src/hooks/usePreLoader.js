import { useEffect, useRef, useState } from "react"

const usePreLoader = ({ isPreLoading = false, delay = 0 }) => {
  const [preLoader, setPreLoader] = useState(isPreLoading)
  const [timer, setTimer] = useState(delay)
  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreLoader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) clear()
  }, [timer])

  return { preLoader }
}

export default usePreLoader

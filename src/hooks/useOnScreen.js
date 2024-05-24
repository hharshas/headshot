import { useEffect, useState } from "react"

const useOnScreen = (ref, threshold = 0.3) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting ?? false),
      { rootMargin: "0px", threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold])

  return isIntersecting
}

export default useOnScreen

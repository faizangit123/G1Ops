import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) {
      setIsTouchDevice(true)
      return
    }

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = () => setIsVisible(true)
    const handleLeave = () => setIsVisible(false)

    // Detect hoverable elements
    const handleElementHover = () => {
      const hoverTargets = document.querySelectorAll('a, button, [role="button"], .cursor-hover')
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseenter', handleEnter)
    document.addEventListener('mouseleave', handleLeave)

    // Re-attach on DOM changes
    const observer = new MutationObserver(handleElementHover)
    observer.observe(document.body, { childList: true, subtree: true })
    handleElementHover()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseenter', handleEnter)
      document.removeEventListener('mouseleave', handleLeave)
      observer.disconnect()
    }
  }, [isVisible])

  if (isTouchDevice) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-red rounded-full pointer-events-none z-[200] mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-red/40 rounded-full pointer-events-none z-[200] mix-blend-difference"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  )
}

export default CustomCursor

import { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }) => {
  // We rely on CSS scroll-behavior: smooth in index.css
  // This wrapper just ensures the page is ready
  return (
    <div className="relative">
      {children}
    </div>
  )
}

export default SmoothScroll

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleVisibility = () => (window.pageYOffset > 300) ? setVisible(true) : setVisible(false)
    document.addEventListener("scroll", handleVisibility)
    return () => {
      document.removeEventListener("scroll", handleVisibility)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="scroll-to-top">
      {visible && (
        <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={() => scrollToTop()} />
      )}
    </div>
  );
}

export default ScrollToTop
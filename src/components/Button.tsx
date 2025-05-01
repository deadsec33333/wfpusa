import * as React from 'react';

import { useState } from "react"

export const Button = ({ href, text }: { href: string, text: string }): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
    }, 600)
  }

  return (
    <button
      className={`
        bg-[#e31837] text-white font-semibold rounded-md px-4 py-2 
        flex items-center gap-1.5 transition-all duration-300
        hover:bg-[#c41530] relative overflow-hidden max-w-32 w-full
        ${isClicked ? "animate-pulse" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {isClicked && <span className="absolute inset-0 bg-white opacity-30 rounded-md animate-ripple"></span>}

      <span className={`font-bold text-center tracking-wide w-full ${isHovered ? "animate-pulse" : ""}`}>
        <a className='text-center' href={href}>{text}</a></span>
    </button>
  );
}

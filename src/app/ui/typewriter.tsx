"use client"

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  font?: string;
}

function TypewriterEffect({ text, speed = 75, font = 'monospace' }: TypewriterProps) {
  const [currentChar, setCurrentChar] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const typeWriter = () => {
      if (currentChar < text.length) {
        setCurrentChar(currentChar + 1);
      }
    };

    const interval = setInterval(typeWriter, speed);

    return () => clearInterval(interval);
  }, [text, speed, currentChar]);

  return (
    <span ref={textRef} style={{ fontFamily: font }}>
      {text.substring(0, currentChar)}
    </span>
  );
}


export default TypewriterEffect;

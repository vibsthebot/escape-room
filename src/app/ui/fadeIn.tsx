"use client"

import React, { useState, useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  waitBeforeFade?: number; // Optional wait time in milliseconds (defaults to 0)
}

const FadeIn: React.FC<FadeInProps> = ({ children, waitBeforeFade = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), waitBeforeFade);
    return () => clearTimeout(timeout);
  }, [waitBeforeFade]);

  return (
    <div className={isVisible ? 'visible' : 'hidden'}>
      {children}
    </div>
  );
};

export default FadeIn;

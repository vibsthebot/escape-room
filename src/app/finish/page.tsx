"use client"

import React, { useEffect, useState } from 'react';
import TypewriterEffect from '../ui/typewriter';
import FadeIn from '../ui/fadeIn';

export default function Page() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const shakeStyle = shake ? {
    animation: 'shake 0.5s ease-in-out'
  } : {};

  return (
    <main style={shakeStyle} className="w-full h-full flex">
        <div className='basis-1/3'></div>
        <div className='basis-1/3'>
            <TypewriterEffect
            text="As the escape pod detaches from the ship, you feel it shake violently. The pod’s engine ignites and blasts you far from the surface of planet WASP-12b, where the remnants of your beloved ship are lost forever."
        />
        <FadeIn waitBeforeFade={17000}>
            <h1 className='text-5xl items-center justify-center py-11'>Congratulations! You have beat the game!</h1>
        </FadeIn>
        </div>
    </main>
  );
}

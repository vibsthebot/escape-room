import React, { useEffect, useState } from 'react';

const ShakeScreen: React.FC = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500); // Shake lasts 0.5 seconds
    }, 10000); // Wait for 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const shakeStyle = shake ? {
    animation: 'shake 0.5s ease-in-out'
  } : {};

  return (
    <div
      style={shakeStyle}
      className="w-full h-full bg-gray-100"
    >
      {/* Content of the screen goes here */}
    </div>
  );
};

export default ShakeScreen;

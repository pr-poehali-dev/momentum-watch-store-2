import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="logo-reflection wave-animation">
        <div className="text-6xl md:text-8xl font-bold font-dior tracking-wider text-black">
          МММ
        </div>
      </div>
      <div className="text-2xl mt-2 tracking-widest font-dior">MOMENTUM</div>
    </div>
  );
};

export default Logo;

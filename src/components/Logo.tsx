import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="inline-block">
      <div className="text-center">
        <div className="logo-reflection wave-animation">
          <div className="text-5xl md:text-6xl font-bold tracking-widest">MMM</div>
        </div>
        <div className="mt-2 text-lg md:text-xl font-semibold tracking-wide">MOMENTUM</div>
      </div>
    </Link>
  );
};

export default Logo;

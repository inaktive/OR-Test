
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-obsidian py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-white leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;

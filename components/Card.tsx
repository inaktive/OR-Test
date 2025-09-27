
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  basePath: string;
}

const Card: React.FC<CardProps> = ({ slug, title, summary, imageUrl, basePath }) => {
  return (
    <Link 
      to={`${basePath}/${slug}`}
      className="group block bg-stone-dark rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-stone-light hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {summary}
        </p>
      </div>
    </Link>
  );
};

export default Card;

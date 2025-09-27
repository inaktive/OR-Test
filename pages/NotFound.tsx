
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20 bg-obsidian">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-8xl font-serif font-bold text-stone">404</h1>
        <h2 className="text-3xl font-serif text-white mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2">The requested resource could not be found.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="bg-stone hover:bg-stone-light text-white uppercase tracking-widest font-semibold px-8 py-3 transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-dark border-t border-stone">
      <div className="container mx-auto px-6 py-12 text-center text-gray-400">
        <div className="mb-6">
          <p className="font-serif text-lg italic">“Clarity in Complexity. Influence in Silence.”</p>
        </div>
        <div className="text-sm">
          <p>&copy; {currentYear} Obsidian Rowe. All Rights Reserved.</p>
          <div className="mt-4 space-x-6">
            <Link to="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <span className="text-stone">|</span>
            <Link to="#" className="hover:text-white transition-colors duration-300">Accessibility</Link>
             <span className="text-stone">|</span>
            <Link to="#" className="hover:text-white transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

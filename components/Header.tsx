
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Insights', path: '/insights' },
  { name: 'Client Results', path: '/client-results' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 text-sm uppercase tracking-widest transition-colors duration-300 ${
      isActive ? 'text-white border-b border-white' : 'text-gray-400 hover:text-white'
    }`;

  return (
    <header className="bg-obsidian/80 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-dark">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white">
            <img src="./public/OR-Transparent-Horizontal.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <h1 className="text-2xl font-serif font-semibold tracking-wider">OBSIDIAN ROWE</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Open navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-stone-dark">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

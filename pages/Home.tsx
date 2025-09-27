
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';
import { SERVICES_DATA, INSIGHTS_DATA, CLIENT_RESULTS_DATA } from '../constants';

interface HomeTileProps {
  to: string;
  title: string;
  description: string;
}

const HomeTile: React.FC<HomeTileProps> = ({ to, title, description }) => (
  <Link to={to} className="group relative block p-8 bg-stone-dark hover:bg-stone-light transition-colors duration-300">
    <h3 className="font-serif text-2xl text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <div className="absolute bottom-8 right-8 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300">
      <ArrowRightIcon />
    </div>
  </Link>
);


const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
           <img src="https://picsum.photos/1600/900?grayscale&blur=2" alt="Abstract background" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Clarity in Complexity.
            <br />
            Influence in Silence.
          </h1>
        </div>
      </div>

      {/* Tiles Section */}
      <div className="bg-obsidian py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone">
            <HomeTile 
              to="/services" 
              title="Services" 
              description="Strategic counsel and capabilities for a complex world." 
            />
            <HomeTile 
              to="/insights" 
              title="Insights" 
              description="Our perspective on the forces shaping the future." 
            />
            <HomeTile 
              to="/client-results" 
              title="Client Results" 
              description="Delivering impact where it matters most." 
            />
            <HomeTile 
              to="/contact" 
              title="Contact" 
              description="Begin the conversation." 
            />
          </div>
        </div>
      </div>
       {/* Optional Newsletter Signup */}
       <div className="bg-stone-dark py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="font-serif text-3xl text-white mb-4">Receive our Insights</h3>
          <p className="text-gray-400 mb-6">Occasional essays and frameworks delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Your email address" className="flex-grow bg-stone-light text-white placeholder-gray-500 px-4 py-3 border border-stone focus:outline-none focus:ring-2 focus:ring-stone-light focus:border-transparent"/>
            <button type="submit" className="bg-stone hover:bg-stone-light text-white uppercase tracking-widest px-8 py-3 font-semibold transition-colors duration-300">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

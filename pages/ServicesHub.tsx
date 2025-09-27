
import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { SERVICES_DATA } from '../constants';

const ServicesHub: React.FC = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="We provide discreet, high-impact advisory and advanced capability development to help leaders navigate their most critical challenges and opportunities."
      />
      <div className="py-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <Card
                key={service.slug}
                slug={service.slug}
                title={service.title}
                summary={service.summary}
                imageUrl={service.imageUrl}
                basePath="/services"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHub;


import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { INDUSTRIES_DATA } from '../constants';

const IndustriesHub: React.FC = () => {
  return (
    <div>
      <Hero
        title="Industries We Serve"
        subtitle="We operate at the nexus of power and innovation, advising leaders in sectors critical to national security, economic stability, and the future of technology."
      />
      <div className="py-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry) => (
              <Card
                key={industry.slug}
                slug={industry.slug}
                title={industry.title}
                summary={industry.summary}
                imageUrl={industry.imageUrl}
                basePath="/industries"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHub;


import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { CLIENT_RESULTS_DATA } from '../constants';

const ClientResultsHub: React.FC = () => {
  return (
    <div>
      <Hero
        title="Client Results"
        subtitle="We measure our success by the enduring impact we deliver for our clients. Our work is defined by tangible outcomes in high-stakes environments."
      />
      <div className="py-20 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLIENT_RESULTS_DATA.map((result) => (
              <Card
                key={result.slug}
                slug={result.slug}
                title={result.title}
                summary={result.summary}
                imageUrl={result.imageUrl}
                basePath="/client-results"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientResultsHub;

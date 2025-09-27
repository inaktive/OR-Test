
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CLIENT_RESULTS_DATA, SERVICES_DATA } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';

const ClientResultPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const result = CLIENT_RESULTS_DATA.find((r) => r.slug === slug);

  if (!result) {
    return <Navigate to="/404" />;
  }

  const relatedServices = SERVICES_DATA.filter(service => 
    result.relatedServiceSlugs.includes(service.slug)
  );

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Client Results', path: '/client-results' },
    { label: result.title, path: `/client-results/${result.slug}` },
  ];

  return (
    <div>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="relative text-white py-24 sm:py-32">
        <img src={result.imageUrl} alt={result.title} className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center">{result.title}</h1>
        </div>
      </div>
      
      <div className="bg-obsidian py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2">
              <section>
                <h2 className="font-serif text-3xl text-white mb-4 border-b border-stone pb-2">Situation</h2>
                <p className="text-gray-300 leading-relaxed">{result.situation}</p>
              </section>
              <section className="mt-12">
                <h2 className="font-serif text-3xl text-white mb-4 border-b border-stone pb-2">Approach</h2>
                <p className="text-gray-300 leading-relaxed">{result.approach}</p>
              </section>
              <section className="mt-12">
                <h2 className="font-serif text-3xl text-white mb-4 border-b border-stone pb-2">Impact</h2>
                <p className="text-gray-300 leading-relaxed">{result.impact}</p>
              </section>
            </main>
            <aside className="lg:col-span-1 space-y-12">
              <div className="bg-stone-dark p-8">
                <h3 className="font-serif text-2xl text-white mb-6 border-b border-stone pb-4">At a Glance</h3>
                <ul className="space-y-4">
                  {result.atAGlance.map((metric, index) => (
                    <li key={index}>
                      <span className="block text-2xl font-semibold text-white">{metric.value}</span>
                      <span className="block text-sm text-gray-400">{metric.metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <RelatedContent title="Related Services" items={relatedServices} basePath="/services" />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientResultPage;

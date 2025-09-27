
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES_DATA, INSIGHTS_DATA } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import { ChevronRightIcon } from './icons';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" />;
  }
  
  const relatedInsights = INSIGHTS_DATA.filter(insight => 
    insight.tags.includes(service.slug)
  );

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <div>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div className="relative text-white py-24 sm:py-32">
        <img src={service.imageUrl} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold">{service.title}</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{service.valueProposition}</p>
        </div>
      </div>

      <div className="bg-obsidian py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <main className="lg:col-span-2">
              <section>
                <h2 className="font-serif text-3xl text-white mb-4">What We Do</h2>
                <ul className="space-y-4">
                  {service.whatWeDo.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-3 mt-1"><ChevronRightIcon /></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-12">
                <h2 className="font-serif text-3xl text-white mb-4">How We Work</h2>
                <p className="text-gray-300 leading-relaxed">{service.howWeWork}</p>
              </section>
            </main>
            <div className="lg:col-span-1">
               <RelatedContent title="Related Insights" items={relatedInsights} basePath="/insights" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

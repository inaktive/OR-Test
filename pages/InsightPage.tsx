
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { INSIGHTS_DATA, SERVICES_DATA, INDUSTRIES_DATA } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';

const InsightPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = INSIGHTS_DATA.find((i) => i.slug === slug);

  if (!insight) {
    return <Navigate to="/404" />;
  }

  const relatedServices = SERVICES_DATA.filter(service => 
    insight.tags.includes(service.slug)
  );

  const relatedIndustries = INDUSTRIES_DATA.filter(industry => 
    insight.tags.includes(industry.slug)
  );

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Insights', path: '/insights' },
    { label: insight.title, path: `/insights/${insight.slug}` },
  ];

  return (
    <div>
      <Breadcrumbs crumbs={breadcrumbs} />
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] text-white flex items-end">
        <img src={insight.imageUrl} alt={insight.title} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="relative container mx-auto p-6 md:p-12">
          <p className="text-sm uppercase tracking-widest text-gray-400">{insight.type}</p>
          <h1 className="text-3xl md:text-5xl font-serif font-semibold mt-2 max-w-4xl">{insight.title}</h1>
          <p className="mt-4 text-sm text-gray-300">By {insight.author} | {insight.date}</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-obsidian py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-headings:font-serif prose-strong:text-white prose-a:text-gray-300 hover:prose-a:text-white">
              <p className="lead text-xl text-gray-200 border-l-2 border-stone pl-6 italic">
                {insight.abstract}
              </p>
              
              <p>{insight.body} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
              <blockquote className="border-l-4 border-stone text-xl font-semibold not-italic">
                "This is a pull quote. It highlights a key message from the text, adding visual interest and emphasizing important points."
              </blockquote>

              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <aside className="lg:col-span-1 space-y-12">
              <RelatedContent title="Related Services" items={relatedServices} basePath="/services" />
              <RelatedContent title="Related Industries" items={relatedIndustries} basePath="/industries" />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightPage;

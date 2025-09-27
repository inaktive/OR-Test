
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentItem } from '../types';

interface RelatedContentProps {
  title: string;
  items: ContentItem[];
  basePath: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({ title, items, basePath }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="bg-stone-dark p-8">
      <h3 className="font-serif text-2xl text-white mb-6 border-b border-stone pb-4">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.slug}>
            <Link 
              to={`${basePath}/${item.slug}`} 
              className="group text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span className="block font-semibold">{item.title}</span>
              <span className="block text-sm text-gray-400 group-hover:text-gray-300">{item.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedContent;

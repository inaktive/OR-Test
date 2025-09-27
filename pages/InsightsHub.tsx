
import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import { INSIGHTS_DATA, INDUSTRIES_DATA } from '../constants';
import { Insight, InsightType } from '../types';
import { Link } from 'react-router-dom';

const InsightCard: React.FC<{ insight: Insight }> = ({ insight }) => (
    <Link to={`/insights/${insight.slug}`} className="group block bg-stone-dark hover:bg-stone-light transition-colors duration-300 p-6">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{insight.type}</p>
        <h3 className="font-serif text-xl font-semibold text-white mb-3">{insight.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{insight.summary}</p>
        <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
            Read More &rarr;
        </div>
    </Link>
);


const InsightsHub: React.FC = () => {
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [topicFilter, setTopicFilter] = useState<string>('all');

    const insightTypes = ['all', ...Object.values(InsightType)];
    const topics = ['all', ...INDUSTRIES_DATA.map(i => i.slug)];
    
    const filteredInsights = useMemo(() => {
        return INSIGHTS_DATA.filter(insight => {
            const typeMatch = typeFilter === 'all' || insight.type === typeFilter;
            const topicMatch = topicFilter === 'all' || insight.tags.includes(topicFilter);
            return typeMatch && topicMatch;
        });
    }, [typeFilter, topicFilter]);

    return (
        <div>
            <Hero
                title="Our Insights"
                subtitle="Perspectives on the strategic currents shaping global markets, technology, and security. We explore the complex questions that leaders must confront."
            />

            {/* Filters */}
            <div className="bg-stone-dark border-y border-stone">
                <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="flex items-center gap-4">
                        <label htmlFor="typeFilter" className="text-white font-semibold whitespace-nowrap">Filter by:</label>
                        <select
                            id="typeFilter"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="bg-stone-light text-white border border-stone w-full sm:w-auto p-2 focus:outline-none focus:ring-2 focus:ring-stone"
                        >
                            {insightTypes.map(type => <option key={type} value={type}>{type === 'all' ? 'All Types' : type}</option>)}
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <label htmlFor="topicFilter" className="text-white font-semibold whitespace-nowrap">Topic:</label>
                        <select
                            id="topicFilter"
                            value={topicFilter}
                            onChange={(e) => setTopicFilter(e.target.value)}
                            className="bg-stone-light text-white border border-stone w-full sm:w-auto p-2 focus:outline-none focus:ring-2 focus:ring-stone"
                        >
                            <option value="all">All Topics</option>
                            {INDUSTRIES_DATA.map(ind => <option key={ind.slug} value={ind.slug}>{ind.title}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Insights Grid */}
            <div className="py-20 bg-obsidian">
                <div className="container mx-auto px-6">
                    {filteredInsights.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone">
                            {filteredInsights.map((insight) => (
                                <InsightCard key={insight.slug} insight={insight} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-400">No insights found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InsightsHub;

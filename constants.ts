
import { Service, Industry, Insight, ClientResult, InsightType } from './types';

export const SERVICES_DATA: Service[] = [
  {
    slug: 'advisory-strategy',
    title: 'Advisory & Strategy',
    summary: 'Navigating complexity with precise, actionable strategies that deliver enduring influence and competitive advantage.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=1',
    valueProposition: 'We provide discreet counsel to leadership, shaping strategic narratives and decisions at the highest levels of enterprise and state.',
    whatWeDo: ['Corporate & Competitive Strategy', 'Geopolitical Risk Advisory', 'Long-Term Scenario Planning', 'Board & CEO Counsel'],
    howWeWork: 'Our approach is rooted in deep analysis, first-principles thinking, and a network of unparalleled expertise. We embed with our clients to understand the core of their challenges and craft bespoke, resilient strategies.'
  },
  {
    slug: 'skunkworks-innovation',
    title: 'Skunkworks & Innovation',
    summary: 'Forging the future through advanced technology, cyber resilience, and the covert development of next-generation capabilities.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=2',
    valueProposition: 'We build and deploy cutting-edge solutions at the intersection of AI, cyber, and emerging technologies, providing clients with asymmetric advantages.',
    whatWeDo: ['AI & Machine Learning Integration', 'Cybersecurity & Resilience Strategy', 'Emerging Technology Incubation', 'Digital Transformation'],
    howWeWork: 'Operating in discrete, agile teams, we prototype, test, and scale innovations outside of traditional bureaucratic structures. Our work is defined by speed, secrecy, and impact.'
  },
  {
    slug: 'influence-networks-coalitions',
    title: 'Influence Networks & Coalitions',
    summary: 'Building and mobilizing powerful networks to shape markets, policy, and public perception with quiet authority.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=3',
    valueProposition: 'We architect and manage coalitions that amplify our clients\' influence, creating consensus and driving outcomes in complex, multi-stakeholder environments.',
    whatWeDo: ['Stakeholder Mapping & Engagement', 'Coalition Building & Management', 'Strategic Communications & Narrative Development', 'Public Affairs & Policy Shaping'],
    howWeWork: 'Our methodology combines data-driven network analysis with the subtle art of diplomacy. We identify key nodes of influence and build bridges to create powerful, self-sustaining ecosystems of support.'
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    slug: 'defense-government',
    title: 'Defense & Government',
    summary: 'Enhancing national security and public sector effectiveness through strategic foresight and technological superiority.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=4',
    overview: 'In an era of persistent competition, we partner with defense and government agencies to navigate geopolitical shifts, modernize capabilities, and ensure mission success.',
    keyThemes: ['Next-Generation Defense Platforms', 'Intelligence Modernization', 'Supply Chain Resilience', 'Public Sector Transformation']
  },
  {
    slug: 'critical-infrastructure',
    title: 'Critical Infrastructure',
    summary: 'Securing the backbone of modern society against evolving threats, from energy grids to financial networks.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=5',
    overview: 'We work with operators of critical infrastructure to enhance resilience, deploy advanced monitoring and defense systems, and navigate complex regulatory landscapes.',
    keyThemes: ['Cyber-Physical Security', 'Grid Modernization & Energy Transition', 'Financial System Stability', 'Transportation & Logistics Security']
  },
  {
    slug: 'technology',
    title: 'Technology',
    summary: 'Advising the architects of the digital age on strategy, market dominance, and the responsible deployment of power.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=6',
    overview: 'From global platforms to deep-tech pioneers, we help technology leaders define new markets, scale complex operations, and anticipate the next waves of disruption.',
    keyThemes: ['Artificial Intelligence & Ethics', 'Semiconductor Strategy', 'Quantum Computing Readiness', 'Platform Governance & Trust']
  },
   {
    slug: 'financial-services',
    title: 'Financial Services',
    summary: 'Navigating the currents of global finance with strategic acumen and technological innovation.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=7',
    overview: 'We advise leading financial institutions on navigating market volatility, regulatory complexity, and the digital transformation of money and assets.',
    keyThemes: ['Digital Assets & Blockchain', 'Algorithmic Trading & Risk', 'Wealth Management Modernization', 'Sustainable Finance']
  },
  {
    slug: 'health-life-sciences',
    title: 'Health & Life Sciences',
    summary: 'Shaping the future of health through innovation in biotech, pharmaceuticals, and care delivery.',
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=8',
    overview: 'We partner with pioneers in health and life sciences to accelerate breakthroughs, optimize R&D, and build resilient healthcare systems for the future.',
    keyThemes: ['Genomic Medicine & Personalization', 'Pharmaceutical Supply Chains', 'Digital Health Platforms', 'Pandemic Preparedness']
  }
];

export const INSIGHTS_DATA: Insight[] = [
  {
    slug: 'the-new-geopolitics-of-technology',
    title: 'The New Geopolitics of Technology',
    summary: 'An analysis of the fragmentation of the global tech landscape and its strategic implications for corporations and states.',
    imageUrl: 'https://picsum.photos/1200/800?grayscale&blur=2&random=9',
    type: InsightType.Whitepaper,
    author: 'The Obsidian Rowe Council',
    date: 'October 26, 2023',
    tags: ['defense-government', 'technology'],
    abstract: 'Technology is no longer a neutral domain; it is the primary arena for geopolitical competition. This paper explores the strategic imperatives for navigating a world of competing technology stacks, digital sovereignty, and weaponized supply chains.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ... [Full article text here]'
  },
  {
    slug: 'resilience-in-the-age-of-permacrisis',
    title: 'Resilience in the Age of Permacrisis',
    summary: 'A framework for building robust and adaptive systems capable of withstanding concurrent, cascading disruptions.',
    imageUrl: 'https://picsum.photos/1200/800?grayscale&blur=2&random=10',
    type: InsightType.Framework,
    author: 'The Obsidian Rowe Council',
    date: 'September 15, 2023',
    tags: ['critical-infrastructure', 'advisory-strategy'],
    abstract: 'The concept of "permacrisis" describes our new reality of overlapping emergencies. We present a new framework for organizational resilience that moves beyond risk management to embrace strategic redundancy, decentralized decision-making, and anti-fragility.',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ... [Full article text here]'
  },
  {
    slug: 'sunday-musings-on-influence',
    title: 'Sunday Musings: On Influence',
    summary: 'True influence is not wielded, but cultivated. It is the quiet gravity that shapes outcomes without force.',
    imageUrl: 'https://picsum.photos/1200/800?grayscale&blur=2&random=11',
    type: InsightType.SundayMusing,
    author: 'A Senior Partner',
    date: 'November 5, 2023',
    tags: ['influence-networks-coalitions'],
    abstract: 'A short reflection on the nature of influence in complex systems. It contrasts the fleeting power of coercion with the enduring impact of trust, reputation, and shared purpose.',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ... [Full article text here]'
  },
   {
    slug: 'interview-with-a-cyber-strategist',
    title: 'Interview with a Cyber Strategist',
    summary: 'A conversation on the evolving threat landscape and the shift from defensive security to offensive deterrence.',
    imageUrl: 'https://picsum.photos/1200/800?grayscale&blur=2&random=12',
    type: InsightType.Interview,
    author: 'Obsidian Rowe Quarterly',
    date: 'August 01, 2023',
    tags: ['skunkworks-innovation', 'critical-infrastructure'],
    abstract: 'We sit down with a leading mind in cyber warfare to discuss the state of play, the role of artificial intelligence in both attack and defense, and what boards need to understand about true digital resilience.',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ... [Full article text here]'
  }
];

export const CLIENT_RESULTS_DATA: ClientResult[] = [
    {
        slug: 'national-cyber-defense-modernization',
        title: 'National Cyber Defense Modernization',
        summary: 'Architecting a next-generation cyber defense posture for a G7 nation, shifting from reactive defense to proactive threat neutralization.',
        imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=13',
        atAGlance: [
            { metric: 'Threat Detection Time', value: 'Reduced by 90%' },
            { metric: 'Automated Response', value: 'Implemented Across 85% of Critical Systems' },
            { metric: 'Strategic Realignment', value: 'From Cost Center to National Asset' }
        ],
        situation: 'A key government partner faced an increasingly sophisticated threat landscape, burdened by legacy systems and a fragmented, defensive cybersecurity strategy that was consistently outpaced by state-level adversaries.',
        approach: 'Obsidian Rowe convened a discreet skunkworks team, embedding strategists and technologists within the nation\'s core defense apparatus. We developed a new doctrine based on "persistent engagement" and "defend forward" principles, underpinned by a bespoke AI-driven threat intelligence platform.',
        impact: 'The initiative established a unified, proactive cyber command, fundamentally shifting the nation\'s security posture. The new architecture pre-empted several significant intrusion attempts and is now considered the standard for allied nations.',
        relatedServiceSlugs: ['skunkworks-innovation', 'advisory-strategy']
    },
    {
        slug: 'semiconductor-supply-chain-resilience',
        title: 'Semiconductor Supply Chain Resilience',
        summary: 'De-risking and securing the semiconductor supply chain for a consortium of critical technology manufacturers.',
        imageUrl: 'https://picsum.photos/800/600?grayscale&blur=1&random=14',
        atAGlance: [
            { metric: 'Single-Source Dependencies', value: 'Reduced by 75%' },
            { metric: 'Geopolitical Risk Exposure', value: 'Mitigated in 3 Key Regions' },
            { metric: 'Consortium Formation', value: 'Established New Industry Standard' }
        ],
        situation: 'A group of leading technology firms, vital to national and economic security, was dangerously over-exposed to geopolitical volatility within the global semiconductor supply chain. A single disruption threatened cascading failure across multiple industries.',
        approach: 'We acted as the architect of a private-sector coalition, facilitating sensitive information sharing and joint strategic planning. Our team mapped the entire multi-tiered supply chain, identifying critical vulnerabilities and developing a multi-pronged strategy involving strategic stockpiling, joint R&D in alternative materials, and cultivating new fabrication partnerships in allied nations.',
        impact: 'The consortium successfully weathered a major geopolitical supply disruption with minimal impact on production. The established framework created a resilient ecosystem, insulating critical manufacturing from singular points of failure and enhancing collective security.',
        relatedServiceSlugs: ['influence-networks-coalitions', 'advisory-strategy']
    }
];

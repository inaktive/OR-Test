
export interface ContentItem {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface Service extends ContentItem {
  valueProposition: string;
  whatWeDo: string[];
  howWeWork: string;
}

export interface Industry extends ContentItem {
  overview: string;
  keyThemes: string[];
}

export enum InsightType {
  Interview = 'Interviews',
  Whitepaper = 'Whitepapers',
  Essay = 'Essays',
  Framework = 'Frameworks',
  SundayMusing = 'Sunday Musings',
  Report = 'Reports'
}

export interface Insight extends ContentItem {
  type: InsightType;
  author: string;
  date: string;
  tags: string[];
  abstract: string;
  body: string;
}

export interface ClientResult extends ContentItem {
  atAGlance: { metric: string; value: string }[];
  situation: string;
  approach: string;
  impact: string;
  relatedServiceSlugs: string[];
}

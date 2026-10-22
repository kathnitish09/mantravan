export type CategoryType = 
  | 'mantra'
  | 'jaap'
  | 'chalisa'
  | 'aarti'
  | 'bhajan'
  | 'meditation';

export type DeityType =
  | 'hanuman'
  | 'ram'
  | 'sita-ram'
  | 'shiva'
  | 'ganesh'
  | 'krishna'
  | 'devi'
  | 'other';

export interface VerseItem {
  number: number | string;
  section?: string; // e.g. "दोहा", "चौपाई", "इति"
  devanagari: string[];
  transliteration?: string[];
  meaning: string;
  audioStartTime?: number; // seconds from start of audio
  audioEndTime?: number;
}

export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  category: CategoryType;
  deity: DeityType;
  deityLabel: string;
  shortDescription: string;
  about: string;
  devotionalIntention: string[];
  traditionalContext?: string;
  origin?: string;
  audioUrl?: string;
  audioDuration?: string;
  youtubeId?: string;
  youtubeTitle?: string;
  jaapTarget?: number; // 108 default
  featured?: boolean;
  dailyMantraEligible?: boolean;
  dailyQuote?: string;
  publishedDate: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  verses: VerseItem[];
  relatedSlugs: string[];
}

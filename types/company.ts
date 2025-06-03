export interface EnrichedPost {
    id: number;
    title: string;
    body: string;
  }
  
  export interface Company {
    id: string;
    name: string;
    industry: string;
    enrichedPosts: null | EnrichedPost[];
  }
  
export interface EnrichedPost {
    id: number;
    title: string;
    body: string;
  }
  
  export interface Company {
    id: string;
    numerical_id: number; // Included to support compatibility with mock API
    name: string;
    industry: string;
    enrichedPosts: null | EnrichedPost[];
  }
  

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  category: 'Mood' | 'Night Vibes' | 'Travel';
  imageUrl: string;
}

export interface TravelDestination {
  id: string;
  city: string;
  description: string;
  imageUrl: string;
  themeColor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

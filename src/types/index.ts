export interface Playlist {
  title: string;
  creator: string;
  url: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  videoCount?: number;
  description?: string;
  year?: number;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  playlists: Playlist[];
}

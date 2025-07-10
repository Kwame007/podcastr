//Authentication and User Management Models
export interface LoginCredentials {
  email: string;
  password: string;
}


export interface RegisterCredentials {
  name: string;
  email: string; 
  password: string; 
  password_confirmation: string;
  role: string; 
}

export interface AuthResponse {
  status: string;
  data: any;
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export interface Episode {
  id: number;
  title: string;
  description: string;
  img_url: string;
  audio_url: string;
  duration: string;
  posted_on: string;
  season: string;
  episode: string;
  spotify_url: string;
  apple_podcasts_url: string;
  archive: string;
  featured: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface EpisodeResponse {
  status: string;
  data: Episode[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface Team {
  name: string;
  role: string;
  bio: string;
  profile_image: string;
  social_media_links: SocialMediaLink[];
}

export interface TeamResponse {
  status: string;
  data: Team[];
  meta?: {
    total: number;
    page: number;
    last_page: number;
  };
}



export interface Playlist {
  id: number;
  name: string;
  description: string;
  created_at: string; // ISO 8601 date string
  updated_at: string;
  episodes:number[]
}
export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}
export interface PlaylistResponseData {
  current_page: number;
  data: Playlist[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
export interface PlaylistListApiResponse {
  status: string; // "success"
  data: PlaylistResponseData
}
export interface PostPlaylistData{
  name: string,
  description: string
}
export interface PostPlaylistApiResponse{
  status: string; // e.g. "success"
  data: Playlist;
}
export interface PlaylistEditData{
  name: string,
  description: string
}
export interface PlaylistDeleteResponse{
  status: string,
  message: string
}
export interface EpisodeIdsPayload {
  episode_ids: number[];
}
export interface AddEpisodesResponseData {
  playlist_id: number;
  added_episode_ids: number[];
}
export interface AddEpisodeToPlaylistApiResponse{
  status: string; // e.g. "success"
  message: string; // e.g. "Episodes added successfully."
  data: AddEpisodesResponseData;
}

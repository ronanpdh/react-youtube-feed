// YouTube channel video response types
export type Color = 
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'white'
  | 'black'
  | 'rose';

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard?: Thumbnail;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    localized: Localized;
}

export interface id {
    kind: string;
    videoId: string;
}

export interface PlaylistItem {
    kind: string;
    etag: string;
    id: id;
    snippet: Snippet;
}

export interface YouTubeData{
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: PlaylistItem[];
}

export interface YoutubeFeedProps {
    channelId: string;
    apiKey: string;
    maxResults?: number | null; 
    color?: Color;
}
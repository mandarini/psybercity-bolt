export interface Talk {
  postType: string;
  link?: string;
  title: string;
  description?: string;
  date: string;
  impact: {
    value: string;
    label?: string;
  };
  timestamp: string;
  conf_name?: string;
  conf_info?: {
    website?: string;
    location?: string;
    coords?: number[];
    venue?: string;
    date?: string;
  };
  media?: {
    slides?: string;
    code?: string[];
    demo?: string[];
    photos?: string[];
    video?: string;
  };
}

export interface UpcomingTalk {
  website: string;
  conf_name: string;
  date: string;
  title: string;
  location: string;
} 
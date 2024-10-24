import { 
  Mic, 
  Video, 
  Users, 
  BookOpen, 
  Calendar,
  ExternalLink,
  Users2,
  BarChart3,
  PenTool,
  Youtube
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import talks from './talks.json';

type Talk = {
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
};

const postTypeIcons: Record<string, any> = {
  'Public Speaking': Mic,
  'Public-speaking': Mic,
  'Video / Podcast': Video,
  'Youtube-video': Video,
  'Workshops': Users,
  'Written Content': BookOpen,
  'Content-creation': BookOpen,
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const groupTalksByYear = (talks: Talk[]) => {
  return talks.reduce((acc, talk) => {
    const year = new Date(talk.timestamp).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(talk);
    return acc;
  }, {} as Record<number, Talk[]>);
};

const calculateStats = (talks: Talk[]) => {
  const stats = {
    totalTalks: 0,
    totalAttendees: 0,
    totalContent: 0,
    totalVideos: 0
  };

  talks.forEach(talk => {
    // Count by type
    if (talk.postType.toLowerCase().includes('speaking') || talk.postType === 'Workshops') {
      stats.totalTalks++;
    } else if (talk.postType.toLowerCase().includes('content') || talk.postType === 'Written Content') {
      stats.totalContent++;
    } else if (talk.postType.toLowerCase().includes('video') || talk.postType === 'Youtube-video') {
      stats.totalVideos++;
    }

    // Calculate total impact
    const impactValue = talk.impact.value.replace(/,/g, '');
    const numericValue = parseInt(impactValue);
    if (!isNaN(numericValue)) {
      stats.totalAttendees += numericValue;
    }
  });

  return stats;
};

export default function Talks() {
  const groupedTalks = groupTalksByYear(talks);
  const years = Object.keys(groupedTalks).map(Number).sort((a, b) => b - a);
  const stats = calculateStats(talks);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Talks & Activities</h1>
        <p className="text-muted-foreground">
          A collection of my public speaking engagements, workshops, content creation, and other activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Public Speaking & Workshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalTalks}</div>
              <Mic className="h-4 w-4 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Total Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalAttendees.toLocaleString()}</div>
              <BarChart3 className="h-4 w-4 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Written Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalContent}</div>
              <PenTool className="h-4 w-4 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Videos & Podcasts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{stats.totalVideos}</div>
              <Youtube className="h-4 w-4 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {years.map(year => (
        <div key={year} className="space-y-6">
          <h2 className="text-2xl font-semibold sticky top-0 bg-background/95 backdrop-blur py-4 z-10">
            {year}
          </h2>
          <div className="grid gap-6">
            {groupedTalks[year].map((talk, index) => {
              const Icon = postTypeIcons[talk.postType] || Mic;
              
              return (
                <Card key={`${talk.title}-${index}`} className="overflow-hidden group">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-secondary" />
                        <span className="text-sm text-muted-foreground">
                          {talk.postType}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(talk.timestamp)}
                      </div>
                    </div>
                    <div className="space-y-1">
                      {talk.link ? (
                        <Link 
                          href={talk.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:text-accent transition-colors"
                        >
                          <CardTitle className="text-xl">
                            {talk.title}
                          </CardTitle>
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      ) : (
                        <CardTitle className="text-xl">{talk.title}</CardTitle>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {talk.description && (
                      <p className="text-muted-foreground">
                        {talk.description}
                      </p>
                    )}
                    <div className="flex items-center text-sm text-secondary">
                      <Users2 className="h-4 w-4 mr-2" />
                      <span>
                        {talk.impact.value}
                        {talk.impact.label ? ` ${talk.impact.label}` : ''}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
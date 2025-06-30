import { Mic, Video, Users, BookOpen } from "lucide-react";
import talks from "./talks.json";
import { SpeakingStats } from "./components/SpeakingStats";
import { UpcomingTalks } from "./components/UpcomingTalks";
import { TalkCard } from "./components/TalkCard";
import { Talk, UpcomingTalk } from "./types";

const upcomingTalks: UpcomingTalk[] = [
  {
    website: "https://angularconnect.com",
    conf_name: "Angular Connect",
    date: "September 13, 2025",
    title: "Multiplayer Mayhem with Angular",
    location: "London, UK",
  },
];

const postTypeIcons: Record<string, any> = {
  "Public Speaking": Mic,
  "Public-speaking": Mic,
  "Video / Podcast": Video,
  "Youtube-video": Video,
  Workshops: Users,
  "Written Content": BookOpen,
  "Content-creation": BookOpen,
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

export default function Talks() {
  const groupedTalks = groupTalksByYear(talks);
  const years = Object.keys(groupedTalks)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Talks & Activities</h1>
        <p className="text-muted-foreground">
          A collection of my public speaking engagements, workshops, content
          creation, and other activities.
        </p>
      </div>

      <SpeakingStats talks={talks} />
      <UpcomingTalks talks={upcomingTalks} />

      {years.map((year) => (
        <div key={year} className="space-y-6">
          <h2 className="text-2xl font-semibold sticky top-0 bg-background/95 backdrop-blur py-4 z-10">
            {year}
          </h2>
          <div className="grid gap-6">
            {groupedTalks[year].map((talk, index) => {
              const Icon = postTypeIcons[talk.postType] || Mic;
              return (
                <TalkCard
                  key={`${talk.title}-${index}`}
                  talk={talk}
                  index={index}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

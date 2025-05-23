import { Mic, Video, Users, BookOpen } from "lucide-react";
import talks from "./talks.json";
import { SpeakingStats } from "./components/SpeakingStats";
import { UpcomingTalks } from "./components/UpcomingTalks";
import { TalkCard } from "./components/TalkCard";
import { Talk, UpcomingTalk } from "./types";

const upcomingTalks: UpcomingTalk[] = [
  {
    website: "https://greece.cityjsconf.org/workshop/6Z0dYjKV2ivycXLdioxM03",
    conf_name: "CityJS Athens",
    date: "May 29, 2025",
    title: "Nx: Smart Repos, Fast Builds, AI Assisted development",
    location: "Athens, Greece",
  },
  {
    website: "https://greece.cityjsconf.org",
    conf_name: "CityJS Athens",
    date: "May 30, 2025",
    title: "Revolutionize Your React dev flow with Nx",
    location: "Athens, Greece",
  },
  {
    website: "https://www.meetup.com/angularnyc/events/307844037/",
    conf_name: "Angular NYC",
    date: "June 3, 2025",
    title: "Next-gen Angular with Nx: Rspack + MFE",
    location: "New York City, USA",
  },
  {
    website: "https://go.nx.dev/techweek",
    conf_name: "NY Tech Week",
    date: "June 5, 2025",
    title: "Saved by Nx: Campfire CI Stories - #NYTechWeek",
    location: "New York City, USA",
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

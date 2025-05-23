import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, ExternalLink, MapPin, CalendarDays } from "lucide-react";
import { UpcomingTalk } from "../types";

interface UpcomingTalksProps {
  talks: UpcomingTalk[];
}

export const UpcomingTalks = ({ talks }: UpcomingTalksProps) => {
  if (!talks?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-secondary" />
        See me at
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {talks.map((talk, index) => (
          <Card key={index} className="bg-secondary/5 border-secondary/10">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <Link
                    href={talk.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="font-medium text-secondary group-hover:text-accent flex items-center gap-1">
                      {talk.conf_name}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {talk.date}
                  </div>
                </div>
                <p className="text-sm">{talk.title}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {talk.location}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, ExternalLink, MapPin, Presentation, Code2, Globe, Play, Image, Users2 } from "lucide-react";
import { Talk } from "../types";
import { formatDate } from "../utils";

interface TalkCardProps {
  talk: Talk;
  index: number;
  Icon: any;
}

export const TalkCard = ({ talk, index, Icon }: TalkCardProps) => {
  return (
    <Card
      key={`${talk.title}-${index}`}
      className="overflow-hidden group"
    >
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
          <div className="flex flex-col gap-1">
            {talk.conf_name && (
              <p className="text-sm font-medium text-secondary">
                {talk.conf_name}
              </p>
            )}
            {talk.conf_info?.location && (
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {talk.conf_info.location}
                {talk.conf_info.venue &&
                  ` - ${talk.conf_info.venue}`}
              </p>
            )}
          </div>
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
            {talk.impact.label ? ` ${talk.impact.label}` : ""}
          </span>
        </div>
        {talk.media && (
          <div className="flex flex-wrap gap-2 pt-2">
            {talk.media.slides && (
              <Link
                href={talk.media.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                <Presentation className="h-3 w-3" />
                Slides
              </Link>
            )}
            {talk.media.code?.map((codeLink, i) => (
              <Link
                key={i}
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              >
                <Code2 className="h-3 w-3" />
                Code{" "}
                {talk.media?.code?.length &&
                talk.media?.code?.length > 1
                  ? i + 1
                  : ""}
              </Link>
            ))}
            {talk.media.demo?.map((demoLink, i) => (
              <Link
                key={i}
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                <Globe className="h-3 w-3" />
                Demo{" "}
                {talk.media?.demo?.length &&
                talk.media?.demo?.length > 1
                  ? i + 1
                  : ""}
              </Link>
            ))}
            {talk.media.video && (
              <Link
                href={talk.media.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                <Play className="h-3 w-3" />
                Video
              </Link>
            )}
            {talk.media.photos?.map((photoLink, i) => (
              <Link
                key={i}
                href={photoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                <Image className="h-3 w-3" />
                Photos{" "}
                {talk.media?.photos?.length &&
                talk.media?.photos?.length > 1
                  ? i + 1
                  : ""}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 
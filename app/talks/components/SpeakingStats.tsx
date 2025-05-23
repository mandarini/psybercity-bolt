"use client";

import { Mic, Users2, MapPin, Calendar } from "lucide-react";
import { AnimatedStatCard } from "./AnimatedStatCard";
import { Talk } from "../types";

const calculateStats = (talks: Talk[]) => {
  const stats = {
    totalTalks: 0,
    totalAttendees: 0,
    totalCities: new Set<string>(),
    yearsActive: new Set<number>(),
    totalContent: 0,
    totalVideos: 0,
  };

  talks.forEach((talk) => {
    // Count talks and content
    if (
      talk.postType.toLowerCase().includes("speaking") ||
      talk.postType === "Workshops"
    ) {
      stats.totalTalks++;
    } else if (
      talk.postType.toLowerCase().includes("content") ||
      talk.postType === "Written Content"
    ) {
      stats.totalContent++;
    } else if (
      talk.postType.toLowerCase().includes("video") ||
      talk.postType === "Youtube-video"
    ) {
      stats.totalVideos++;
    }

    // Calculate total impact
    const impactValue = talk.impact.value.replace(/,/g, "");
    const numericValue = parseInt(impactValue);
    if (!isNaN(numericValue)) {
      stats.totalAttendees += numericValue;
    }

    // Track cities
    if (
      talk.conf_info?.location &&
      talk.conf_info.location.toLowerCase() !== "online"
    ) {
      stats.totalCities.add(talk.conf_info.location.toLowerCase());
    }

    // Track years
    const year = new Date(talk.timestamp).getFullYear();
    stats.yearsActive.add(year);
  });

  return {
    totalTalks: stats.totalTalks,
    totalAttendees: stats.totalAttendees,
    totalCities: stats.totalCities.size,
    yearsActive: stats.yearsActive.size,
    totalContent: stats.totalContent,
    totalVideos: stats.totalVideos,
  };
};

interface SpeakingStatsProps {
  talks: Talk[];
}

export const SpeakingStats = ({ talks }: SpeakingStatsProps) => {
  const stats = calculateStats(talks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <AnimatedStatCard
        icon={Mic}
        value={stats.totalTalks}
        suffix="+"
        label="Talks Given"
      />
      <AnimatedStatCard
        icon={Users2}
        value={stats.totalAttendees}
        suffix="+"
        label="People Reached"
      />
      <AnimatedStatCard
        icon={MapPin}
        value={stats.totalCities}
        suffix="+"
        label="Places Visited"
      />
      <AnimatedStatCard
        icon={Calendar}
        value={stats.yearsActive}
        suffix="+"
        label="Years Active"
      />
    </div>
  );
};

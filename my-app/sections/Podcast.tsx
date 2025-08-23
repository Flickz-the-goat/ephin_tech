import EpisodeCard from "@/components/EpisodeCard";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Podcast() {
  return (
    <SectionWrapper className={"text-[#FEFFF8] bg-[#1E1E1E] "}>
      <div
        id="podcast"
        className="mx-auto max-w-7xl space-y-6 text-center px-4"
      >
        <h1 className="font-bold text-4xl lg:text-7xl md:text-6xl">
          The Insight Lab
        </h1>
        <p className="italic font-light text-lg">
          A place for conversations about innovation and strategy
        </p>

        <Link
          href={"https://www.youtube.com/channel/UCmvR0rj3JKsfLAJwuFHsAjA"}
          target="_blank"
          className="flex gap-2 text-xl items-center hover:cursor-pointer group hover:underline transition-all"
        >
          Episodes{" "}
          <ArrowRight className="group-hover:-rotate-45 transition-all" />
        </Link>

        {/* Horizontal scrolling container for episode cards */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 min-w-max px-2 items-center">
            <p className="italic font-light text-lg mx-auto">Coming soon ...</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

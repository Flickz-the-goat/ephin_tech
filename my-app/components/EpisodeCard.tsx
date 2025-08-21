import Image from "next/image";
import Link from "next/link";
export default function EpisodeCard({
  img,
  title,
  desc,
  watch_time,
  link,
}: {
  img: string;
  title: string;
  desc: string;
  watch_time: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-[#1e1e1e] rounded-lg border border-[#fefff8] p-4 shadow-sm min-w-[280px] md:min-w-[320px] hover:shadow-lg transition-all duration-300 hover:cursor-pointer"
    >
      <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
        <Image
          src={img}
          alt="Episode thumbnail"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-[#fefff8]">{title}</h3>
        <p className="text-sm italic font-light text-[#fefff8]/80 line-clamp-3">
          {desc}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-[#fefff8]/60">{watch_time}</span>
          <span className="text-xs text-[#86bc25]">Watch Now</span>
        </div>
      </div>
    </Link>
  );
}

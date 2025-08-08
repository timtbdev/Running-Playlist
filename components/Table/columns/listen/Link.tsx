import { cn, getYoutubeId } from "@/lib/utils";
import { StreamingPlatform } from "@/types";
import Link from "next/link";
import { memo } from "react";
import YoutubePlayer from "./YoutubePlayer";

// Platform link component interface
interface PlatformLinkProps {
  platform: StreamingPlatform;
  url: string;
  isYoutube?: boolean;
}

// Platform link component
const PlatformLink = memo(
  ({ platform, url, isYoutube = false }: PlatformLinkProps) => {
    if (isYoutube) {
      const videoId = getYoutubeId(url);
      if (!videoId) return null;

      return (
        <div className="w-full">
          <YoutubePlayer videoId={videoId} />
        </div>
      );
    }

    return (
      <Link
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="mx-auto flex w-full flex-col gap-y-2 rounded-md border p-2 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        aria-label={`Listen on ${platform.name}`}
      >
        <div className="flex items-center justify-center">
          <platform.icon className={cn(platform.color, "size-6")} />
        </div>
        <span className="text-sm font-semibold text-gray-800">
          {platform.name}
        </span>
      </Link>
    );
  },
);

PlatformLink.displayName = "PlatformLink";

export default PlatformLink;

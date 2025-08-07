import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell } from "@/components/ui/table";
import STREAMING_PLATFORMS from "@/constants/streaming-platforms";
import { cn, getYoutubeId } from "@/lib/utils";
import type { LinkType } from "@/types";
import { HeadphonesIcon as ListenIcon } from "lucide-react";
import Link from "next/link";
import YoutubePlayer from "./YoutubePlayer";

// Component interfaces
interface LinkCellProps {
  href: LinkType;
  music: string;
  artist: string;
}

// Helper function to get platform URL
const getPlatformUrl = (href: LinkType, platformId: string): string | null => {
  const urlMap: Record<string, keyof LinkType> = {
    spotify: "spotify",
    "apple-music": "appleMusic",
    soundcloud: "soundcloud",
    youtube: "youtube",
    pandora: "pandora",
  };

  const key = urlMap[platformId];
  return key ? href[key] || null : null;
};

// Platform link component
const PlatformLink = ({
  platform,
  url,
  isYoutube = false,
}: {
  platform: any;
  url: string;
  isYoutube?: boolean;
}) => {
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
      className="mx-auto flex w-full flex-col gap-y-2 rounded-md border p-2 hover:bg-gray-100"
    >
      <div className="flex items-center justify-center">
        <platform.icon className={cn(platform.color, "size-6")} />
      </div>
      <span className="text-sm font-semibold text-gray-800">
        {platform.name}
      </span>
    </Link>
  );
};

// External link cell component
function ListenCell({ href, music, artist }: LinkCellProps) {
  // Filter platforms that have URLs
  const availablePlatforms = STREAMING_PLATFORMS.filter((platform) => {
    const url = getPlatformUrl(href, platform.id);
    return url && url.trim() !== "";
  });

  return (
    <TableCell>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full gap-1" variant="outline">
            <ListenIcon className="h-4 w-4 text-gray-800" /> Listen
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Listen to "{music}" by {artist}
            </DialogTitle>
            <DialogDescription>
              Choose your preferred streaming platform to listen to this track.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-4">
            {/* YouTube player (if available) */}
            {availablePlatforms
              .filter((platform) => platform.id === "youtube")
              .map((platform) => {
                const url = getPlatformUrl(href, platform.id);
                if (!url) return null;

                return (
                  <div key={platform.id} className="w-full">
                    <PlatformLink
                      platform={platform}
                      url={url}
                      isYoutube={true}
                    />
                  </div>
                );
              })}

            {/* Other streaming platforms */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-center lg:grid-cols-3">
              {availablePlatforms
                .filter((platform) => platform.id !== "youtube")
                .map((platform) => {
                  const url = getPlatformUrl(href, platform.id);
                  if (!url) return null;

                  return (
                    <PlatformLink
                      key={platform.id}
                      platform={platform}
                      url={url}
                      isYoutube={false}
                    />
                  );
                })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}

export default ListenCell;

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
import { getPlatformUrl } from "@/lib/utils";
import type { LinkType } from "@/types";
import { HeadphonesIcon as ListenIcon } from "lucide-react";
import { useMemo } from "react";
import PlatformLink from "./Link";

// Component interfaces
interface ListenCellProps {
  href: LinkType;
  music: string;
  artist: string;
}

// Platform data interface for internal use
interface PlatformData {
  platform: (typeof STREAMING_PLATFORMS)[0];
  url: string;
}

// External link cell component
function ListenCell({ href, music, artist }: ListenCellProps) {
  // Memoize available platforms to avoid recalculation on every render
  const availablePlatforms = useMemo(() => {
    return STREAMING_PLATFORMS.reduce<PlatformData[]>((acc, platform) => {
      const url = getPlatformUrl(href, platform.id);
      if (url && url.trim() !== "") {
        acc.push({ platform, url });
      }
      return acc;
    }, []);
  }, [href]);

  // Separate YouTube and other platforms for better organization
  const youtubePlatform = useMemo(
    () => availablePlatforms.find(({ platform }) => platform.id === "youtube"),
    [availablePlatforms],
  );

  const otherPlatforms = useMemo(
    () =>
      availablePlatforms.filter(({ platform }) => platform.id !== "youtube"),
    [availablePlatforms],
  );

  // Early return if no platforms available
  if (availablePlatforms.length === 0) {
    return (
      <TableCell>
        <Button
          className="w-full gap-1"
          variant="outline"
          disabled
          aria-label="No streaming platforms available"
        >
          <ListenIcon className="h-4 w-4 text-gray-400" />
          Unavailable
        </Button>
      </TableCell>
    );
  }

  return (
    <TableCell>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-full gap-1"
            variant="outline"
            aria-label={`Listen to ${music} by ${artist} on streaming platforms`}
          >
            <ListenIcon className="h-4 w-4 text-gray-800" />
            Listen
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
            {youtubePlatform && (
              <div className="w-full">
                <PlatformLink
                  platform={youtubePlatform.platform}
                  url={youtubePlatform.url}
                  isYoutube={true}
                />
              </div>
            )}

            {/* Other streaming platforms */}
            {otherPlatforms.length > 0 && (
              <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-center lg:grid-cols-3">
                {otherPlatforms.map(({ platform, url }) => (
                  <PlatformLink
                    key={platform.id}
                    platform={platform}
                    url={url}
                    isYoutube={false}
                  />
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}

export default ListenCell;

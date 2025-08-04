import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MusicType } from "@/types";
import {
  CircleUser as ArtistIcon,
  ActivityIcon as BpmIcon,
  ExternalLink,
  MusicIcon,
  Star,
} from "lucide-react";
import Link from "next/link";

// Define table column configuration
const TABLE_COLUMNS = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "bpm", label: "BPM", icon: BpmIcon },
  { key: "addedBy", label: "Added By", icon: null }, // Special case for avatar
  { key: "rating", label: "Rating", icon: null }, // Special case for stars
  { key: "link", label: "Link", icon: null }, // Special case for link
] as const;

// Reusable cell component for standard icon + text cells
function IconCell({
  icon: Icon,
  children,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TableCell className={`border-r ${className}`}>
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {children}
      </div>
    </TableCell>
  );
}

// Reusable cell component for avatar
function AvatarCell({ src, name }: { src: string; name: string }) {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage src={src} />
          <AvatarFallback className="text-sm">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {name}
      </div>
    </TableCell>
  );
}

// Reusable cell component for rating stars
function RatingCell({ rating }: { rating: number }) {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating ? "fill-gray-200 text-gray-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    </TableCell>
  );
}

// Reusable cell component for external link
function LinkCell({ href }: { href: string }) {
  return (
    <TableCell>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
      >
        Listen
        <ExternalLink className="h-3 w-3" />
      </Link>
    </TableCell>
  );
}

export default function DataTable({ data }: { data: MusicType[] }) {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          {TABLE_COLUMNS.map((column) => (
            <TableHead
              key={column.key}
              className={column.key !== "link" ? "border-r" : ""}
            >
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <IconCell icon={MusicIcon} className="font-medium">
              {item.music}
            </IconCell>
            <IconCell icon={ArtistIcon}>{item.artist}</IconCell>
            <IconCell icon={BpmIcon}>{item.bpm}</IconCell>
            <AvatarCell src={item.addedBy} name={item.addedBy} />
            <RatingCell rating={item.rating} />
            <LinkCell href={item.link} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

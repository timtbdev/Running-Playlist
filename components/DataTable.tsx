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
  ArrowDown,
  ArrowUp,
  CircleUser as ArtistIcon,
  ActivityIcon as BpmIcon,
  ExternalLink,
  MusicIcon,
  QrCodeIcon,
} from "lucide-react";
import Link from "next/link";

// Table column configuration
const TABLE_COLUMNS = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "bpm", label: "BPM", icon: BpmIcon },
  { key: "addedBy", label: "Added By", icon: null },
  { key: "rating", label: "Rating", icon: null },
  { key: "qrCode", label: "QR", icon: QrCodeIcon },
  { key: "link", label: "Link", icon: null },
] as const;

// Standard icon + text cell component
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

// Avatar cell component
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

// Rating cell component with thumbs up/down
function RatingCell({ rating }: { rating: number }) {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <ArrowUp className="h-4 w-4 cursor-pointer text-green-600 transition-all duration-200 ease-in-out hover:scale-110" />
          <ArrowDown className="h-4 w-4 cursor-pointer text-red-600 transition-all duration-200 ease-in-out hover:scale-110" />
        </div>
        <span className="text-sm font-medium text-gray-600">
          {rating > 0 ? `+${rating}` : rating}
        </span>
      </div>
    </TableCell>
  );
}

// External link cell component
function LinkCell({ href }: { href: string }) {
  return (
    <TableCell>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:underline"
      >
        Listen
        <ExternalLink className="h-3 w-3" />
      </Link>
    </TableCell>
  );
}

// QR code cell component
function QRCodeCell({ qrCodeUrl }: { qrCodeUrl: string }) {
  return (
    <TableCell className="border-r">
      <Link
        href={qrCodeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900"
      >
        <QrCodeIcon className="h-4 w-4" />
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
            <QRCodeCell qrCodeUrl={item.qrCode} />
            <LinkCell href={item.link} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

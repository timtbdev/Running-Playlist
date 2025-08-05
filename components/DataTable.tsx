import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categoryData } from "@/constants/category-data";
import { cn } from "@/lib/utils";
import { MusicType } from "@/types";
import {
  ArrowDown,
  ArrowUp,
  CircleUser as ArtistIcon,
  ActivityIcon as BpmIcon,
  MusicIcon,
  QrCodeIcon,
} from "lucide-react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

// Table column configuration
const TABLE_COLUMNS = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "category", label: "Category", icon: null },
  { key: "bpm", label: "BPM", icon: BpmIcon },
  { key: "rating", label: "Rating", icon: null },
  { key: "addedBy", label: "Added By", icon: null },
  { key: "qrCode", label: "QR", icon: QrCodeIcon },
  { key: "link", label: "Link", icon: null },
] as const;

// Constants
const TEXT_TRUNCATE_LENGTH = 20;

// Utility functions
const truncateText = (
  text: string,
  maxLength: number = TEXT_TRUNCATE_LENGTH,
) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

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
function AvatarCell({
  src,
  firstName,
  lastName,
}: {
  src: string;
  firstName: string;
  lastName: string;
}) {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <Avatar className="size-6">
          <AvatarImage src={src} />
          <AvatarFallback className="text-sm">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-600">{firstName}</span>
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
          <Button variant="outline" size="icon">
            <ArrowUp className="h-4 w-4 cursor-pointer text-green-600 transition-all duration-200 ease-in-out hover:scale-110" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowDown className="h-4 w-4 cursor-pointer text-red-600 transition-all duration-200 ease-in-out hover:scale-110" />
          </Button>
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
      <Button asChild variant="outline" className="p-2">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          Listen <FaSpotify className="h-4 w-4 text-green-500" />
        </Link>
      </Button>
    </TableCell>
  );
}

// QR code cell component
function QRCodeCell({ qrCodeUrl }: { qrCodeUrl: string }) {
  return (
    <TableCell className="border-r">
      <Button variant="outline" size="icon" className="size-8">
        <QrCodeIcon className="h-4 w-4 text-gray-800" />
      </Button>
    </TableCell>
  );
}

// Category cell component with color-coded badges
function CategoryCell({
  category,
}: {
  category: "Easy" | "Tempo" | "Sprint" | "Hard";
}) {
  const config = categoryData.find((cat) => cat.name === category);
  if (!config) return <TableCell className="border-r">Unknown</TableCell>;

  const Icon = config.icon;

  return (
    <TableCell className="border-r">
      <div
        className={cn(
          "flex items-center gap-1 rounded-md border px-2 py-1",
          config.backgroundLight,
          config.border,
          config.text,
        )}
      >
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{category}</span>
      </div>
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
              {truncateText(item.music)}
            </IconCell>
            <IconCell icon={ArtistIcon} className="font-medium">
              {truncateText(item.artist)}
            </IconCell>
            <CategoryCell category={item.category} />
            <IconCell icon={BpmIcon}>{item.bpm}</IconCell>
            <RatingCell rating={item.rating} />
            <AvatarCell
              src={item.addedBy.avatar}
              firstName={item.addedBy.firstName}
              lastName={item.addedBy.lastName}
            />
            <QRCodeCell qrCodeUrl={item.qrCode} />
            <LinkCell href={item.link} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

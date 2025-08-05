import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
import { MusicType, UserType } from "@/types";
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

// Constants
const TABLE_COLUMNS = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "category", label: "Category" },
  { key: "bpm", label: "BPM", icon: BpmIcon },
  { key: "rating", label: "Rating" },
  { key: "addedBy", label: "Added By" },
  { key: "qrCode", label: "QR", icon: QrCodeIcon },
  { key: "link", label: "Link" },
] as const;

const TEXT_TRUNCATE_LENGTH = 20;

// Utility functions
const truncateText = (
  text: string,
  maxLength = TEXT_TRUNCATE_LENGTH,
): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

// Component types
interface IconCellProps {
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}

interface AvatarCellProps {
  user: UserType;
}

interface RatingCellProps {
  rating: number;
}

interface LinkCellProps {
  href: string;
}

interface QRCodeCellProps {
  url: string;
}

interface CategoryCellProps {
  category: "Easy" | "Tempo" | "Sprint" | "Hard";
}

// Standard icon + text cell component
function IconCell({ icon: Icon, children, className = "" }: IconCellProps) {
  return (
    <TableCell className={cn("border-r", className)}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </div>
    </TableCell>
  );
}

// Avatar cell component
function AvatarCell({ user }: AvatarCellProps) {
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  return (
    <TableCell className="border-r">
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex cursor-pointer items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-sm">{initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-600 hover:underline">
              {user.firstName}
            </span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-50">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">
                {user.firstName} {user.lastName}
              </h4>
              <p className="text-sm">{user.bio}</p>
            </div>
          </div>
          <Link href={`/users/${user.id}`}>
            <Button variant="outline" className="mt-2 w-full">
              View profile
            </Button>
          </Link>
        </HoverCardContent>
      </HoverCard>
    </TableCell>
  );
}

// Rating cell component with thumbs up/down
function RatingCell({ rating }: RatingCellProps) {
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
function LinkCell({ href }: LinkCellProps) {
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
function QRCodeCell({ url }: QRCodeCellProps) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;

  return (
    <TableCell className="border-r">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="size-8">
            <QrCodeIcon className="h-4 w-4 text-gray-800" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>QR Code</DialogTitle>
            <DialogDescription>
              Scan this QR code to access the song from your phone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-4">
            <img src={qrCodeUrl} alt="QR Code" className="rounded-lg border" />
          </div>
        </DialogContent>
      </Dialog>
    </TableCell>
  );
}

// Category cell component with color-coded badges
function CategoryCell({ category }: CategoryCellProps) {
  const config = categoryData.find((cat) => cat.name === category);

  if (!config) {
    return <TableCell className="border-r">Unknown</TableCell>;
  }

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

// Main DataTable component
interface DataTableProps {
  data: MusicType[];
}

export default function DataTable({ data }: DataTableProps) {
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
            <AvatarCell user={item.addedBy} />
            <QRCodeCell url={item.link} />
            <LinkCell href={item.link} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

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
import { MusicType } from "@/types";
import {
  ArrowDown,
  ArrowUp,
  CircleUser as ArtistIcon,
  ActivityIcon as BpmIcon,
  SnailIcon as EasyIcon,
  ExternalLink,
  RocketIcon as HardIcon,
  MusicIcon,
  QrCodeIcon,
  RabbitIcon as SprintIcon,
  Tag,
  GaugeIcon as TempoIcon,
} from "lucide-react";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

// Table column configuration
const TABLE_COLUMNS = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "category", label: "Category", icon: Tag },
  { key: "bpm", label: "BPM", icon: BpmIcon },
  { key: "rating", label: "Rating", icon: null },
  { key: "addedBy", label: "Added By", icon: null },
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
function CategoryCell({ category }: { category: string }) {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Easy":
        return "bg-green-100 border-green-300 text-green-800";
      case "Tempo":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "Sprint":
        return "bg-orange-100 border-orange-300 text-orange-800";
      case "Hard":
        return "bg-red-100 border-red-300 text-red-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  return (
    <TableCell className="border-r">
      <div
        className={`flex items-center gap-1 rounded-md border px-2 py-1 ${getCategoryStyles(category)}`}
      >
        {category === "Easy" ? <EasyIcon className="h-4 w-4" /> : null}
        {category === "Tempo" ? <TempoIcon className="h-4 w-4" /> : null}
        {category === "Sprint" ? <SprintIcon className="h-4 w-4" /> : null}
        {category === "Hard" ? <HardIcon className="h-4 w-4" /> : null}
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
              {item.music.length > 20
                ? `${item.music.substring(0, 20)}...`
                : item.music}
            </IconCell>
            <IconCell icon={ArtistIcon} className="font-medium">
              {item.artist.length > 20
                ? `${item.artist.substring(0, 20)}...`
                : item.artist}
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

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TABLE_COLUMNS from "@/constants/table-columns";
import { truncateText } from "@/lib/utils";
import type { MusicType } from "@/types";
import AvatarCell from "./columns/AddedBy";
import ArtistCell from "./columns/Artist";
import CategoryCell from "./columns/Category";
import ListenCell from "./columns/listen/Listen";
import MusicCell from "./columns/Music";
import RatingCell from "./columns/Rating";

// Main DataTable component
interface MainTableProps {
  data: MusicType[];
}

export default function MainTable({ data }: MainTableProps) {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          {TABLE_COLUMNS.map((column) => (
            <TableHead
              className={column.key !== "link" ? "border-r" : ""}
              key={column.key}
            >
              <div className="flex items-center gap-2">
                {column.icon && <column.icon className="size-4" />}
                {column.label}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <MusicCell music={truncateText(item.music)} />
            <ArtistCell artist={truncateText(item.artist)} />
            <CategoryCell category={item.category} />
            <RatingCell rating={item.rating} />
            <AvatarCell user={item.addedBy} />
            <ListenCell
              artist={item.artist}
              href={item.link}
              music={item.music}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

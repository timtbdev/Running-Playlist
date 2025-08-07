import { TableCell } from "@/components/ui/table";

interface ArtistCellProps {
  artist: string;
}

const ArtistCell = ({ artist }: ArtistCellProps) => {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <span className="font-medium">{artist}</span>
      </div>
    </TableCell>
  );
};

export default ArtistCell;

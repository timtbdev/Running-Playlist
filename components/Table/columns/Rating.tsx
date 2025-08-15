import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { ArrowDown, ArrowUp } from "lucide-react";

interface RatingCellProps {
  rating: number;
}

const RatingCell = ({ rating }: RatingCellProps) => {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Button size="icon" variant="outline">
            <ArrowUp className="h-4 w-4 cursor-pointer text-green-600 transition-all duration-200 ease-in-out hover:scale-110" />
          </Button>
          <Button size="icon" variant="outline">
            <ArrowDown className="h-4 w-4 cursor-pointer text-red-600 transition-all duration-200 ease-in-out hover:scale-110" />
          </Button>
        </div>
        <span className="text-sm font-medium text-gray-600">
          {rating > 0 ? `+${rating}` : rating}
        </span>
      </div>
    </TableCell>
  );
};

export default RatingCell;

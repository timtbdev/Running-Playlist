import { TableCell } from "@/components/ui/table";
import CATEGORIES from "@/constants/categories";
import { cn } from "@/lib/utils";

interface CategoryCellProps {
  category: string;
}

const CategoryCell = ({ category }: CategoryCellProps) => {
  const config = CATEGORIES.find((cat) => cat.name === category);

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
};

export default CategoryCell;

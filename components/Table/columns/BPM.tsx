import type { LucideIcon } from 'lucide-react';
import type React from 'react';
import { TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface BPMCellProps {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const BPMCell = ({ icon: Icon, children, className }: BPMCellProps) => {
  return (
    <TableCell className={cn('border-r', className)}>
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-gray-600" />
        <span>{children}</span>
      </div>
    </TableCell>
  );
};

export default BPMCell;

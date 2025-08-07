import React from 'react';
import { TableCell } from '@/components/ui/table';

interface MusicCellProps {
  music: string;
}

const MusicCell = ({ music }: MusicCellProps) => {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-2">
        <span className="font-medium">{music}</span>
      </div>
    </TableCell>
  );
};

export default MusicCell;

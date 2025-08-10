import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import Link from "next/link";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
}

interface AvatarCellProps {
  user: User;
}

// Avatar cell component
function AvatarCell({ user }: AvatarCellProps) {
  return (
    <TableCell className="border-r">
      <div className="flex items-center gap-1">
        <Avatar className="size-5">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="text-sm">
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-600 hover:underline">
          {user.firstName}
        </span>
      </div>
    </TableCell>
  );
}

export default AvatarCell;

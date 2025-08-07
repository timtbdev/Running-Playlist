import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { TableCell } from '@/components/ui/table';

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
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex cursor-pointer items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-sm">
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-600 text-sm hover:underline">
              {user.firstName}
            </span>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-50">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>
                {user.firstName.charAt(0)}
                {user.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-sm">
                {user.firstName} {user.lastName}
              </h4>
              <p className="text-sm">{user.bio}</p>
            </div>
          </div>
          <Link href={`/users/${user.id}`}>
            <Button className="mt-2 w-full" variant="outline">
              View profile
            </Button>
          </Link>
        </HoverCardContent>
      </HoverCard>
    </TableCell>
  );
}

export default AvatarCell;

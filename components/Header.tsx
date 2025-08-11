import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import navigationItems from "@/constants/navigations";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn("sticky top-0 z-50 border-b bg-background", className)}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <Avatar className="h-6 w-6">
              <AvatarImage alt="Logo" src="/images/logo.png" />
            </Avatar>
            <span className="font-semibold">Playlist.fan</span>
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-8">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Button */}
          <Button className="bg-sky-500 font-semibold text-white transition-colors hover:bg-sky-600 hover:ring-2 hover:ring-sky-300 hover:ring-offset-2">
            <PlusIcon className="size-4" />
            Add to playlist
          </Button>
        </div>
      </div>
    </header>
  );
}

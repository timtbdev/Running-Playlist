import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn("bg-background sticky top-0 z-50 border-b", className)}
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
            <NavigationMenuList className="flex gap-6">
              {navigationLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="hover:text-accent-foreground font-medium transition-colors"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Button */}
          <div className="flex gap-1">
            <Button className="bg-sky-500 font-semibold text-white transition-colors hover:bg-sky-500 hover:ring-2 hover:ring-sky-300 hover:ring-offset-2 hover:ring-offset-white">
              <PlusIcon className="size-4" />
              Add to playlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

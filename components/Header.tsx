import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      role="navigation"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/images/logo.png" alt="Logo" />
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
                      href={item.href}
                      className="hover:text-accent-foreground font-medium"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              <PlusIcon className="h-4 w-4" />
              <span className="text-md font-semibold">Add to Playlist</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

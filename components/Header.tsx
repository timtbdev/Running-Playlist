

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 border-b bg-background", className)} role="navigation">
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
                    <Link href={item.href} className="font-medium hover:text-accent-foreground">
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Button size="sm">Sign In</Button>
            <Button variant="outline" size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

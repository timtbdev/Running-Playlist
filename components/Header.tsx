"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navigationItems from "@/constants/navigations";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, MusicIcon, PlusIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

// Logo Component
const Logo = () => (
  <Link className={cn("hidden items-center gap-2 md:flex")} href="/">
    <Avatar className="size-6">
      <AvatarImage alt="Logo" src="/images/logo.png" />
      <AvatarFallback>
        <MusicIcon className="size-6" />
      </AvatarFallback>
    </Avatar>
    <span className="font-semibold">Playlist.fan</span>
  </Link>
);

// Mobile Menu Button Component
const MobileMenuButton = ({ currentPath }: { currentPath: string }) => {
  const activePath = currentPath.split("/")[1]
    ? `/${currentPath.split("/")[1]}`
    : currentPath;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("group hover:bg-accent rounded-full md:hidden")}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="text-foreground group-hover:text-accent-foreground size-6" />
          ) : (
            <Menu className="text-foreground group-hover:text-accent-foreground size-6" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="z-50">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>
        <div className="bg-background">
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <ul className="divide-border divide-y">
              {navigationItems.map((menuItem) => {
                const isActive = activePath === menuItem.href;
                return (
                  <li key={menuItem.href} className="list-none">
                    <Link
                      href={menuItem.href}
                      className={cn(
                        "group inline-flex w-full gap-2 px-6 py-4",
                        {
                          "bg-accent/50 shadow-xs": isActive,
                          "hover:bg-accent hover:shadow-xs": !isActive,
                        },
                      )}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="text-foreground group-hover:text-accent-foreground flex items-center gap-2 font-medium">
                        <span className="text-lg">{menuItem.icon}</span>
                        {menuItem.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Desktop Navigation Component
const DesktopNavigation = ({ currentPath }: { currentPath: string }) => (
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
);

// Add Button Component
const AddButton = () => (
  <Button className="bg-sky-500 font-semibold text-white transition-colors hover:bg-sky-600 hover:ring-2 hover:ring-sky-300 hover:ring-offset-2">
    <PlusIcon className="size-4" />
    Add to playlist
  </Button>
);

// Main Header Component
export default function Header({ className }: HeaderProps) {
  const currentPath = usePathname();

  return (
    <header
      className={cn("bg-background sticky top-0 z-50 border-b", className)}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <MobileMenuButton currentPath={currentPath} />
          <DesktopNavigation currentPath={currentPath} />
          <AddButton />
        </div>
      </div>
    </header>
  );
}



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

// ============================================================================
// TYPES
// ============================================================================
interface HeaderProps {
  className?: string;
}

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Logo component with avatar and text
 * Links to home page with hover effects
 */
const Logo = () => (
  <Link href="/" className={cn("group inline-flex items-center gap-2")}>
    <Avatar>
      <AvatarImage
        src="/images/logo.png"
        alt="Logo"
        width={176}
        height={176}
        className="size-8 transform rounded-full"
        title="Logo"
      />
    </Avatar>
    <span className="text-md text-foreground group-hover:text-accent-foreground font-semibold">
      Playlist.fan
    </span>
  </Link>
);

/**
 * Main navigation menu component
 * Renders navigation links from config
 */
const Navigation = () => (
  <NavigationMenuList
    className="flex items-center gap-5"
    aria-label="Main navigation"
  >
    {navigationLinks.map((item) => (
      <NavigationMenuItem key={item.href}>
        <NavigationMenuLink asChild>
          <Link href={item.href} className="text-[16px] font-semibold text-gray-600 hover:text-accent-foreground transition-colors duration-200">{item.label}</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
);

/**
 * Authentication buttons component
 * Sign In and Sign Up buttons with icons
 */
const AuthButtons = () => (
  <div className="flex flex-1 justify-end gap-2">
    <Button size="sm">
      Sign In
    </Button>
    <Button variant="outline" size="sm">
       Sign Up
    </Button>
  </div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * Header component for the application
 * Contains logo, navigation, and authentication buttons
 * Sticky positioned at the top of the page
 */
export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      "bg-background border-border/50 sticky inset-x-0 top-0 z-50 h-auto items-center border-b",
      className
    )}>
      <div className="relative mx-auto w-full px-3 lg:px-4 xl:px-0">
        <NavigationMenu className="mx-auto hidden w-full max-w-5xl md:block">
          <div className="flex h-18 w-full items-center justify-between">
            {/* ========================================
                LOGO SECTION
                ======================================== */}
            <div className="flex flex-1 justify-start">
              <Logo />
            </div>

            {/* ========================================
                NAVIGATION SECTION
                ======================================== */}
            <Navigation />

            {/* ========================================
                AUTH BUTTONS SECTION
                ======================================== */}
            <AuthButtons />
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
}

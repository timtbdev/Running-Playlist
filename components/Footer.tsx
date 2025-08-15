"use client";

import CATEGORIES from "@/constants/categories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <>
      {/* Main Footer */}
      <footer className="border-b bg-white">
        <div className="mx-auto max-w-5xl border-x px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Playlist.fan. All rights
              reserved.
            </p>
            <nav className="flex gap-6 text-sm text-gray-600">
              <a
                className="transition-colors hover:text-gray-900"
                href="/contact"
              >
                Contact Us
              </a>
              <a
                className="transition-colors hover:text-gray-900"
                href="/privacy"
              >
                Privacy Policy
              </a>
              <a
                className="transition-colors hover:text-gray-900"
                href="/terms"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-0 left-0 z-50 h-20 w-full border-t border-gray-200 bg-white md:hidden">
        <div className="mx-auto grid h-full max-w-lg grid-cols-4 font-medium">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.slug}`}
              className={cn(
                "group inline-flex flex-col items-center justify-center px-2 py-2 transition-colors duration-200 hover:bg-gray-50",
                "border-r border-gray-200 last:border-r-0",
              )}
              onClick={() => setActiveCategory(category)}
            >
              <div
                className={cn(
                  "mb-1 flex size-10 items-center justify-center rounded-full transition-colors duration-200",
                  category.backgroundDark,
                  category.border,
                )}
              >
                <category.icon
                  aria-hidden="true"
                  className={cn("size-6", category.text)}
                />
              </div>
              <span
                className={cn(
                  "text-sm text-gray-500 transition-colors duration-200 group-hover:text-gray-900",
                  activeCategory.name === category.name &&
                    "text-center font-semibold text-gray-900",
                )}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

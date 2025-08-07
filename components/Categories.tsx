import CATEGORIES from "@/constants/categories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";

const Categories: React.FC = () => {
  return (
    <section aria-labelledby="categories-heading">
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            className={cn(
              "group col-span-1 flex rounded-md border",
              category.border,
            )}
            href={`/categories/${category.slug}`}
            key={category.name}
          >
            <div
              className={cn(
                "flex w-16 shrink-0 items-center justify-center rounded-l-md border-r text-sm font-medium transition-colors duration-200",
                category.backgroundDark,
                category.border,
              )}
            >
              <category.icon
                aria-hidden="true"
                className={cn("size-6", category.text)}
              />
            </div>
            <div
              className={cn(
                "flex flex-1 items-center justify-between truncate rounded-r-md bg-white",
                category.groupHover,
              )}
            >
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <span className={cn("font-semibold text-gray-900")}>
                  {category.name}
                </span>
                <p className="text-gray-800">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Categories;

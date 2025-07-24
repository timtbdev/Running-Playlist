import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {}

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs",
        "transition-[color,box-shadow] outline-none",
        
        // Text and placeholder
        "text-foreground placeholder:text-muted-foreground",
        "selection:bg-primary selection:text-primary-foreground",
        
        // File input styles
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "file:text-foreground",
        
        // Dark mode
        "dark:bg-input/30",
        
        // Border
        "border-input",
        
        // Disabled state
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        
        // Responsive
        "md:text-sm",
        
        // Validation states
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "dark:aria-invalid:ring-destructive/40",
        
        className
      )}
      {...props}
    />
  )
}

export { Input }

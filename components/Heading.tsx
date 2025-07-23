import React, { memo, forwardRef, useMemo } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const GridPattern = memo(({ 
  id, 
  x = 0, 
  y = 0, 
  patternSize = 60, 
  strokeWidth = 2 
}: { 
  id: string
  x?: number
  y?: number
  patternSize?: number
  strokeWidth?: number
}) => (
  <defs>
    <pattern 
      id={id} 
      x={x} 
      y={y} 
      width={patternSize} 
      height={patternSize} 
      patternUnits="userSpaceOnUse"
    >
      <path 
        d={`M ${patternSize} 0 L 0 0 0 ${patternSize}`} 
        fill="transparent" 
        stroke="currentColor" 
        strokeWidth={strokeWidth}
      />
    </pattern>
  </defs>
))

GridPattern.displayName = 'GridPattern'

const GridSVG = memo(({ 
  patternId, 
  className, 
  width = "100%", 
  height = "100%",
  patternX = 0,
  patternY = 0,
  patternSize = 60,
  strokeWidth = 2
}: {
  patternId: string
  className: string
  width?: string | number
  height?: string | number
  patternX?: number
  patternY?: number
  patternSize?: number
  strokeWidth?: number
}) => (
  <svg 
    className={cn("pointer-events-none absolute", className)}
    width={width} 
    height={height}
    aria-hidden="true"
    focusable="false"
  >
    <GridPattern 
      id={patternId} 
      x={patternX} 
      y={patternY} 
      patternSize={patternSize}
      strokeWidth={strokeWidth}
    />
    <rect fill={`url(#${patternId})`} width="100%" height="100%" />
  </svg>
))

GridSVG.displayName = 'GridSVG'

const Heading = forwardRef<HTMLElement, HeadingProps>(({
  children,
  className,
  ...props
}, ref) => {
  const patternId = useMemo(() => 
    `grid-pattern-${Math.random().toString(36).substr(2, 9)}`, 
    []
  )

  return (
    <section 
      ref={ref}
      className={cn(
        "grid-section relative overflow-hidden border-grid-border [.grid-section_~_&]:border-t-0 border-b px-4 py-8 md:py-12",
        className
      )}
      role="banner"
      {...props}
    >
      <div className="relative z-0 mx-auto max-w-7xl border-grid-border bg-white">
        <div 
          className="pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden [mask-image:linear-gradient(transparent,black)]"
          aria-hidden="true"
        >
          <GridSVG
            patternId={patternId}
            className="inset-[unset] bottom-0 left-1/2 max-w-full -translate-x-1/2 text-grid-border/60"
            height={600}
            patternX={-1}
          />
        </div>
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </section>
  )
})

Heading.displayName = 'Heading'

export default Heading
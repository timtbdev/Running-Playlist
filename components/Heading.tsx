import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Heading = forwardRef<HTMLElement, HeadingProps>(({
  children,
  className,
  ...props
}, ref) => {
  return (
    <section 
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-white",
        className
      )}
      role="banner"
      {...props}
    >
      <div className="relative z-10 mx-auto max-w-full">
        <div className="mx-auto max-w-5xl">
          {children}
        </div>
      </div>
    </section>
  )
})

Heading.displayName = 'Heading'

export default Heading
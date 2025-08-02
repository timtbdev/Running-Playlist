import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const GridSVG: FC<{
  id: string;
  className: string;
  x?: string;
  height?: string;
  width?: string;
}> = ({ id, className, x, height = "100%", width = "100%" }) => (
  <svg className={className} width={width} height={height}>
    <defs>
      <pattern
        id={id}
        x={x || "0"}
        y="0"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 60 0 L 0 0 0 60"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <rect fill={`url(#${id})`} width="100%" height="100%" />
  </svg>
);

const Heading: FC<HeadingProps> = ({ children }) => (
  <section className="relative overflow-hidden bg-white" role="banner">
    {/* Background grid pattern */}
    <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[1800px] -translate-x-1/2 [mask-image:linear-gradient(transparent,black)] [mask-composite:intersect] opacity-100">
      <div className="absolute inset-x-[390px] inset-y-0">
        <GridSVG
          id="grid-left"
          className="heading-grid-border pointer-events-none absolute inset-[unset] right-full bottom-0 h-[600px] w-[360px] [mask-image:linear-gradient(90deg,transparent,black)]"
          height="600px"
          width="360px"
        />
        <GridSVG
          id="grid-right"
          className="heading-grid-border pointer-events-none absolute inset-[unset] bottom-0 left-full h-[600px] w-[360px] [mask-image:linear-gradient(270deg,transparent,black)]"
          x="-1"
          height="600px"
          width="360px"
        />
      </div>
    </div>

    {/* Center grid pattern */}
    <div className="pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden [mask-image:linear-gradient(transparent,black),radial-gradient(130%_50%_at_50%_100%,transparent,black)] [mask-composite:intersect] opacity-100">
      <GridSVG
        id="grid-center"
        className="heading-grid-border pointer-events-none absolute inset-[unset] bottom-0 left-1/2 h-[600px] max-w-5xl -translate-x-1/2"
        x="-1"
        height="600px"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-full">
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  </section>
);

export default Heading;

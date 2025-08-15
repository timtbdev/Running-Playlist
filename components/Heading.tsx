interface HeadingProps {
  children: React.ReactNode;
}

const GridSVG = ({
  id,
  className,
  x,
  height = "100%",
  width = "100%",
}: {
  id: string;
  className: string;
  x: string;
  height: string;
  width: string;
}) => (
  <svg className={className} height={height} width={width}>
    <title>Grid pattern background</title>
    <defs>
      <pattern
        height="60"
        id={id}
        patternUnits="userSpaceOnUse"
        width="60"
        x={x || "0"}
        y="0"
      >
        <path
          d="M 60 0 L 0 0 0 60"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <rect fill={`url(#${id})`} height="100%" width="100%" />
  </svg>
);

const Heading = ({ children }: HeadingProps) => (
  <header className="relative overflow-hidden bg-white">
    {/* Background grid pattern */}
    <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[1800px] -translate-x-1/2 [mask-image:linear-gradient(transparent,black)] [mask-composite:intersect] opacity-100">
      <div className="absolute inset-x-[390px] inset-y-0">
        <GridSVG
          className="heading-grid-border pointer-events-none absolute inset-[unset] right-full bottom-0 h-[600px] w-[360px] [mask-image:linear-gradient(90deg,transparent,black)]"
          height="600px"
          id="grid-left"
          width="360px"
          x="0"
        />
        <GridSVG
          className="heading-grid-border pointer-events-none absolute inset-[unset] bottom-0 left-full h-[600px] w-[360px] [mask-image:linear-gradient(270deg,transparent,black)]"
          height="600px"
          id="grid-right"
          width="360px"
          x="-1"
        />
      </div>
    </div>

    {/* Center grid pattern */}
    <div className="pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden [mask-image:linear-gradient(transparent,black),radial-gradient(130%_50%_at_50%_100%,transparent,black)] [mask-composite:intersect] opacity-100">
      <GridSVG
        className="heading-grid-border pointer-events-none absolute inset-[unset] bottom-0 left-1/2 h-[600px] max-w-5xl -translate-x-1/2"
        height="600px"
        id="grid-center"
        width="100%"
        x="-1"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-full">
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  </header>
);

export default Heading;

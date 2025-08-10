"use client";

import RunningManIcon from "@/icons/running-man-icon";
import Categories from "./Categories";

const AppLogo = () => {
  return (
    <div className="relative mx-auto flex size-16 items-center justify-center">
      <div className="absolute inset-x-0 top-1/2 h-[140%] -translate-y-1/2 border-x border-neutral-200 [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]" />
      <div className="absolute inset-y-0 left-1/2 w-[140%] -translate-x-1/2 border-y border-neutral-200 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
      <div className="absolute inset-0 drop-shadow-sm">
        <div className="absolute inset-0 rounded-xl border border-neutral-300 bg-white [mask-image:linear-gradient(#0007,black)]" />
      </div>
      <RunningManIcon className="relative size-18" />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid-section relative overflow-clip">
      <div className="max-w-grid-width relative z-0 mx-auto py-10">
        <div className="border-grid-border pointer-events-none absolute inset-0 border-x [mask-image:linear-gradient(transparent,black)]" />
        <div className="relative mx-auto flex max-w-md flex-col text-center sm:max-w-lg">
          <AppLogo />
          <h1 className="font-display mt-4 text-center text-4xl font-medium text-neutral-900">
            Battle Tested
          </h1>
          <p className="mt-2 text-2xl text-gray-800">Beats for Runners</p>
        </div>

        {/* Categories Section */}
        <div className="mx-auto mt-8 w-full px-4">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Hero;

'use client';

import { useEffect, useState } from 'react';
import RunningManIcon from '@/icons/running-man-icon';
import RunningWomanIcon from '@/icons/running-woman-icon';
import Categories from './Categories';

const AppLogo = () => {
  const [currentIcon, setCurrentIcon] = useState<'man' | 'woman'>('man');

  useEffect(() => {
    // Randomly select an icon on component mount
    const randomIcon = Math.random() < 0.5 ? 'man' : 'woman';
    setCurrentIcon(randomIcon);
  }, []);

  return (
    <div className="relative mx-auto flex size-16 items-center justify-center">
      <div className="-translate-y-1/2 absolute inset-x-0 top-1/2 h-[140%] border-neutral-200 border-x [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]" />
      <div className="-translate-x-1/2 absolute inset-y-0 left-1/2 w-[140%] border-neutral-200 border-y [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
      <div className="absolute inset-0 drop-shadow-sm">
        <div className="absolute inset-0 rounded-xl border border-neutral-300 bg-white [mask-image:linear-gradient(#0007,black)]" />
      </div>
      {currentIcon === 'man' ? (
        <RunningManIcon className="relative size-18" />
      ) : (
        <RunningWomanIcon className="relative size-18" />
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid-section relative overflow-clip">
      <div className="relative z-0 mx-auto max-w-grid-width py-10">
        <div className="pointer-events-none absolute inset-0 border-grid-border border-x [mask-image:linear-gradient(transparent,black)]" />
        <div className="relative mx-auto flex max-w-md flex-col text-center sm:max-w-lg">
          <AppLogo />
          <h1 className="mt-4 text-center font-display font-medium text-4xl text-neutral-900">
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

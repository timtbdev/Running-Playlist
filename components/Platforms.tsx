import React from 'react'
import AppleMusicLogo from '@/icons/apple-music-logo'
import SoundCloudLogo from '@/icons/soundcloud-logo'
import SpotifyLogo from '@/icons/spotify-logo'
import YoutubeMusicLogo from '@/icons/youtube-music-logo'

const PlatformItem = ({ children, name }: { children: React.ReactNode; name: string }) => {
  return (
    <div className="flex h-16 items-center justify-center">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

const Platforms = () => {
  const platforms = [
    {
      name: 'Spotify',
      logo: <SpotifyLogo className="h-12 w-auto text-gray-600" />,
    },
    {
      name: 'Apple Music',
      logo: <AppleMusicLogo className="h-12 w-auto text-gray-600" />,
    },
    {
      name: 'SoundCloud',
      logo: <SoundCloudLogo className="h-12 w-auto text-gray-600" />,
    },
    {
      name: 'YouTube Music',
      logo: <YoutubeMusicLogo className="h-12 w-auto text-gray-600" />,
    }
  ]

  return (
    <section 
      className="grid-section relative overflow-hidden px-4 border-grid-border [.grid-section_~_&]:border-t-0 border-y"
      aria-labelledby="platforms-heading"
    >
      <div className="relative z-0 mx-auto max-w-5xl border-grid-border border-x">
        <div className="py-2 md:py-4">
          <div className="grid grid-cols-2 items-center gap-6 max-md:gap-4 md:grid-cols-4">
            {platforms.map((platform) => (
              <PlatformItem key={platform.name} name={platform.name}>
                {platform.logo}
              </PlatformItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Platforms
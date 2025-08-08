'use client';

import Youtube, { type YouTubeProps } from 'react-youtube';

interface YoutubePlayerProps {
  videoId: string;
  opts?: YouTubeProps['opts'];
  onReady?: YouTubeProps['onReady'];
}

const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const opts: YouTubeProps['opts'] = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export default function YoutubePlayer({
  videoId,
  opts: customOpts,
  onReady,
}: YoutubePlayerProps) {
  return (
    <div className="relative aspect-video w-full">
      <Youtube
        className="absolute top-0 left-0 h-full w-full"
        onReady={onReady || onPlayerReady}
        opts={customOpts || opts}
        videoId={videoId}
      />
    </div>
  );
}

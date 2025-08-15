export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">About</h1>
      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          Welcome to Playlist.fan - your ultimate destination for discovering
          and managing running playlists.
        </p>
        <p className="mb-4">
          Our platform helps runners find the perfect music to keep them
          motivated during their workouts. Whether you're training for a
          marathon or just going for a casual jog, we've got you covered.
        </p>
        <p className="mb-4">Features include:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Curated playlists for different running intensities</li>
          <li>Music recommendations based on your pace</li>
          <li>Community-driven playlist sharing</li>
          <li>Integration with popular streaming platforms</li>
        </ul>
        <p>
          Start exploring our playlists and find your perfect running
          soundtrack!
        </p>
      </div>
    </div>
  );
}

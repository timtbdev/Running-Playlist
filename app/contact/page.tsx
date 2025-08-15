export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Contact</h1>
      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          Get in touch with us! We'd love to hear from you.
        </p>
        <p className="mb-4">
          Whether you have questions, suggestions, or just want to share your
          running playlist experience, we're here to help.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Email</h2>
            <p>hello@playlist.fan</p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Social Media</h2>
            <p>
              Follow us on Twitter and Instagram for updates and running tips.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Feedback</h2>
            <p>
              Have ideas for new features or improvements? We're always looking
              to make Playlist.fan better for runners like you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

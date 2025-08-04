export default function Footer() {
  return (
    <footer className="border-b bg-white">
      <div className="mx-auto max-w-5xl border-x px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Playlist.fan. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a
              href="/contact"
              className="transition-colors hover:text-gray-900"
            >
              Contact Us
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-gray-900">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

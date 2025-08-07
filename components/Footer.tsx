export default function Footer() {
  return (
    <footer className="border-b bg-white">
      <div className="mx-auto max-w-5xl border-x px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Playlist.fan. All rights reserved.
          </p>
          <nav className="flex gap-6 text-gray-600 text-sm">
            <a
              className="transition-colors hover:text-gray-900"
              href="/contact"
            >
              Contact Us
            </a>
            <a
              className="transition-colors hover:text-gray-900"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-gray-900" href="/terms">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

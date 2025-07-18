
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-medium text-gray-600">
              &copy; {currentYear} Playlist.fan. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
            <a
                href="/terms"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="/privacy"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy  
              </a>
              <a
                href="/terms"
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

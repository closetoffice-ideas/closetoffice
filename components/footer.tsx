import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-sage rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">C</span>
              </div>
              <span className="font-bold text-lg">
                ClosetOffice
                <span className="text-brand-sage-light">Ideas</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your #1 resource for cloffice inspiration, curated Amazon picks,
              and guides to transform any closet into a dream WFH office.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors text-xs px-3 py-1.5 rounded-full font-medium"
              >
                📌 Pinterest
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors text-xs px-3 py-1.5 rounded-full font-medium"
              >
                📸 Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition-colors text-xs px-3 py-1.5 rounded-full font-medium"
              >
                🎵 TikTok
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-sage-light uppercase text-xs tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/products", label: "Amazon Picks" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-sage-light uppercase text-xs tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5 mb-5">
              <li>
                <Link
                  href="/disclosure"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                As an Amazon Associate, ClosetOfficeIdeas earns from qualifying
                purchases at no extra cost to you.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} ClosetOfficeIdeas. All rights
            reserved.
          </p>
          <Link
            href="/disclosure"
            className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            Affiliate Disclosure
          </Link>
        </div>
      </div>
    </footer>
  );
}

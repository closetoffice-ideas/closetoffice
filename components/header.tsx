"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/products", label: "Amazon Picks" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/images/logo-icon.png"
              alt="ClosetOfficeIdeas logo"
              className="w-9 h-9 rounded-lg object-cover shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-brand-charcoal text-lg leading-none">
                ClosetOffice
              </span>
              <span className="font-bold text-brand-sage text-lg leading-none">
                Ideas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brand-sage/10 text-brand-sage"
                    : "text-gray-600 hover:text-brand-charcoal hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="ml-3 bg-brand-sage text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-sage-dark transition-colors"
            >
              Start Your Cloffice →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-500 hover:text-brand-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brand-sage/10 text-brand-sage"
                    : "text-gray-600 hover:bg-gray-50"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/products"
                className="block text-center bg-brand-sage text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-sage-dark transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Start Your Cloffice →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

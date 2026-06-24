import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4">
          <span className="text-xs font-semibold text-brand-sage bg-brand-sage/10 px-3 py-1 rounded-full">
            About Us
          </span>
        </div>

        <h1 className="text-4xl font-bold text-brand-charcoal mb-6 leading-tight">
          We Believe Your Dream Office Was Already in Your Closet
        </h1>

        <div className="prose max-w-none">
          <p>
            ClosetOfficeIdeas started with a simple frustration: expensive home office makeovers that required contractors, permits, and budgets most people don't have. Meanwhile, everyone already has a closet — often completely underutilized.
          </p>

          <p>
            The "cloffice" concept (closet + office) went viral on Pinterest and TikTok for good reason. It's practical, affordable, and surprisingly beautiful when done right. We built this site to be the go-to resource for anyone who wants to make the conversion without spending hours researching what to buy or how to do it.
          </p>

          <h2>What We Do</h2>
          <p>
            We research, test, and curate the best Amazon products for every stage of a cloffice build — from the fold-down desk to the LED strips to the pegboard system. We write real, practical guides based on actual experience. And we share the inspiration and ideas that make people say "I could actually do this."
          </p>

          <h2>Our Promise to You</h2>
          <p>
            Every product we recommend is something we'd actually put in our own cloffice. We don't recommend products just because they pay high commissions — we recommend them because they genuinely work. Our job is to help you build something you love, not to upsell you on things you don't need.
          </p>

          <h2>A Note on Affiliate Links</h2>
          <p>
            Some links on this site are Amazon affiliate links. When you click through and make a purchase, we earn a small commission at no extra cost to you. This is how we're able to create free content and keep the site running. We're transparent about this on every page — read our{" "}
            <Link href="/disclosure" className="text-brand-sage underline hover:text-brand-sage-dark">
              full affiliate disclosure here
            </Link>
            .
          </p>

          <h2>Follow Along</h2>
          <p>
            New cloffice ideas, Amazon finds, and before/after builds every week. Find us on:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#E60023] text-white px-5 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            📌 Pinterest
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-charcoal text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
          >
            📸 Instagram @ClosetOfficeIdeas
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
          >
            🎵 TikTok @ClosetOfficeIdeas
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Ready to start your cloffice build?{" "}
            <Link
              href="/blog/ultimate-cloffice-guide"
              className="text-brand-sage font-semibold hover:text-brand-sage-dark inline-flex items-center gap-1"
            >
              Start with our Ultimate Guide <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

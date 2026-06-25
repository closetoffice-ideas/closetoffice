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
            ClosetOfficeIdeas started with a simple observation: expensive home office makeovers require contractors, permits, and budgets most people don&apos;t have. Meanwhile, everyone already has a closet — often completely underutilized.
          </p>

          <p>
            The &quot;cloffice&quot; concept (closet + office) went viral on Pinterest and TikTok for good reason. It&apos;s practical, affordable, and surprisingly beautiful when done right. We built this site to be a go-to resource for anyone who wants to make the conversion without spending hours figuring out where to start or what to buy.
          </p>

          <h2>What We Do</h2>
          <p>
            We pull together ideas, inspiration, and curated Amazon finds to help you plan your closet office conversion. Our guides walk you through each stage of a cloffice build — from layout planning to lighting to organization — and our product picks are selected based on how well they fit the specific needs of a closet workspace.
          </p>

          <h2>How We Select Products</h2>
          <p>
            Every product we feature has been chosen because it fits the requirements of a closet-to-office conversion — the right dimensions, mounting options, and purpose for a compact, functional workspace. We look at ratings, reviews, and specs to find items that match what a cloffice actually needs. We don&apos;t feature products just because they pay high commissions — we curate them because they&apos;re a genuine fit for the build.
          </p>

          <h2>A Note on Affiliate Links</h2>
          <p>
            Some links on this site are Amazon affiliate links. When you click through and make a purchase, we earn a small commission at no extra cost to you. This is how we&apos;re able to create free content and keep the site running. We&apos;re transparent about this on every page — read our{" "}
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
            className="flex items-center justify-center gap-2 bg-[#E60023] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#c4001d] transition-colors"
          >
            📌 Pinterest
          </a>
          <a
            href="https://instagram.com/closetofficeideas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-sage text-white px-5 py-3 rounded-xl font-semibold hover:bg-brand-sage-dark transition-colors"
          >
            📸 Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-charcoal text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            🎵 TikTok
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-sage font-medium hover:text-brand-sage-dark transition-colors"
          >
            Browse our guides <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

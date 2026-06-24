"use client";

import Link from "next/link";
import { ArrowRight, Zap, CheckCircle, ExternalLink } from "lucide-react";
import { allPosts } from "@/lib/posts";

const featuredProducts = [
  {
    name: "Litever LED Under-Cabinet Light Bar",
    category: "Lighting",
    price: "$29.99",
    emoji: "💡",
    description: "Warm white under-shelf LED strips — the #1 cloffice upgrade",
    affiliateUrl: "https://www.amazon.com/dp/B01L1JK0VW?tag=closetoffice-20",
    imageUrl: "https://m.media-amazon.com/images/I/61vGvGIY3JL._AC_SL1200_.jpg",
  },
  {
    name: "Haotian Wall-Mount Fold-Down Desk",
    category: "Desks",
    price: "$99.99",
    emoji: "🪵",
    description: "Solid wood wall-mounted desk — folds completely flat",
    affiliateUrl: "https://www.amazon.com/dp/B07988PS8K?tag=closetoffice-20",
    imageUrl: "https://m.media-amazon.com/images/I/71bhk1Uh1rL._AC_SL1500_.jpg",
  },
  {
    name: "Wall Control Metal Pegboard",
    category: "Organization",
    price: "$51.29",
    emoji: "📌",
    description: '30" × 32" steel pegboard — holds 50+ lbs of gear',
    affiliateUrl: "https://www.amazon.com/dp/B001J7JYX2?tag=closetoffice-20",
    imageUrl: "https://m.media-amazon.com/images/I/71gKMftC%2BSL._AC_SL1054_.jpg",
  },
  {
    name: "BenQ ScreenBar LED Monitor Light",
    category: "Tech",
    price: "$92.65",
    emoji: "🖥️",
    description: "Clips to your monitor — no desk space, no screen glare",
    affiliateUrl: "https://www.amazon.com/dp/B076VNFZJG?tag=closetoffice-20",
    imageUrl: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
  },
];

// Cover images mapped to blog slugs
const POST_COVERS: Record<string, string> = {
  "ultimate-cloffice-guide": "/images/cover-ultimate-guide.jpg",
  "best-cloffice-lighting": "/images/cover-lighting.jpg",
  "best-fold-down-desks-cloffice": "/images/cover-fold-down-desks.jpg",
};

export default function HomePage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-sage/10 text-brand-sage-dark px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Zap size={14} />
                The #1 Cloffice Resource
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-brand-charcoal leading-tight mb-6">
                Your Dream Home Office{" "}
                <span className="text-brand-sage">Was in Your Closet</span> All
                Along
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                Step-by-step guides, curated Amazon picks, and real inspiration
                to transform any closet into a beautiful, functional{" "}
                <strong className="text-brand-charcoal">cloffice</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ultimate-cloffice-guide"
                  className="inline-flex items-center justify-center gap-2 bg-brand-sage text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-sage-dark transition-colors text-base"
                >
                  Start the Ultimate Guide <ArrowRight size={18} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand-charcoal text-brand-charcoal px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-charcoal hover:text-white transition-colors text-base"
                >
                  Shop Amazon Picks
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8">
                {["Guides & Tutorials", "Curated Amazon Picks", "Free Inspiration"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-gray-500"
                    >
                      <CheckCircle size={14} className="text-brand-sage" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-cloffice.jpg"
                  alt="A beautifully converted closet home office"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <div className="font-bold text-brand-charcoal text-sm">Closet → Cloffice</div>
                  <div className="text-xs text-gray-500">Any size, any budget</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-brand-charcoal">
              Latest Guides
            </h2>
            <p className="text-gray-500 mt-1">
              Step-by-step cloffice inspiration and how-tos
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-brand-sage font-medium hover:text-brand-sage-dark transition-colors"
          >
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.slice(0, 3).map((post) => {
            const coverImg = POST_COVERS[post.slug];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-sage/30 transition-all flex flex-col"
              >
                {/* Cover image */}
                {coverImg && (
                  <div className="overflow-hidden h-44">
                    <img
                      src={coverImg}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-sage bg-brand-sage/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-brand-charcoal text-lg leading-snug mb-3 group-hover:text-brand-sage transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1 text-brand-sage font-medium text-sm">
                    Read guide <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-brand-sage font-medium"
          >
            View all guides <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-charcoal">
                Top Amazon Picks
              </h2>
              <p className="text-gray-500 mt-1">
                Our most-recommended cloffice products on Amazon
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:flex items-center gap-1 text-brand-sage font-medium hover:text-brand-sage-dark transition-colors"
            >
              All picks <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <a
                key={product.name}
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-brand-sage/30 transition-all flex flex-col bg-white"
              >
                {/* Product image */}
                <div className="bg-white flex items-center justify-center p-4 h-44 border-b border-gray-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-semibold text-brand-terra uppercase tracking-wide mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-brand-charcoal mb-1.5 text-sm group-hover:text-brand-sage transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-charcoal font-bold text-sm">
                      {product.price}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-brand-terra font-semibold">
                      Amazon <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-brand-charcoal text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              See All 40+ Amazon Picks <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Follow CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-sage rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Follow for Daily Cloffice Inspiration
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            New cloffice ideas, Amazon finds, and before/after transformations
            every week on Pinterest, Instagram, and TikTok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-sage px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              📌 Pinterest
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              📸 Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border border-white/40 px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure Banner */}
      <div className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-amber-700 text-center">
            <strong>Disclosure:</strong> As an Amazon Associate, ClosetOfficeIdeas earns
            from qualifying purchases. This is at no extra cost to you.{" "}
            <Link href="/disclosure" className="underline hover:text-amber-900">
              Read our full disclosure.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { getPostBySlug, allPosts } from "@/lib/posts";

const ASIN_IMAGES: Record<string, string> = {
  B01L1JK0VW: "https://m.media-amazon.com/images/I/61vGvGIY3JL._AC_SL1200_.jpg",
  B076VNFZJG: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
  B07988PS8K: "https://m.media-amazon.com/images/I/71bhk1Uh1rL._AC_SL1500_.jpg",
  B001J7JYX2: "https://m.media-amazon.com/images/I/71gKMftC%2BSL._AC_SL1054_.jpg",
  B09B3MJMD1: "https://m.media-amazon.com/images/I/71MttyoJxeL._AC_SL1500_.jpg",
  B09TDJB8L2: "https://m.media-amazon.com/images/I/51C1tHksGIL._AC_SL1500_.jpg",
  B0CSFQQVVT: "https://m.media-amazon.com/images/I/61xI72GTQoL._AC_SL1500_.jpg",
  B001E1Y5O6: "https://m.media-amazon.com/images/I/81cK1XA%2BufL._AC_SL1500_.jpg",
  B07Q4NLWKX: "https://m.media-amazon.com/images/I/71yHEwDnmPL._AC_SL1500_.jpg",
  B01AV6UJK8: "https://m.media-amazon.com/images/I/81beYhOpeOL._AC_SL1300_.jpg",
};

function getAsinImage(affiliateUrl: string): string | null {
  const m = affiliateUrl.match(/\/dp\/([A-Z0-9]{10})/);
  return m ? (ASIN_IMAGES[m[1]] ?? null) : null;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Back nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-brand-sage transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Post Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-brand-sage bg-brand-sage/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-charcoal leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed border-l-4 border-brand-sage pl-5">
            {post.intro}
          </p>
        </header>

        {/* Affiliate Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-sm text-amber-800">
          <strong>Disclosure:</strong> This post contains Amazon affiliate links. As an
          Amazon Associate, we earn from qualifying purchases at no extra cost to
          you.{" "}
          <Link href="/disclosure" className="underline">
            Read our full disclosure.
          </Link>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4 pb-2 border-b border-gray-100">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {section.content}
              </p>

              {section.bullets && (
                <ul className="space-y-2 mb-6 ml-4">
                  {section.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-brand-sage mt-1 shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.products && section.products.length > 0 && (
                <div className="space-y-4 mt-6">
                  {section.products.map((product) => {
                    const isRealLink = product.affiliatePlaceholder.startsWith("https://");
                    const imgUrl = isRealLink ? getAsinImage(product.affiliatePlaceholder) : null;
                    return (
                      <a
                        key={product.id}
                        href={isRealLink ? product.affiliatePlaceholder : undefined}
                        target={isRealLink ? "_blank" : undefined}
                        rel={isRealLink ? "noopener noreferrer sponsored" : undefined}
                        className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-brand-sage/30 transition-all flex flex-col sm:flex-row"
                      >
                        {/* Product Image */}
                        {imgUrl && (
                          <div className="bg-white sm:w-40 shrink-0 flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-gray-100">
                            <img
                              src={imgUrl}
                              alt={product.name}
                              className="w-32 h-32 object-contain"
                            />
                          </div>
                        )}

                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-brand-terra uppercase tracking-wide mb-1">
                                {product.category}
                              </div>
                              <h3 className="font-bold text-brand-charcoal text-lg group-hover:text-brand-sage transition-colors">
                                {product.name}
                              </h3>
                            </div>
                            <div className="shrink-0 text-right">
                              <div className="text-xl font-bold text-brand-charcoal">
                                {product.price}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                            {product.description}
                          </p>

                          <div className="bg-brand-sage/5 border border-brand-sage/20 rounded-lg p-3 mb-4">
                            <p className="text-xs font-semibold text-brand-sage-dark mb-1">
                              ⭐ Why we love it:
                            </p>
                            <p className="text-sm text-gray-600">
                              {product.whyWeLoveIt}
                            </p>
                          </div>

                          {isRealLink && (
                            <div className="inline-flex items-center gap-2 bg-brand-terra text-white px-4 py-2 rounded-xl font-semibold text-sm self-start group-hover:bg-brand-terra/90 transition-colors">
                              Shop on Amazon <ExternalLink size={13} />
                            </div>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-brand-sage rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Wrapping Up</h2>
          <p className="text-white/90 leading-relaxed">{post.conclusion}</p>
        </div>

        {/* Social share prompt */}
        <div className="mt-8 p-6 bg-white border border-gray-100 rounded-2xl text-center">
          <p className="font-semibold text-brand-charcoal mb-3">
            Found this useful? Save it to your Pinterest board!
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E60023] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#c0001d] transition-colors"
            >
              📌 Save to Pinterest
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-charcoal text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              📸 Share on Instagram
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
              More Cloffice Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-brand-sage/30 transition-all"
                >
                  <span className="text-xs font-semibold text-brand-sage bg-brand-sage/10 px-2 py-0.5 rounded-full">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-brand-charcoal mt-3 mb-2 group-hover:text-brand-sage transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-1 text-brand-sage text-sm font-medium">
                    Read <ArrowRight size={13} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

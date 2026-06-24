"use client";

import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { allPosts } from "@/lib/posts";

const categories = ["All", "Guides", "Lighting", "Desks", "Organization"];

export default function BlogPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-brand-charcoal mb-3">
            Cloffice Blog
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Step-by-step guides, product roundups, and inspiration to build your
            perfect closet home office.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-sage/30 transition-all ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand-sage bg-brand-sage/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                <h2
                  className={`font-bold text-brand-charcoal group-hover:text-brand-sage transition-colors mb-4 leading-snug ${
                    index === 0 ? "text-3xl" : "text-xl"
                  }`}
                >
                  {post.title}
                </h2>

                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-brand-sage font-semibold text-sm">
                    Read article <ArrowRight size={14} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Tag size={11} />
                    {post.sections.reduce(
                      (acc, s) => acc + (s.products?.length ?? 0),
                      0
                    )}{" "}
                    Amazon picks inside
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Disclosure */}
      <div className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-amber-700 text-center">
            <strong>Disclosure:</strong> As an Amazon Associate, ClosetOfficeIdeas earns from qualifying purchases at no extra cost to you.{" "}
            <Link href="/disclosure" className="underline">Read our disclosure.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ExternalLink, AlertCircle } from "lucide-react";

// Main product image from each Amazon listing carousel
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

interface Product {
  name: string;
  description: string;
  price: string;
  whyWeLoveIt: string;
  affiliatePlaceholder: string;
  bestFor: string;
}

const productCategories = [
  {
    id: "lighting",
    emoji: "💡",
    title: "Lighting",
    subtitle: "The #1 cloffice upgrade",
    products: [
      {
        name: "Litever LED Under-Cabinet Light Bar Kit",
        description: "Dimmable 3000K warm white LED bars. 3-pack, 12 inches each. Plug-in with adhesive mounting.",
        price: "$29.99",
        whyWeLoveIt: "Transforms any cloffice shelf into a magazine-worthy setup. The warmth makes it feel cozy, not clinical.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01L1JK0VW?tag=closetoffice-20",
        bestFor: "Under-shelf lighting",
      },
      {
        name: "LE Linkable LED Light Bars",
        description: "Plug-in LED bars that link together. Chain multiple bars from a single outlet. 3000K neutral white.",
        price: "$30–$50",
        whyWeLoveIt: "One plug, multiple bars. Chain them across all your shelves for perfectly even desk lighting.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01L1JK0VW?tag=closetoffice-20",
        bestFor: "Multiple shelf runs",
      },
      {
        name: "BenQ ScreenBar LED Monitor Light Bar",
        description: "Mounts on top of your monitor. Asymmetric beam lights your desk without glare on screen. Auto-dimming.",
        price: "$92.65",
        whyWeLoveIt: "Zero desk space used. The no-glare beam is genuinely better than any side desk lamp for screen work.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B076VNFZJG?tag=closetoffice-20",
        bestFor: "Monitor light bar",
      },
      {
        name: "Brilliant Evolution Wireless Puck Lights",
        description: "Battery-powered, motion-activated. Zero wiring. Instant overhead ambient light for any closet.",
        price: "$20–$35",
        whyWeLoveIt: "Best no-wiring overhead solution. Motion activation means the lights are always ready when you open the door.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01L1JK0VW?tag=closetoffice-20",
        bestFor: "No-wiring setups",
      },
    ],
  },
  {
    id: "desks",
    emoji: "🪵",
    title: "Desks & Surfaces",
    subtitle: "Wall-mounted solutions that disappear when not in use",
    products: [
      {
        name: "Haotian SoBuy Wall-Mount Fold-Down Desk",
        description: "Solid wood, 110 lb capacity. Folds completely flat. Multiple wood tones available.",
        price: "$99.99",
        whyWeLoveIt: "Best overall fold-down desk. The solid wood construction handles dual monitors without wobble.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07988PS8K?tag=closetoffice-20",
        bestFor: "Primary desk surface",
      },
      {
        name: "VIVO Wall Mounted Fold Down Desk",
        description: "23.6\" deep when open. White or wood finish. Sturdy steel support legs. 88 lb capacity.",
        price: "$75–$100",
        whyWeLoveIt: "Best value fold-down desk. Steel support legs feel rock solid. White version looks especially clean.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07988PS8K?tag=closetoffice-20",
        bestFor: "Best value pick",
      },
      {
        name: "Prepac Wall-Mounted Drop Leaf Desk",
        description: "Built-in shelf above the desk when open. 27\" wide x 19\" deep. Engineered wood construction.",
        price: "$120–$160",
        whyWeLoveIt: "Integrated shelf above the desk gives you desk + storage in one piece. Brilliant for small closets.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07988PS8K?tag=closetoffice-20",
        bestFor: "Desk + storage combo",
      },
    ],
  },
  {
    id: "organization",
    emoji: "📌",
    title: "Organization",
    subtitle: "Systems that keep your cloffice functional long-term",
    products: [
      {
        name: "Wall Control 30-P-3232B Metal Pegboard",
        description: "32\" x 32\" steel pegboard with mounting hardware. Holds 50+ lbs. Black powder-coat finish.",
        price: "$51.29",
        whyWeLoveIt: "Best pegboard you can buy. Metal is far more durable than plastic and the black looks stunning.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B001J7JYX2?tag=closetoffice-20",
        bestFor: "Wall organization",
      },
      {
        name: "Mkono Rustic Floating Shelves (Set of 2)",
        description: "Solid wood with metal bracket. 24\" long. Holds 33 lbs each. Rustic brown finish.",
        price: "$20.99",
        whyWeLoveIt: "The rustic wood + metal combo looks expensive. Perfect for books, plants, and baskets.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07Q4NLWKX?tag=closetoffice-20",
        bestFor: "Open shelving",
      },
      {
        name: "Trademark Innovations Hyacinth Baskets (Set of 4)",
        description: "Hand-woven water hyacinth over iron wire frame. 12\" cube. Folds flat for storage.",
        price: "$65.24",
        whyWeLoveIt: "Natural textures make open shelves look curated. Set of 4 covers every shelf scenario.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01AV6UJK8?tag=closetoffice-20",
        bestFor: "Shelf styling + storage",
      },
      {
        name: "DYMO LabelManager Label Maker",
        description: "Handheld label maker. One tape cartridge included. Works on everything.",
        price: "$20–$30",
        whyWeLoveIt: "Labels are the system that makes organization maintainable. Without them, it devolves in weeks.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01AV6UJK8?tag=closetoffice-20",
        bestFor: "Long-term maintenance",
      },
    ],
  },
  {
    id: "cable",
    emoji: "🔌",
    title: "Cable Management",
    subtitle: "The invisible upgrade that makes everything look professional",
    products: [
      {
        name: "ZhiYo 68-in Cable Management Raceway",
        description: "Self-adhesive, paintable cable channel. 68 inches total. Runs cables flat along walls.",
        price: "$15–$22",
        whyWeLoveIt: "Paint it to match your wall and cables completely disappear. Most professional-looking solution.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B09TDJB8L2?tag=closetoffice-20",
        bestFor: "Wall cable routing",
      },
      {
        name: "Cable Management Box with Lid",
        description: "Hides power strips and cable clutter. Matte finish. Two cord slots on each side.",
        price: "$20–$30",
        whyWeLoveIt: "The single best product for eliminating the under-desk cable mess. Cables in, clean box out.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B09TDJB8L2?tag=closetoffice-20",
        bestFor: "Under-desk clutter",
      },
      {
        name: "VELCRO Brand ONE-WRAP Cable Ties (100-pack)",
        description: "Reusable velcro cable ties. 8-inch. Reusable — unlike zip ties that you cut once.",
        price: "$15.89",
        whyWeLoveIt: "Buy once, use forever. Reusable velcro means you can rearrange your setup without cutting ties.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B001E1Y5O6?tag=closetoffice-20",
        bestFor: "Bundling all cables",
      },
      {
        name: "Anker 9-in-1 Desktop Charger Power Strip",
        description: "3 AC outlets, 2 USB-A, 4 USB-C ports. 100W total. Compact desktop form factor.",
        price: "~$55",
        whyWeLoveIt: "USB-C ports handle modern laptops and tablets. One block, every device covered.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B0CSFQQVVT?tag=closetoffice-20",
        bestFor: "All your plugs",
      },
    ],
  },
  {
    id: "tech",
    emoji: "🖥️",
    title: "Tech & Ergonomics",
    subtitle: "Set up for comfort and productivity",
    products: [
      {
        name: "OImatser Monitor Stand Riser with USB Hub",
        description: "Raises monitor to eye height. 2 USB-A ports on the side. Shelf for keyboard underneath.",
        price: "$39.99",
        whyWeLoveIt: "Solves ergonomics AND organization simultaneously. Under-monitor shelf doubles desk storage.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B09B3MJMD1?tag=closetoffice-20",
        bestFor: "Monitor ergonomics",
      },
      {
        name: "BenQ ScreenBar (Monitor Light Bar)",
        description: "Mounts on top of monitor. Asymmetric beam lights only your desk. No glare on screen. Auto-dimming.",
        price: "$92.65",
        whyWeLoveIt: "Zero desk space used. The no-glare beam is better than any side desk lamp for screen work.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B076VNFZJG?tag=closetoffice-20",
        bestFor: "Screen-side task light",
      },
      {
        name: "IVISII 10-Inch Ring Light with Stand",
        description: "3 color modes, 10 brightness levels. Phone mount included. Desktop stand.",
        price: "$25–$40",
        whyWeLoveIt: "Non-negotiable for video calls. The ring light eliminates the overhead shadow that makes you look tired.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B076VNFZJG?tag=closetoffice-20",
        bestFor: "Video call lighting",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-brand-charcoal mb-3">
            Amazon Cloffice Picks
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            A curated collection of Amazon finds selected for the specific needs of a closet office conversion — organized by category, with specs and sizing that actually fit a cloffice.
          </p>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong>Affiliate Disclosure:</strong> This page contains Amazon affiliate links. When you purchase through these links, we earn a small commission at no extra cost to you.{" "}
            <Link href="/disclosure" className="underline font-medium">
              Read full disclosure →
            </Link>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {productCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.emoji}</span>
              <div>
                <h2 className="text-2xl font-bold text-brand-charcoal">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm">{category.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.products.map((product, idx) => {
                const imgUrl = getAsinImage(product.affiliatePlaceholder);
                return (
                  <a
                    key={idx}
                    href={product.affiliatePlaceholder}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-sage/30 transition-all flex flex-col"
                  >
                    {/* Product Image */}
                    {imgUrl && (
                      <div className="bg-white border-b border-gray-100 flex items-center justify-center p-4 h-52">
                        <img
                          src={imgUrl}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <span className="text-xs font-semibold text-brand-terra uppercase tracking-wide">
                            {product.bestFor}
                          </span>
                          <h3 className="font-bold text-brand-charcoal text-base mt-0.5 leading-snug group-hover:text-brand-sage transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <span className="text-base font-bold text-brand-charcoal shrink-0">
                          {product.price}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm mb-3 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      <div className="bg-brand-sage/5 border border-brand-sage/20 rounded-lg p-3 mb-4">
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold text-brand-sage-dark">⭐ Why it fits: </span>
                          {product.whyWeLoveIt}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-brand-terra text-white px-4 py-2.5 rounded-xl font-semibold text-sm justify-center group-hover:bg-brand-terra/90 transition-colors">
                        Shop on Amazon <ExternalLink size={13} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-brand-charcoal py-14 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Cloffice?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Start with our step-by-step Ultimate Cloffice Guide — it walks you through every product and step.
          </p>
          <Link
            href="/blog/ultimate-cloffice-guide"
            className="inline-flex items-center gap-2 bg-brand-sage text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-sage-dark transition-colors text-base"
          >
            Read the Ultimate Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

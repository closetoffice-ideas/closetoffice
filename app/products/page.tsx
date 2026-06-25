"use client";

import Link from "next/link";
import { ExternalLink, AlertCircle } from "lucide-react";

// Main product image from each Amazon listing
const ASIN_IMAGES: Record<string, string> = {
  // Lighting
  B01L1JK0VW: "https://m.media-amazon.com/images/I/61vGvGIY3JL._AC_SL1200_.jpg",
  B01L6W7HHE: "https://m.media-amazon.com/images/I/71+XhL5-nhL._AC_SL1200_.jpg",
  B076VNFZJG: "https://m.media-amazon.com/images/I/71FpP6myfPL._AC_SL1500_.jpg",
  B079WQT6QM: "https://m.media-amazon.com/images/I/71uoWNwekOL._AC_SL1500_.jpg",
  // Desks
  B07988PS8K: "https://m.media-amazon.com/images/I/71bhk1Uh1rL._AC_SL1500_.jpg",
  B07R69WC9Y: "https://m.media-amazon.com/images/I/71dDdWzcCGL._AC_SL1500_.jpg",
  B009U9RLOA: "https://m.media-amazon.com/images/I/41W0zKHQMHL._AC_SL1000_.jpg",
  // Organization
  B001J7JYX2: "https://m.media-amazon.com/images/I/71gKMftC%2BSL._AC_SL1054_.jpg",
  B07Q4NLWKX: "https://m.media-amazon.com/images/I/71yHEwDnmPL._AC_SL1500_.jpg",
  B0BKQZ9RNP: "https://m.media-amazon.com/images/I/91qpGdvYIXL._AC_SL1500_.jpg",
  B005X9VZ70: "https://m.media-amazon.com/images/I/71klxrHsXiL._AC_SL1500_.jpg",
  // Cable Management
  B09TDJB8L2: "https://m.media-amazon.com/images/I/51C1tHksGIL._AC_SL1500_.jpg",
  B08JC55TTL: "https://m.media-amazon.com/images/I/51EtlY0MK8L._AC_SL1200_.jpg",
  B001E1Y5O6: "https://m.media-amazon.com/images/I/81cK1XA%2BufL._AC_SL1500_.jpg",
  B0CSFQQVVT: "https://m.media-amazon.com/images/I/61xI72GTQoL._AC_SL1500_.jpg",
  // Tech
  B09B3MJMD1: "https://m.media-amazon.com/images/I/71MttyoJxeL._AC_SL1500_.jpg",
  B08M94BTYC: "https://m.media-amazon.com/images/I/41xG8Yh0rlL._AC_SL1500_.jpg",
  B07SW5G7XB: "https://m.media-amazon.com/images/I/61o7Yh4OnuL._AC_SL1200_.jpg",
};

function getAsinImage(affiliateUrl: string): string | null {
  const m = affiliateUrl.match(/\/dp\/([A-Z0-9]{10})/);
  return m ? (ASIN_IMAGES[m[1]] ?? null) : null;
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
        name: "LE Linkable LED Light Bars (6-Pack)",
        description: "14-inch plug-in LED bars that chain together. Run up to 6 bars off one outlet. 3000K neutral white.",
        price: "$30–$50",
        whyWeLoveIt: "One plug, multiple bars. Chain them across all your shelves for perfectly even desk lighting with no extra outlets.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B01L6W7HHE?tag=closetoffice-20",
        bestFor: "Multiple shelf runs",
      },
      {
        name: "BenQ ScreenBar LED Monitor Light Bar",
        description: "Clips to top of your monitor. Asymmetric beam lights your desk without glare on screen. Auto-dimming.",
        price: "$92.65",
        whyWeLoveIt: "Zero desk space used. The no-glare beam is genuinely better than any side desk lamp for screen work.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B076VNFZJG?tag=closetoffice-20",
        bestFor: "Monitor light bar",
      },
      {
        name: "Brilliant Evolution Wireless LED Puck Lights",
        description: "Battery-powered, motion-activated overhead pucks. 3-pack with remote. Zero wiring required.",
        price: "$20–$35",
        whyWeLoveIt: "Best no-wiring overhead solution. Motion activation means lights are always ready when you open the closet door.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B079WQT6QM?tag=closetoffice-20",
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
        description: "MDF + engineered wood, 66 lb capacity. Folds completely flat. Multiple finish options.",
        price: "$75.99",
        whyWeLoveIt: "Best overall fold-down desk. Compact profile handles a laptop and monitor without any wobble.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07988PS8K?tag=closetoffice-20",
        bestFor: "Primary desk surface",
      },
      {
        name: "VIVO Wall Mounted Fold Down Desk",
        description: "23.6\" deep when open. Steel frame support with MDF surface. White or black finish. 88 lb capacity.",
        price: "$75–$100",
        whyWeLoveIt: "Steel support legs feel rock solid. The white version looks especially clean in a modern cloffice.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07R69WC9Y?tag=closetoffice-20",
        bestFor: "Best value pick",
      },
      {
        name: "Prepac Wall-Mounted Drop Leaf Desk",
        description: "Built-in shelf above the desk surface when open. 27\" wide × 19\" deep. Engineered wood.",
        price: "$120–$160",
        whyWeLoveIt: "Integrated shelf above the desk gives you desk + storage in one piece. Brilliant for tight closets.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B009U9RLOA?tag=closetoffice-20",
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
        description: "Solid wood with metal wire basket bracket. 17.7\" long. 4.7-star rating, 4,000+ reviews.",
        price: "$20.99",
        whyWeLoveIt: "The rustic wood + metal combo looks expensive. Perfect for books, plants, and woven baskets.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07Q4NLWKX?tag=closetoffice-20",
        bestFor: "Open shelving",
      },
      {
        name: "Trademark Innovations Foldable Hyacinth Baskets (Set of 4)",
        description: "Hand-woven water hyacinth over iron wire frame. 9.5\" cube, folds flat for storage. 4.8 stars.",
        price: "$39.99",
        whyWeLoveIt: "Natural textures make open shelves look curated. Folds flat so you can swap them out without bulk.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B0BKQZ9RNP?tag=closetoffice-20",
        bestFor: "Shelf styling + storage",
      },
      {
        name: "DYMO LabelManager 160 Label Maker",
        description: "Handheld QWERTY label maker. One-touch smart keys, large display. One D1 tape included.",
        price: "$20–$30",
        whyWeLoveIt: "Labels are the system that makes organization maintainable. Without them, it devolves in weeks.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B005X9VZ70?tag=closetoffice-20",
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
        name: "Naeety Cable Management Box (2-Pack)",
        description: "Wooden-style cord organizer boxes, large + medium. Hides power strips. Two cord slots per side.",
        price: "$20–$25",
        whyWeLoveIt: "The single best product for eliminating under-desk cable mess. Cables in, clean wooden box out.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B08JC55TTL?tag=closetoffice-20",
        bestFor: "Under-desk clutter",
      },
      {
        name: "VELCRO Brand ONE-WRAP Cable Ties (100-pack)",
        description: "Reusable 8-inch velcro cable ties. Unlike zip ties — cut nothing, rearrange any time.",
        price: "$15.89",
        whyWeLoveIt: "Buy once, use forever. Reusable velcro means you can rearrange your setup without cutting ties.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B001E1Y5O6?tag=closetoffice-20",
        bestFor: "Bundling all cables",
      },
      {
        name: "Anker 9-in-1 Desktop Charger Power Strip",
        description: "3 AC outlets, 2 USB-A, 4 USB-C ports. 100W total output. Flat plug, 5-ft cord.",
        price: "~$40",
        whyWeLoveIt: "USB-C ports handle modern laptops and tablets. One compact block covers every device on your desk.",
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
        description: "Raises monitor to eye height. 2 USB-A ports on side. Shelf for keyboard underneath.",
        price: "$39.99",
        whyWeLoveIt: "Solves ergonomics AND organization simultaneously. Under-monitor shelf doubles your desk storage.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B09B3MJMD1?tag=closetoffice-20",
        bestFor: "Monitor ergonomics",
      },
      {
        name: "Lamicall Adjustable Laptop Stand",
        description: "Foldable aluminum stand. 6 adjustable heights. Fits 10\"–17.3\" laptops. Open design for ventilation.",
        price: "~$30",
        whyWeLoveIt: "Raises your screen to eye level in seconds. Folds flat for the ultimate cloffice cleanup when you close the door.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B08M94BTYC?tag=closetoffice-20",
        bestFor: "Laptop users",
      },
      {
        name: "IVISII 10-Inch Ring Light with Stand",
        description: "Desktop ring light, 3 color temperatures, 10 brightness levels. Phone/camera clip included.",
        price: "$25–$40",
        whyWeLoveIt: "Non-negotiable for video calls. The ring light eliminates the overhead shadow that makes you look tired.",
        affiliatePlaceholder: "https://www.amazon.com/dp/B07SW5G7XB?tag=closetoffice-20",
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

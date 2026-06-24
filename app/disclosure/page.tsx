import Link from "next/link";

export default function DisclosurePage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-charcoal mb-3">
          Affiliate Disclosure
        </h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <div className="prose max-w-none">
          <h2>Amazon Associates Program</h2>
          <p>
            ClosetOfficeIdeas is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising
            and linking to Amazon.com.
          </p>
          <p>
            This means that when you click on a link to an Amazon product on
            this site and make a purchase, we may earn a small commission at{" "}
            <strong>absolutely no additional cost to you</strong>. The price you
            pay is exactly the same whether you use our affiliate link or go
            directly to Amazon.
          </p>

          <h2>What This Means for You</h2>
          <p>
            Our affiliate relationships <strong>do not influence</strong> which
            products we recommend. We only recommend products that we genuinely
            believe are high quality and useful for cloffice builds. We would
            never recommend a product solely because of the commission it pays.
          </p>
          <p>
            The small commissions we earn from qualifying purchases help us
            continue creating free guides, product research, and inspiration for
            the ClosetOfficeIdeas community — at no cost to our readers.
          </p>

          <h2>FTC Disclosure Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission's 16 CFR Part 255
            guidelines on Disclosure of Material Connections, ClosetOfficeIdeas
            discloses any material connection between this site and the products
            or services recommended. Affiliate links are a material connection,
            and we disclose this at the top of every post and page that contains
            them.
          </p>

          <h2>Other Potential Affiliate Relationships</h2>
          <p>
            From time to time, ClosetOfficeIdeas may partner with other retailers
            or use other affiliate programs in addition to Amazon Associates. Any
            such relationships will be disclosed in the relevant content.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or this
            disclosure, please contact us through our social channels. We're
            committed to full transparency with our audience.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Return to{" "}
            <Link href="/" className="text-brand-sage hover:text-brand-sage-dark underline">
              Home
            </Link>{" "}
            or read our{" "}
            <Link href="/privacy" className="text-brand-sage hover:text-brand-sage-dark underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

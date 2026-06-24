import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-charcoal mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <div className="prose max-w-none">
          <h2>Information We Collect</h2>
          <p>
            ClosetOfficeIdeas does not collect personal information unless you
            voluntarily provide it (for example, by contacting us). We may
            collect non-personally identifiable information automatically through
            standard web analytics tools, including pages visited, time spent on
            the site, and browser/device type.
          </p>

          <h2>Cookies and Analytics</h2>
          <p>
            This site may use cookies and similar tracking technologies to improve
            your browsing experience and analyze site traffic. We may use
            third-party analytics services (such as Google Analytics) that collect
            aggregated, anonymized data about site usage. These services have
            their own privacy policies governing the use of that information.
          </p>

          <h2>Amazon Associates and Third-Party Links</h2>
          <p>
            This site participates in the Amazon Services LLC Associates Program.
            When you click Amazon affiliate links, you are directed to Amazon.com,
            which has its own privacy policy. Amazon may use cookies to track
            purchases made through affiliate links. We encourage you to review
            Amazon's Privacy Notice at{" "}
            <a
              href="https://www.amazon.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-sage underline"
            >
              amazon.com/privacy
            </a>
            .
          </p>

          <h2>No Sale of Personal Information</h2>
          <p>
            ClosetOfficeIdeas does not sell, trade, or transfer your personally
            identifiable information to outside parties.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            This site is not directed to children under 13 years of age. We do
            not knowingly collect personal information from children under 13. If
            you believe a child has provided personal information, please contact
            us so we can delete it.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date. Your continued use of the
            site after any changes constitutes your acceptance of the updated
            policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out
            through our social channels on Pinterest, Instagram, or TikTok
            (@ClosetOfficeIdeas).
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Return to{" "}
            <Link href="/" className="text-brand-sage hover:text-brand-sage-dark underline">
              Home
            </Link>{" "}
            or read our{" "}
            <Link href="/disclosure" className="text-brand-sage hover:text-brand-sage-dark underline">
              Affiliate Disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

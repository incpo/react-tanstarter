import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(policy)/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy - OverGPT",
      },
      {
        name: "description",
        content: "Learn how OverGPT collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
      },
      {
        property: "og:title",
        content: "Privacy Policy - OverGPT",
      },
      {
        property: "og:description",
        content: "Learn how OverGPT protects your privacy and handles your data.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <p className="text-sm text-muted-foreground">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
          <p>
            At OverGPT ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
            AI text humanization service at www.overgpt.com.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">2. Information We Collect</h2>

          <h3 className="text-xl font-medium">2.1 Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (email address, username)</li>
            <li>Text content you submit for humanization</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Communications with our support team</li>
          </ul>

          <h3 className="text-xl font-medium">2.2 Information Automatically Collected</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and browser information</li>
            <li>Device and operating system details</li>
            <li>Usage data and analytics</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">3. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our AI text humanization services</li>
            <li>Process transactions and manage your account</li>
            <li>Communicate with you about updates and features</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
            <li>Analyze usage patterns to enhance user experience</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">4. Data Retention and Deletion</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy.
            Text content submitted for humanization is automatically deleted from our servers after processing, unless
            you choose to save it in your account history.
          </p>
          <p>
            You may request deletion of your account and associated data at any time by contacting our support team.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Encrypted storage of sensitive information</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal data on a need-to-know basis</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">6. Third-Party Services</h2>
          <p>
            We may use third-party services for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment processing (Stripe, PayPal)</li>
            <li>Analytics (Google Analytics)</li>
            <li>Cloud hosting and infrastructure</li>
          </ul>
          <p>
            These services have their own privacy policies, and we recommend reviewing them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">7. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your data</li>
            <li>Data portability</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">8. Cookies Policy</h2>
          <p>
            We use cookies and similar technologies to enhance your experience. You can manage cookie preferences
            through your browser settings. Essential cookies required for service functionality cannot be disabled.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">9. Children's Privacy</h2>
          <p>
            Our service is not intended for users under 18 years of age. We do not knowingly collect personal
            information from children under 18.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure
            appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes via email
            or prominent notice on our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p>Email: privacy@overgpt.com</p>
            <p>Website: www.overgpt.com</p>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            By using OverGPT, you acknowledge that you have read and understood this Privacy Policy and agree
            to its terms.
          </p>
        </section>
      </div>
    </div>
  );
}
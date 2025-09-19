import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(policy)/terms-and-conditions")({
  head: () => ({
    meta: [
      {
        title: "Terms & Conditions - OverGPT",
      },
      {
        name: "description",
        content: "Terms and Conditions for using OverGPT's AI text humanization services. Legal agreement between users and OverGPT.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions - OverGPT",
      },
      {
        property: "og:description",
        content: "Read our Terms & Conditions for using OverGPT services.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <p className="text-sm text-muted-foreground">
          Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8">
          <p className="font-semibold">Legal Entity:</p>
          <p>OverGPT</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">1. Agreement to Terms</h2>
          <p>
            These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your")
            and OverGPT ("Company," "we," "us," or "our"), concerning
            your access to and use of the www.overgpt.com website and any related services (collectively, the "Service").
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these
            terms, then you do not have permission to access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">2. Description of Service</h2>
          <p>
            OverGPT provides an AI-powered text humanization service that transforms AI-generated content into more natural,
            human-like text. Our Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Text processing and humanization algorithms</li>
            <li>User account management</li>
            <li>Subscription-based access tiers</li>
            <li>API access (where applicable)</li>
            <li>Customer support services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">3. User Accounts</h2>

          <h3 className="text-xl font-medium">3.1 Account Creation</h3>
          <p>
            To use certain features of our Service, you must register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Immediately notify us of any unauthorized use</li>
          </ul>

          <h3 className="text-xl font-medium">3.2 Account Termination</h3>
          <p>
            We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion,
            especially if you violate these Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">4. Acceptable Use Policy</h2>

          <h3 className="text-xl font-medium">4.1 Permitted Uses</h3>
          <p>You may use our Service only for lawful purposes and in accordance with these Terms.</p>

          <h3 className="text-xl font-medium">4.2 Prohibited Uses</h3>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Generate content that is harmful, offensive, or discriminatory</li>
            <li>Create misleading or fraudulent content</li>
            <li>Spread misinformation or propaganda</li>
            <li>Engage in academic dishonesty or plagiarism</li>
            <li>Attempt to bypass AI detection for deceptive purposes</li>
            <li>Reverse engineer or attempt to extract our algorithms</li>
            <li>Overload or damage our servers through excessive use</li>
            <li>Resell or redistribute our Service without authorization</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">5. Intellectual Property Rights</h2>

          <h3 className="text-xl font-medium">5.1 Our Intellectual Property</h3>
          <p>
            The Service and its original content (excluding user-generated content), features, and functionality are
            and will remain the exclusive property of OverGPT and its licensors.
          </p>

          <h3 className="text-xl font-medium">5.2 Your Content</h3>
          <p>
            You retain all rights to the content you submit to our Service. By submitting content, you grant us a
            worldwide, non-exclusive, royalty-free license to use, process, and store your content solely for the
            purpose of providing our Service to you.
          </p>

          <h3 className="text-xl font-medium">5.3 Feedback</h3>
          <p>
            Any feedback, suggestions, or improvements you provide about our Service will become our property and may
            be used without compensation to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">6. Payment Terms</h2>

          <h3 className="text-xl font-medium">6.1 Subscription Fees</h3>
          <p>
            Access to certain features requires a paid subscription. By purchasing a subscription, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pay all applicable fees as described on our pricing page</li>
            <li>Provide valid payment information</li>
            <li>Accept automatic renewal unless cancelled</li>
            <li>Pay any applicable taxes</li>
          </ul>

          <h3 className="text-xl font-medium">6.2 Billing</h3>
          <p>
            Subscriptions are billed in advance on a recurring basis (monthly or annually). We reserve the right to
            change our prices with 30 days' notice.
          </p>

          <h3 className="text-xl font-medium">6.3 Refunds</h3>
          <p>
            Refunds are governed by our Refund Policy, which is incorporated into these Terms by reference.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">7. Privacy and Data Protection</h2>
          <p>
            Your use of our Service is also governed by our Privacy Policy, which is incorporated into these Terms
            by reference. By using our Service, you consent to our collection and use of information as described
            in the Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">8. Disclaimers and Warranties</h2>

          <h3 className="text-xl font-medium">8.1 Service "As Is"</h3>
          <p>
            Our Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either
            express or implied, including but not limited to warranties of merchantability, fitness for a particular
            purpose, non-infringement, or course of performance.
          </p>

          <h3 className="text-xl font-medium">8.2 No Guarantee of Results</h3>
          <p>
            We do not guarantee that our Service will make your content undetectable by all AI detection tools, as
            these tools constantly evolve. Results may vary based on various factors.
          </p>

          <h3 className="text-xl font-medium">8.3 Third-Party Content</h3>
          <p>
            We are not responsible for any third-party content accessed through our Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OVERGPT AND ITS AFFILIATES, OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use or inability to use the Service</li>
            <li>Any unauthorized access to your data</li>
            <li>Any content obtained from the Service</li>
            <li>Any bugs, viruses, or errors in the Service</li>
          </ul>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS
            PRECEDING THE CLAIM.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless OverGPT and its affiliates,
            officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses,
            including reasonable attorney's fees, arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Your use or misuse of the Service</li>
            <li>Content you submit through the Service</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">11. Dispute Resolution</h2>

          <h3 className="text-xl font-medium">11.1 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where OverGPT operates,
            without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-medium">11.2 Arbitration</h3>
          <p>
            Any dispute arising from these Terms shall be resolved through binding arbitration, except where prohibited by law.
          </p>

          <h3 className="text-xl font-medium">11.3 Class Action Waiver</h3>
          <p>
            You agree to resolve disputes with us on an individual basis and waive your right to participate in
            any class action or class-wide arbitration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of material changes via
            email or prominent notice on our Service. Continued use after changes constitutes acceptance of the
            new Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">13. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
            or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full effect.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">14. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between
            you and OverGPT regarding the use of our Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mt-8">15. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-semibold">OverGPT</p>
            <p>Email: legal@overgpt.com</p>
            <p>Website: www.overgpt.com</p>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            By using OverGPT, you acknowledge that you have read, understood, and agree to be bound by these
            Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
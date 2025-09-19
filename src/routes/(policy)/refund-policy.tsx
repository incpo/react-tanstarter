import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(policy)/refund-policy")({
  head: () => ({
    meta: [
      {
        title: "Refund Policy - OverGPT",
      },
      {
        name: "description",
        content:
          "Understand OverGPT's refund policy, eligibility criteria, and how to request a refund for our AI text humanization services.",
      },
      {
        property: "og:title",
        content: "Refund Policy - OverGPT",
      },
      {
        property: "og:description",
        content: "Learn about our refund policy and satisfaction guarantee.",
      },
    ],
  }),
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Refund Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground text-sm">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">1. Our Commitment</h2>
          <p>
            At OverGPT ("we," "our," or "us"), we stand behind the quality of our AI text
            humanization service. We want you to be completely satisfied with your
            purchase. This Refund Policy outlines the terms and conditions for refunds.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">2. 7-Day Money-Back Guarantee</h2>
          <p>
            We offer a 7-day money-back guarantee on all subscription plans. If you're not
            satisfied with our service within 7 days of your initial purchase, you may
            request a full refund.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <p className="font-medium">
              Note: The 7-day guarantee applies only to first-time subscribers.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">3. Eligibility for Refunds</h2>

          <h3 className="text-xl font-medium">3.1 Eligible for Refund:</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>First-time subscription purchases within 7 days</li>
            <li>Technical issues preventing service access that we cannot resolve</li>
            <li>Accidental duplicate purchases</li>
            <li>Unauthorized charges (with proper documentation)</li>
            <li>Service outages lasting more than 24 consecutive hours</li>
          </ul>

          <h3 className="text-xl font-medium">3.2 Not Eligible for Refund:</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Requests made after 7 days from initial purchase</li>
            <li>Subscription renewals (except for technical issues)</li>
            <li>Partial month refunds for cancelled subscriptions</li>
            <li>Usage that violates our Terms of Service</li>
            <li>
              Dissatisfaction with output quality after extensive usage (over 50
              documents)
            </li>
            <li>Change of mind after the 7-day period</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">4. Subscription Cancellations</h2>
          <p>
            You may cancel your subscription at any time through your account settings.
            Upon cancellation:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              You will continue to have access until the end of your current billing
              period
            </li>
            <li>No future charges will be made</li>
            <li>
              No partial refunds will be issued for unused time in the current period
            </li>
            <li>
              Your account will revert to the free tier (if available) after expiration
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">5. How to Request a Refund</h2>
          <p>To request a refund, please follow these steps:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Email our support team at support@overgpt.com</li>
            <li>Include your account email and order/transaction ID</li>
            <li>Provide a brief reason for your refund request</li>
            <li>Allow 3-5 business days for review</li>
          </ol>
          <p>
            We may request additional information to verify your identity and purchase.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">6. Processing Time</h2>
          <p>Once approved, refunds are processed as follows:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Credit/Debit Cards: 5-10 business days</li>
            <li>PayPal: 3-5 business days</li>
            <li>Bank Transfers: 7-14 business days</li>
          </ul>
          <p>Processing times may vary depending on your financial institution.</p>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">7. Credits and Tokens</h2>
          <p>If you have purchased credits or tokens for document processing:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Unused credits may be eligible for refund within 7 days of purchase</li>
            <li>Used credits are non-refundable</li>
            <li>Credits expire according to the terms at time of purchase</li>
            <li>Bonus or promotional credits are non-refundable</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">8. Dispute Resolution</h2>
          <p>
            If your refund request is denied and you believe this decision was made in
            error, you may:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Request a review by emailing disputes@overgpt.com</li>
            <li>Provide additional documentation supporting your claim</li>
            <li>Allow 5-7 business days for review</li>
          </ol>
          <p>Final decisions on disputes are at our sole discretion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">9. Chargebacks</h2>
          <p>
            Before initiating a chargeback with your financial institution, please contact
            our support team. Chargebacks may result in:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Immediate account suspension</li>
            <li>Loss of access to all services</li>
            <li>Inability to make future purchases</li>
            <li>Collection proceedings for disputed amounts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">10. Special Circumstances</h2>
          <p>We may consider refunds outside these guidelines for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Medical emergencies</li>
            <li>Death of account holder</li>
            <li>Natural disasters affecting service access</li>
            <li>Other extenuating circumstances at our discretion</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">11. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this refund policy at any time. Changes will be
            effective immediately upon posting to our website. Your continued use of our
            service after changes constitutes acceptance of the modified policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="mt-8 text-2xl font-semibold">12. Contact Information</h2>
          <p>For refund requests and questions about this policy:</p>
          <div className="bg-muted rounded-lg p-4">
            <p>Email: support@overgpt.com</p>
            <p>Response Time: 24-48 hours (business days)</p>
            <p>Website: www.overgpt.com</p>
          </div>
        </section>

        <section className="mt-12 border-t pt-8">
          <p className="text-muted-foreground text-sm">
            This Refund Policy is part of our Terms of Service. By using OverGPT, you
            agree to this policy. We recommend reviewing this policy before making any
            purchase.
          </p>
        </section>
      </div>
    </div>
  );
}

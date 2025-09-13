"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#222]">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-base leading-relaxed">
          This Privacy Policy explains how <strong>LockedIn</strong> collects,
          uses, and safeguards your personal information when you use our
          productivity app, including free and premium sessions, streaks and
          points tracking, and merchandise discounts.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Account Information:</strong> Name, email address, and login
            credentials when you register.
          </li>
          <li>
            <strong>Session Data:</strong> Details about the productivity
            sessions you create or join (time, duration, completion status).
          </li>
          <li>
            <strong>Progress & Rewards:</strong> Streaks, points earned, and
            achievements.
          </li>
          <li>
            <strong>Payment Information:</strong> Processed securely by
            third-party providers when purchasing premium sessions or
            merchandise (we do not store payment details).
          </li>
          <li>
            <strong>Device & Usage Data:</strong> App performance, analytics,
            and crash logs to improve the service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Data</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To create and manage your account</li>
          <li>To provide free and premium productivity sessions</li>
          <li>To track your streaks, points, and progress</li>
          <li>To apply discounts and rewards in the merchandise store</li>
          <li>To improve app performance and personalize your experience</li>
          <li>To send updates, notifications, or support messages</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <p>
          We do not sell your personal information. We only share data with
          trusted service providers (e.g., payment processors, analytics tools)
          necessary to operate the app and comply with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          4. Data Retention & Deletion
        </h2>
        <p>
          We retain your information as long as you maintain an account. You may
          request deletion of your data at any time by visiting our{" "}
          <a href="/data-deletion" className="text-[#72D560] underline">
            Data Deletion Page
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your account
          information, and to opt out of non-essential communications.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Payments & Merch</h2>
        <p>
          Payments for premium sessions or merchandise are processed securely by
          third-party providers (such as Stripe, PayPal, or in-app billing). We
          do not store sensitive payment details on our servers.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          7. Updates to this Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          reflected with a revised date at the top of this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
        <p>
          For any questions regarding this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:support@lockedinapp.com"
            className="text-[#72D560] underline"
          >
            support@lockedinapp.com
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

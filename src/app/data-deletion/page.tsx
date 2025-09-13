"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function DataDeletion() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#222]">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Data Deletion Request</h1>
        <p className="text-base leading-relaxed">
          At <strong>LockedIn</strong>, you can request full deletion of your
          account and associated data, including sessions, streaks, points, and
          purchase history.
        </p>

        <h2 className="text-2xl font-semibold mt-8">How to Request Deletion</h2>
        <ul className="list-decimal ml-6 space-y-2">
          <li>
            Send an email to{" "}
            <a
              href="mailto:support@lockedinapp.com"
              className="text-[#72D560] underline"
            >
              support@lockedinapp.com
            </a>{" "}
            with the subject <em>“Data Deletion Request”</em>.
          </li>
          <li>Provide the email address linked to your LockedIn account.</li>
          <li>
            Our team will confirm and delete your account within 7–14 business
            days.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Important Notes</h2>
        <p>
          Once your account is deleted, all associated data (sessions, streaks,
          points, and rewards) will be permanently removed and cannot be
          recovered.
        </p>

        <p className="mt-6">
          For further assistance, contact us at:{" "}
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

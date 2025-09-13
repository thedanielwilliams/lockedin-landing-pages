"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function DataDeletion() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#222]">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Data Deletion</h1>
        <p className="text-base leading-relaxed">
          At <strong>LockedIn</strong>, you can delete your account and all
          associated data (sessions, streaks, points, and purchase history)
          directly from the app or by sending a request to our support team.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Delete Directly in the App
        </h2>
        <p>To delete your account from within the app:</p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            Open the <strong>LockedIn</strong> app.
          </li>
          <li>
            Go to <strong>Settings</strong> →{" "}
            <strong>Account Management</strong>.
          </li>
          <li>
            Select <strong>Delete Account</strong> and confirm.
          </li>
        </ol>

        {/* Example screenshot placeholders */}
        <div className="grid gap-6 mt-6 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <Image
              src="/settings.png"
              alt="Settings screen"
              width={300}
              height={600}
              className="rounded-xl border shadow"
            />
            <p className="mt-2 text-sm text-gray-600">Settings Screen</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/account-management.png"
              alt="Account management screen"
              width={300}
              height={600}
              className="rounded-xl border shadow"
            />
            <p className="mt-2 text-sm text-gray-600">
              Account Management Screen
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Request via Email</h2>
        <p>
          If you cannot access the app, you can also request deletion by
          emailing us at{" "}
          <a
            href="mailto:support@lockdedinpartner.com"
            className="text-[#72D560] underline"
          >
            support@lockdedinpartner.com
          </a>{" "}
          with the subject line <em>“Data Deletion Request”</em>. Please include
          the email linked to your LockedIn account. We will process your
          request within 7-14 business days.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Important Notes</h2>
        <p>
          Once deleted, your account and all associated data (sessions, streaks,
          points, and rewards) will be permanently removed and cannot be
          recovered.
        </p>
      </main>
      <Footer />
    </div>
  );
}

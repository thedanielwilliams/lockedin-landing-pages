"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutCallback() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (!status) return;

    // Build deep link
    const appUrl = `lockedinapp://orders?status=${status}&reference=${
      reference || ""
    }`;

    // Try opening via <a> instead of forcing window.location
    const link = document.createElement("a");
    link.href = appUrl;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();

    // Fallback after 2s → Play Store
    const timer = setTimeout(() => {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin"
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [status, reference]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-xl bg-white shadow p-6 text-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Completing your payment…
        </h1>
        <p className="text-gray-500 mt-2">
          Redirecting you to the app. If nothing happens,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.lockedinpartner.lockedin"
            className="text-green-600 underline font-medium"
          >
            download the app here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

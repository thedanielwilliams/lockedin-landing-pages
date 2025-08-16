"use client";
import { Check, X } from "lucide-react";
import { useWaitlistModal } from "./waitlist-provider";

export const SuccessModal = () => {
	const { isSuccessOpen, closeModal } = useWaitlistModal();
	return (
    <>
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
          <div className="bg-white w-[90%] mx-auto rounded-2xl p-8 md:py-12 max-w-md shadow-lg relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div>
              <Check size={60} className="text-green-400 mx-auto" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-4">Success!</h2>
            <p className="text-center text-gray-600 mb-6">
              You have successfully joined the waitlist. We will notify you when
              we launch!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

"use client";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useWaitlistModal } from "./waitlist-provider";
import Confetti from "react-confetti";

export const SuccessModal = () => {
	const { isSuccessOpen, closeModal } = useWaitlistModal();
	  const [showConfetti, setShowConfetti] = useState(false);
	  const [dimensions, setDimensions] = useState({
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

	  useEffect(() => {
      if (isSuccessOpen) {
        setShowConfetti(true);
        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 5000); 
        return () => clearTimeout(timer);
      }
    }, [isSuccessOpen]);

	 useEffect(() => {
     const handleResize = () => {
       setDimensions({
         width: window.innerWidth,
         height: window.innerHeight,
       });
     };

     window.addEventListener("resize", handleResize);
     return () => window.removeEventListener("resize", handleResize);
   }, []);

	return (
    <>
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
          {showConfetti && (
            <Confetti
              width={dimensions.width}
              height={dimensions.height}
              recycle={false}
              numberOfPieces={500}
              gravity={0.2}
              className="!fixed"
            />
          )}
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

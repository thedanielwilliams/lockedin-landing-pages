"use client";
import { useState } from "react";
import { useWaitlistModal } from "./waitlist-provider";
import { Loader2, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

	// Floating label input component
	const FloatingLabelInput = ({
    label,
    type,
    value,
    onChange,
    required,
    id,
  }: {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    id: string;
  }) => (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#72D560] text-sm placeholder-transparent placeholder:text-sm`}
        placeholder=""
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`
        absolute left-3 px-1 bg-white pointer-events-none transition-all duration-200
        ${
          value
            ? "-top-3 text-xs text-[#72D560]"
            : "top-2 text-sm text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#72D560]"
        }
      `}
      >
        {label}
      </label>
    </div>
  );

export const Waitlist = () => {
    const [loading, setLoading] = useState(false);
	const [waitlistName, setWaitlistName] = useState("");
	const [waitlistEmail, setWaitlistEmail] = useState("");
	const { closeModal, openModal, isWaitlistOpen } = useWaitlistModal();

	const handleWaitlistSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
        setLoading(true);
        // Basic validation
        if (!waitlistName.trim() || !waitlistEmail.trim()) {
            toast.error("Please enter your name and email.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(waitlistEmail)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        try {
            await axios.post("https://locked-in-3wy9.onrender.com/waitlist", {
                name: waitlistName,
                email: waitlistEmail,
            });
        } catch (err: any) {
            const message =
              err.response?.data?.message ||
              err.response?.data?.detail ||
              err.response?.data?.error ||
              err.message ||
              "An error occurred. Please try again.";
            toast.error(message);
            return;
        }
        finally {
            setLoading(false);
        }
        
        toast.success("You have successfully joined the waitlist!");
		closeModal();
		openModal("success");
		setWaitlistName("");
		setWaitlistEmail("");
	};

	return (
		<>
        <Toaster containerClassName="text-sm"/>
			{isWaitlistOpen && (
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
						<h2 className="text-xl font-semibold mb-4 text-center">
							Join Waitlist
						</h2>
						<p className="text-center text-[#69666E] mb-6">
							Be the first to know when we launch! Enter your details below to
							join our waitlist.
						</p>
						<form
							onSubmit={handleWaitlistSubmit}
							className="flex flex-col gap-4"
						>
							<FloatingLabelInput
								id="waitlist-name"
								label="Your Name"
								type="text"
								value={waitlistName}
								onChange={(e) => setWaitlistName(e.target.value)}
								required
							/>
							<FloatingLabelInput
								id="waitlist-email"
								label="Your Email"
								type="email"
								value={waitlistEmail}
								onChange={(e) => setWaitlistEmail(e.target.value)}
								required
							/>
							<button
								type="submit"
								className="bg-[#72D560] flex items-center justify-center text-center text-sm font-medium gap-2 py-2 rounded-lg hover:opacity-90 transition-all"
							>
								{loading ? "Submitting..." : "Join Waitlist"}
                                {loading && <Loader2 size={18} className="animate-spin"/>}
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

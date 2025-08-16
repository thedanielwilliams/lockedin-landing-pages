"use client";
import { useState } from "react";
import { useWaitlistModal } from "./waitlist-provider";
import { X } from "lucide-react";

export const Waitlist = () => {
	const [waitlistName, setWaitlistName] = useState("");
	const [waitlistEmail, setWaitlistEmail] = useState("");
	const { closeModal, openModal, isWaitlistOpen } = useWaitlistModal();

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
				placeholder={label}
				autoComplete="off"
			/>
			<label
				htmlFor={id}
				className={`
                absolute left-3 top-2 text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-sm
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#72D560]
                bg-white px-1 pointer-events-none
                ${value ? "-top-3 text-xs text-[#72D560]" : ""}
            `}
			>
				{label}
			</label>
		</div>
	);

	const handleWaitlistSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle waitlist submission here (e.g., API call)
		closeModal();
		openModal("success");
		setWaitlistName("");
		setWaitlistEmail("");
	};

	return (
		<>
			{isWaitlistOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-40">
					<div className="bg-white rounded-2xl p-8 md:py-12 w-full max-w-md shadow-lg relative">
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
								className="bg-[#72D560] py-2 rounded-lg hover:opacity-90 transition-all"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

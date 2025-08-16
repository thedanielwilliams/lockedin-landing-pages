"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Waitlist } from "./waitlist";
import { SuccessModal } from "./success";

type ModalType = "waitlist" | "success" | null;

interface WaitlistModalContextProps {
	openModal: (type: ModalType) => void;
	closeModal: () => void;
	isWaitlistOpen: boolean;
	isSuccessOpen: boolean;
	modalType: ModalType;
}

const WaitlistModalContext = createContext<
	WaitlistModalContextProps | undefined
>(undefined);

export const WaitlistModalProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [modalType, setModalType] = useState<ModalType>(null);
	const isWaitlistOpen = modalType === "waitlist";
	const isSuccessOpen = modalType === "success";
	const openModal = (type: ModalType) => setModalType(type);
	const closeModal = () => setModalType(null);

	return (
		<WaitlistModalContext.Provider
			value={{
				openModal,
				closeModal,
				modalType,
				isWaitlistOpen,
				isSuccessOpen,
			}}
		>
			{children}
			<Waitlist />
			<SuccessModal />
		</WaitlistModalContext.Provider>
	);
};

export const useWaitlistModal = () => {
	const context = useContext(WaitlistModalContext);
	if (!context) {
		throw new Error(
			"useWaitlistModal must be used within a WaitlistModalProvider",
		);
	}
	return context;
};

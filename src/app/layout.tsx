import type { Metadata } from "next";
import "./globals.css";
import { WaitlistModalProvider } from "@/components/home/waitlist-provider";
import { Waitlist } from "@/components/home/waitlist";

export const metadata: Metadata = {
	title: "Lockedin",
	description: "Regain your focus, 10x your productivity",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-general text-[#222221]`}>
				<WaitlistModalProvider>{children}</WaitlistModalProvider>
			</body>
		</html>
	);
}

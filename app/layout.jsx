import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Javaria | Portofolio",

    description:
		"My name is Javaria, I'm a web developer and I'm passionate about it. I'm currently expending my experties in full stack development.",

    author: "Javaria Masooma",
    siteUrl: "https://my-portfolio-only.vercel.app/projects", // Update this to your actual site URL -vercel
    applicationName: "Javaria",

    keywords: [
		"Javaria",
		"Masooma",
		"javaria masooma",
		"javaria masooma portofolio",
		"web developer",
	],

    openGraph: {
		type: "website",
		url: "https://my-portfolio-only.vercel.app/projects", // Update this to your actual site URL -vercel
		title: "Javaria | Portofolio",
		site_name: "Javaria | Portofolio",
		description: "My name is Javaria, This is my portofolio website.",
		width: 1200,
		height: 630,
		// images: [
		// 	{
		// 		url: "/og-image-rev.png", // Update this to your actual OG image URL
		// 		alt: "Javaria Portofolio",
		// 	},
		// ],
		site_name: "Javaria | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}

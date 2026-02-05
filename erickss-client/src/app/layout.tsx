import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "@/styles/globals.css";
import styles from '@/styles/main.module.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const BASEURL = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL ?? 
process.env.METADATA_BASE ?? `http://localhost:${process.env.PORT || 3000}`

export const metadata: Metadata = {
	title: {
		default: "Studio Erickss",
		template: "%s | Studio Erickss"
	},
	description: "We are your home and garden partner. Let's create something beautiful together.",
	metadataBase: new URL(BASEURL.startsWith('http') ? BASEURL : `https://${BASEURL}`),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} bg-base-100`}>
				<div id={styles.app}>
					<Header/>
					<main>{children}</main>
					<Footer/>
					{/*<div id={styles['under-maintenance']}>under maintenance</div>*/}
					<Link id={styles.whatsapp} aria-label="Chat on WhatsApp" href="https://wa.me/254746767352" target="_blank">
						<Image id={styles['whatsapp-icon']} alt="Chat on WhatsApp" src="/images/WhatsApp.svg" width={32} height={32}/>
					</Link>
				</div>
			</body>
			{process.env.ENABLE_GOOGLE_ANALYTICS && <GoogleAnalytics gaId="G-Z46KS932QW"/>}
			{process.env.ENABLE_VERCEL_ANALYTICS && <Analytics/>}
			{process.env.ENABLE_VERCEL_SPEED_INSIGHTS && <SpeedInsights/>}
		</html>
	);
}

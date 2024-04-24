import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';
import "@/styles/globals.css";
import styles from '@/styles/main.module.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";


// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
	title: "Studio Erickss",
	description: "Your home and garden partner.",
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
					<div id={styles['under-maintenance']}>under maintenance</div>
					<Link id={styles.whatsapp} aria-label="Chat on WhatsApp" href="https://wa.me/254746767352" target="_blank">
						<Image id={styles['whatsapp-icon']} alt="Chat on WhatsApp" src="/images/WhatsApp.svg" width={32} height={32}/>
					</Link>
				</div>
			</body>
		</html>
	);
}

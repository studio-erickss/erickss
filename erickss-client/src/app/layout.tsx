import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';
import "@/styles/globals.css";
import styles from '@/styles/main.module.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";


// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
	title: "Erick's Studio",
	description: "Your home and garden partner.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.variable}>
				<div id={styles.app}>
					<Header/>
					<main>{children}</main>
					<Footer/>
				</div>
			</body>
		</html>
	);
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './_components/navbar';
import { Footer } from './_components/footer';
import { ClerkProvider } from '@clerk/nextjs';
import { plPL } from '@clerk/localizations';
import ReactQueryProvider from './_components/react-query-provider';
import Toast from './_components/toaster';

import { auth } from '@clerk/nextjs/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Gym Pro',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { userId }: { userId: string | null } = auth();
	return (
		<html lang='pl'>
			<body className={`${inter.className} bg-steel-gradient`}>
				<ReactQueryProvider>
					<ClerkProvider localization={plPL}>
						<Toast />
						<Navbar userId={userId} />
						<div className='flex justify-center'>{children}</div>
						<Footer />
					</ClerkProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}

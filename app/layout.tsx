import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} relative min-h-screen dark:bg-gray-800`}
                suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}

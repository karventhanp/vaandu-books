import type { Metadata } from "next";
import { Geist, Shantell_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaandu Books",
  description: "Tamil Children's Books Store",
};

const shantell = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-shantell",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shantell.variable} font-sans scrollbar-none scroll-smooth`}>
      <body className="flex flex-col min-h-screen text-dark-slatgray">
        <main className="flex-grow">{children}</main>

        <footer className="bg-gold border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Vaandu Books. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/#about" className="hover:underline">About</Link>
              <Link href="/#contact" className="hover:underline">Contact</Link>
              <Link href="/#privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
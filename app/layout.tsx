import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Vaandu Books",
  description: "Premium Art Books and Children's Books Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} scrollbar-none`}>
      <body className="flex flex-col min-h-screen text-dark-slatgray">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900">
              <Image src="/assets/vaandu-books.jpeg" alt="Logo" width={50} height={50} />
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/cart" className="relative hover:text-blue-600 transition">
                Cart (0)
              </Link>
              <Link href="/login" className="bg-neutral-950 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition">
                Login
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Vaandu Books. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
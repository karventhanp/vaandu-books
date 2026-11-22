"use client";

import { useState } from "react";
import BookCard from "./BookCard";

const WHATSAPP_NUMBER = "917604883551";

type Book = { title: string; image: string; price: number };

export default function BookList({ books }: { books: Book[] }) {
  const [cart, setCart] = useState<Record<string, number>>({});

  const setQty = (title: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[title];
      else next[title] = qty;
      return next;
    });
  };

  const items = books.filter((b) => cart[b.title]);
  const totalQty = items.reduce((sum, b) => sum + cart[b.title], 0);
  const totalPrice = items.reduce((sum, b) => sum + b.price * cart[b.title], 0);

  const message = [
    "Hi Vaandu Books! 👋",
    "I'd like to order:",
    ...items.map(
      (b, i) => `${i + 1}. ${b.title} × ${cart[b.title]} = ₹${b.price * cart[b.title]}`
    ),
    `Total: ₹${totalPrice}`,
  ].join("\n");
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {books.map((book) => (
          <BookCard
            key={book.title}
            {...book}
            quantity={cart[book.title] ?? 0}
            onChange={(qty) => setQty(book.title, qty)}
          />
        ))}
      </div>

      {/* Bottom order bar */}
      {totalQty > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl flex items-center justify-between gap-3 bg-white border-2 border-black rounded-full shadow-[4px_4px_0_0_#000] pl-5 pr-2 py-2">
          <p className="text-sm md:text-base font-semibold">
            {totalQty} {totalQty === 1 ? "book" : "books"} · ₹{totalPrice}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setCart({})} className="text-sm underline">
              Clear
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-yellow text-black font-semibold px-4 py-2 rounded-full border-2 border-black hover:brightness-110 transition text-sm md:text-base"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
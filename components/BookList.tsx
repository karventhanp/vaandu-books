"use client";

import BookCard from "./BookCard";
import { useCart } from "./CartContext";

type Book = {
  title: string;
  image: string;
  price: number;
  pages: number;
  language: string;
  age: string;
  comingSoon?: boolean;
};

export default function BookList({ books }: { books: Book[] }) {
  const { cart, setQty } = useCart();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 md:gap-6">
      {books.map((book) => {
        const id = `book:${book.title}`;
        return (
          <BookCard
            key={id}
            {...book}
            quantity={cart[id]?.qty ?? 0}
            onChange={(qty) => setQty(id, book.title, book.price, qty)}
          />
        );
      })}
    </div>
  );
}
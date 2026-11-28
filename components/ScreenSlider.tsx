"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// One entry per book: label + colour written once, then its images
const books = [
  {
    label: "Kuttich Selvi - 1",
    color: "bg-[#08d4bf]",
    images: [
      "kuttichselvi-1.jpg",
      "kuttichselvi-2.jpg",
      "kuttichselvi-3.jpg",
      "kuttichselvi-4.jpg",
      "kuttichselvi-5.jpg",
    ],
  },
  {
    label: "Kuttich Selvi - 2",
    color: "bg-skyblue",
    images: [
      "kuttichselvi-kanavu-1.jpg",
      "kuttichselvi-kanavu-2.jpg",
      "kuttichselvi-kanavu-3.jpg",
      "kuttichselvi-kanavu-4.jpg",
      "kuttichselvi-kanavu-5.jpg",
      "kuttichselvi-kanavu-6.jpg",
    ],
  },
  {
    label: "Kuttich Selvi - 3",
    color: "bg-[#ea74fc]",
    images: [
      "muthumama-1.jpg",
      "muthumama-2.jpg",
      "muthumama-3.jpg",
      "muthumama-4.jpg",
      "muthumama-5.jpg",
    ],
  },
];

// Turns the books into one flat list of slides (done automatically)
const slides = books.flatMap((book, bookIndex) =>
  book.images.map((image, i) => ({
    src: `/assets/${image}`,
    alt: `${book.label} page ${i + 1}`,
    bookIndex,
  }))
);

export default function ScreenSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentBook = slides[current].bookIndex;

  return (
    <div className="absolute inset-0">
      {/* One label per book — only changes when the book changes */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-[90%] flex justify-center">
        {books.map((book, i) => (
          <span
            key={book.label}
            className={`absolute whitespace-nowrap rounded-full ${book.color} text-dark-slatgray font-semibold px-3 py-0.5 text-[10px] sm:text-sm md:text-base transition-opacity duration-500 ${i === currentBook ? "opacity-100" : "opacity-0"
              }`}
          >
            {book.label}
          </span>
        ))}
      </div>

      {/* Clipped area: slides only show inside here */}
      <div className="absolute inset-[8%] sm:inset-[6%] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${(i - current) * 100}%)` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 60vw, 500px"
              quality={90}
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-gray-800" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
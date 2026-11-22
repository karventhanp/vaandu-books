"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/assets/frontcover.jpg", alt: "Front cover" },
  { src: "/assets/drawing-gift.jpg", alt: "Drawing gift" },
];

export default function ScreenSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
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
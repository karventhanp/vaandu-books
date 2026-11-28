import Image from "next/image";

// Products in the moving strip. Put the images in public/assets/.
const items = [
  { src: "/assets/rose-calendar.png", name: "2027 Rose Calendar" },
  { src: "/assets/rose-badge-1.jpg", name: "Rose Badge" },
  { src: "/assets/yellow-calendar.png", name: "2027 Yellow Calendar" },
  { src: "/assets/yellow-badge.jpg", name: "Yellow Badge" },
  { src: "/assets/green-calendar.png", name: "2027 Green Calendar" },
  { src: "/assets/green-badge.jpg", name: "Green Badge" },
  { src: "/assets/blue-calendar.png", name: "2027 Blue Calendar" },
  { src: "/assets/blue-badge.jpg", name: "Blue Badge" },
];

// Marquee: the list is shown twice so the loop has no gap.
export default function ShowcaseSlider() {
  const loop = [...items, ...items];

  return (
    <div className="relative w-full rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#000] overflow-hidden py-5 sm:py-6">
      {/* Soft fade on the left and right edges */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((item, i) => (
            <div
              key={i}
              aria-hidden={i >= items.length}
              className="shrink-0 w-36 sm:w-44 md:w-52 mx-2 sm:mx-3 flex flex-col items-center"
            >
              <div className="relative w-full aspect-square rounded-xl border-2 border-black bg-white overflow-hidden hover:-translate-y-1 transition-transform">
                <Image
                  src={item.src}
                  alt={i < items.length ? item.name : ""}
                  fill
                  sizes="(max-width: 640px) 144px, 208px"
                  className="object-contain p-2"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-dark-slatgray text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
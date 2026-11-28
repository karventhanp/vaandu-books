import Image from "next/image";

type BookCardProps = {
  title: string;
  image: string;
  price: number;
  pages: number;
  language: string;
  age: string;
  comingSoon?: boolean;
  quantity: number;
  onChange: (qty: number) => void;
};

export default function BookCard({
  title,
  image,
  price,
  pages,
  language,
  age,
  comingSoon = false,
  quantity,
  onChange,
}: BookCardProps) {
  const selected = quantity > 0;

  // Border + shadow: grey for coming soon, green when selected, black by default
  const cardStyle = comingSoon
    ? "border-gray-400 border-dashed shadow-[4px_4px_0_0_#9ca3af]"
    : selected
      ? "border-green-600 shadow-[4px_4px_0_0_#16a34a] hover:-translate-y-1"
      : "border-black shadow-[4px_4px_0_0_#000] hover:-translate-y-1";

  return (
    <div
      className={`h-full flex flex-col items-center bg-white rounded-2xl text-dark-slatgray border-2 p-4 transition-transform ${cardStyle}`}
    >
      {/* Cover */}
      <div className="w-full aspect-[3/3] relative mb-3">
        <Image
          src={`/assets/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
          className={`object-contain ${comingSoon ? "opacity-40 grayscale" : ""}`}
        />

        {comingSoon && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap rounded-full border-2 border-black bg-gold px-3 py-1 text-xs md:text-sm font-bold shadow-[2px_2px_0_0_#000]">
            ✨ Coming Soon
          </span>
        )}
      </div>

      {/* Title: always takes 2 lines of space */}
      <h3 className="text-base md:text-lg font-semibold text-center leading-snug line-clamp-2 min-h-[2.75em]">
        {title}
      </h3>

      {/* Info tags */}
      <div className="flex flex-wrap justify-center gap-1.5 my-2">
        {!comingSoon && pages > 0 && (
          <span className="rounded-full bg-skyblue/30 px-2 py-0.5 text-[11px] md:text-xs font-medium">
            📖 {pages} pages
          </span>
        )}
        <span className="rounded-full bg-green-yellow/40 px-2 py-0.5 text-[11px] md:text-xs font-medium">
          🗣️ {language}
        </span>
        <span className="rounded-full bg-tomato/20 px-2 py-0.5 text-[11px] md:text-xs font-medium">
          👶 Age {age}
        </span>
      </div>

      {/* Price + button: always at the bottom */}
      <div className="mt-auto w-full flex flex-col items-center">
        {comingSoon ? (
          <>
            <p className="text-sm md:text-base font-semibold text-gray-500 mb-2">
              Stay tuned! 📚
            </p>
            <a
              href={`https://wa.me/917604883551?text=${encodeURIComponent(
                `Hi Vaandu Books! 👋\nPlease let me know when "${title}" is available.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-full border-2 border-dashed border-gray-400 bg-gold/30 text-dark-slatgray text-sm font-semibold hover:bg-gold/60 transition-colors"
            >
              🔔 Notify me
            </a>
          </>
        ) : (
          <>
            <p className="text-base md:text-lg font-bold mb-3">₹{price}</p>

            {selected ? (
              <div className="w-full flex items-center justify-between rounded-full border-2 border-black bg-green-yellow">
                <button
                  onClick={() => onChange(quantity - 1)}
                  className="px-4 py-2 text-lg font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  onClick={() => onChange(quantity + 1)}
                  className="px-4 py-2 text-lg font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => onChange(1)}
                className="w-full py-2 rounded-full border-2 border-black bg-tomato text-white font-semibold hover:brightness-110 transition"
              >
                Select
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
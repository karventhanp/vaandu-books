import Image from "next/image";

type BookCardProps = {
  title: string;
  image: string;
  price: number;
  quantity: number;
  onChange: (qty: number) => void;
};

export default function BookCard({ title, image, price, quantity, onChange }: BookCardProps) {
  const selected = quantity > 0;

  return (
    <div
      className={`flex flex-col items-center bg-white rounded-2xl text-dark-slatgray border-2 p-4 hover:-translate-y-1 transition-transform ${selected
          ? "border-green-600 shadow-[4px_4px_0_0_#16a34a]"
          : "border-black shadow-[4px_4px_0_0_#000]"
        }`}
    >
      <div className="w-full aspect-[3/3] relative mb-3">
        <Image
          src={`/assets/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
          className="object-contain"
        />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-center">{title}</h3>
      <p className="text-sm md:text-base font-medium text-dark-slatgray mb-3">₹{price}</p>

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
    </div>
  );
}
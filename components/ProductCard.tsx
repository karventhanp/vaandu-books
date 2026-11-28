import Image from "next/image";

type ProductCardProps = {
    name: string;
    image: string;
    price: number;
    quantity: number;
    onChange: (qty: number) => void;
};

export default function ProductCard({ name, image, price, quantity, onChange }: ProductCardProps) {
    const selected = quantity > 0;

    return (
        <div
            className={`h-full flex flex-col items-center bg-white rounded-2xl text-dark-slatgray p-4 hover:-translate-y-1 transition-transform ${selected
                ? "border-green-600 shadow-[4px_4px_0_0_#16a34a]"
                : ""
                }`}
        >
            {/* Photo */}
            <div className="w-full aspect-square relative mb-3">
                <Image
                    src={`/assets/${image}`}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 65vw, (max-width: 1024px) 35vw, 260px"
                    className="object-contain"
                />
            </div>

            {/* Name */}
            <h3 className="text-base md:text-lg font-semibold text-center leading-snug line-clamp-2">
                {name}
            </h3>

            {/* Price: right under the name */}
            <p className="text-base md:text-lg font-bold mt-1">₹{price}</p>

            {/* Button: always at the bottom, so all buttons line up */}
            <div className="mt-auto pt-3 w-full flex flex-col items-center">
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
        </div>
    );
}
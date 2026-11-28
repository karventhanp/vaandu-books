"use client";

import ProductCard from "./ProductCard";
import { useCart } from "./CartContext";

type Product = { name: string; image: string; price: number };

// Grouped products box: "Gift Offers" label + products in a grid.
// New products automatically go to a new row.
export default function ProductCarousel({ products }: { products: Product[] }) {
  const { cart, setQty } = useCart();

  return (
    <div className="flex flex-col md:flex-row rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#000] overflow-hidden">
      {/* Gift Offers label */}
      <div className="shrink-0 bg-skyblue text-dark-slatgray flex items-center justify-center px-6 py-3 md:py-0 md:w-36 border-b-2 md:border-b-0 md:border-r-2 border-black">
        <h3 className="text-lg md:text-2xl font-bold text-center leading-snug">
          Gift
          <br className="hidden md:block" /> Offers
        </h3>
      </div>

      {/* Products grid */}
      <div className="flex-1 min-w-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-2 p-3">
        {products.map((product) => {
          const id = `product:${product.name}`;
          return (
            <ProductCard
              key={id}
              {...product}
              quantity={cart[id]?.qty ?? 0}
              onChange={(qty) => setQty(id, product.name, product.price, qty)}
            />
          );
        })}
      </div>
    </div>
  );
}
"use client";

import { useCart } from "./CartContext";

const WHATSAPP_NUMBER = "917604883551";

export default function OrderBar() {
  const { cart, clear } = useCart();

  const items = Object.values(cart);
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (totalQty === 0) return null;

  const message = [
    "Hi Vaandu Books! 👋",
    "I'd like to order:",
    ...items.map(
      (item, i) => `${i + 1}. ${item.name} × ${item.qty} = ₹${item.price * item.qty}`
    ),
    `Total: ₹${totalPrice}`,
  ].join("\n");
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl flex items-center justify-between gap-3 bg-white text-dark-slatgray border-2 border-black rounded-full shadow-[4px_4px_0_0_#000] pl-5 pr-2 py-2">
      <p className="text-sm md:text-base font-semibold">
        {totalQty} {totalQty === 1 ? "item" : "items"} · ₹{totalPrice}
      </p>
      <div className="flex items-center gap-3">
        <button onClick={clear} className="text-sm underline">
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
  );
}
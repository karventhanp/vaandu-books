import HomeCarousel from "@/components/HomeCarousel";
import Image from "next/image";

const SAMPLE_BOOKS = [
  {
    id: "1",
    title: "The Little Explorer",
    category: "Children's Book",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Abstract Forms in Nature",
    category: "Art Book",
    price: "₹1,250",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Tales of the Forest Blue",
    category: "Children's Book",
    price: "₹450",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Canvas & Color: A Retrospective",
    category: "Art Book",
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=600&auto=format&fit=crop"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div>
        <Image src="/assets/tree-with-childrens.jpg" alt="Tree" width={600} height={200} className="m-auto" />
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-4 px-2">
        <Image
          src="/assets/bus-left.jpg"
          alt="Bus Left"
          width={120}
          height={200}
          className="w-14 sm:w-20 md:w-24 lg:w-28 h-auto"
        />

        <div className="w-[180px] sm:w-[260px]">
          <HomeCarousel />
        </div>

        <Image
          src="/assets/bus-right.jpg"
          alt="Bus Right"
          width={120}
          height={200}
          className="w-14 sm:w-20 md:w-24 lg:w-28 h-auto"
        />
      </div>
    </div>
  );
}
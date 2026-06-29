import Link from "next/link";

// Temporary sample catalog data for development preview
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
    <div className="pb-16">
      {/* Visual Hero Section */}
      <section className="bg-gradient-to-b from-neutral-100 to-neutral-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
            Welcome to Vaandu Books
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
            Beautiful stories, painted with wonder.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto">
            Discover our curated collection of premium art volumes and interactive children's stories made to last generations.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/shop" className="bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-sm">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books Image Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex justify-between items-end border-b border-neutral-200 pb-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Featured Releases</h2>
            <p className="text-sm text-neutral-500">Handpicked masterpieces for your bookshelf</p>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-blue-600 hover:underline">
            View all &rarr;
          </Link>
        </div>

        {/* Responsive Flex/Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SAMPLE_BOOKS.map((book) => (
            <div key={book.id} className="group relative flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-md transition">
              {/* Product Aspect Image Window */}
              <div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Meta details text card block */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
                  {book.category}
                </span>
                <h3 className="mt-1 font-bold text-neutral-900 group-hover:text-blue-600 transition text-base line-clamp-1">
                  {book.title}
                </h3>
                <div className="mt-4 flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="font-semibold text-neutral-800">{book.price}</span>
                  <Link 
                    href={`/product/${book.id}`}
                    className="text-xs font-semibold text-neutral-900 bg-neutral-100 px-3 py-2 rounded-lg hover:bg-neutral-950 hover:text-white transition"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
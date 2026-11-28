import BookList from "@/components/BookList";
import ScreenSlider from "@/components/ScreenSlider";
import Image from "next/image";
import theaterScreen from "../public/assets/theater-screen.jpg";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const books = [
    { title: "Kuttich Selvi", image: "kuttichselvi.jpg", price: 200, pages: 40, language: "Tamil & English", age: "6+" },
    { title: "Kuttich Selviyin Kanavu", image: "kuttichselvi-kanavu.jpg", price: 200, pages: 40, language: "Tamil & English", age: "6+" },
    { title: "Muthu mama katruthantha ragasiyam", image: "muthumama.jpg", price: 250, pages: 52, language: "Tamil & English", age: "6+" },
    { title: "Coming Soon...", image: "red-book.jpg", price: 0, pages: 0, language: "Tamil & English", age: "6+", comingSoon: true },
  ];

  const gifts = [
    { image: "monkey.jpg", alt: "Badge" },
    { image: "red-book.jpg", alt: "Notebook" },
    { image: "shirt.jpg", alt: "T-shirt" },
    { image: "girl.jpg", alt: "Figurine" },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Tree banner */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[1424/567]">
        <Image
          src="/assets/tree.jpg"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
          alt="tree"
          priority
        />

        {/* Left text */}
        <p className="absolute top-[3%] sm:top-[8%] left-[10%] text-yellow-50 whitespace-nowrap sm:whitespace-normal sm:w-[28%] text-center font-bold text-xs sm:text-xl md:text-3xl lg:text-4xl leading-tight">
          Little stories
        </p>

        {/* Right text */}
        <p className="absolute top-[3%] sm:top-[8%] right-[8%] text-yellow-50 md:right-[10%] whitespace-nowrap sm:whitespace-normal sm:w-[28%] text-center font-bold text-xs sm:text-xl md:text-3xl lg:text-4xl leading-tight">
          Big imaginations!
        </p>
      </div>


      {/* Theater screen + slider */}
      <div className="relative w-full mx-auto sm:max-w-225 mt-10">
        <label className="absolute sm:left-118.75 left-45 -translate-x-1/2 -top-4 sm:-translate-x-1/2 text-2xl sm:text-6xl font-semibold text-[#7dd1d0]">VAANDUBOOKS</label>
        <Image
          src={theaterScreen}
          sizes="(max-width: 640px) 100vw, 900px"
          quality={90}
          className="w-full h-auto"
          alt="screen"
          priority
        />
        <div className="absolute top-[11%] left-[19%] w-[61%] h-[68%]">
          <ScreenSlider />
        </div>

      </div>

      {/* Books */}
      <section className="w-full max-w-6xl mx-auto px-4 my-10">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-slatgray text-center mb-6">Our Books</h2>
        <BookList books={books} />
      </section>

      {/* Gift Offers */}
      <section className="w-full max-w-6xl mx-auto px-4 my-10">
        <div className="flex flex-col md:flex-row rounded-2xl border-2 border-black overflow-hidden bg-white">
          {/* Label */}
          <div className="bg-skyblue text-dark-slatgray flex items-center justify-center px-6 py-3 md:py-0 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <h2 className="text-lg md:text-xl font-semibold text-center leading-snug">
              Gift
              <br className="hidden md:block" /> Offers
            </h2>
          </div>

          {/* Gift circles */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 p-4">
            {gifts.map((gift) => (
              <div
                key={gift.image}
                className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-gray-300 overflow-hidden bg-white hover:scale-105 transition-transform"
              >
                <Image
                  src={`/assets/${gift.image}`}
                  alt={gift.alt}
                  width={200}
                  height={200}
                  sizes="160px"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center gap-6 m-auto px-4 max-w-4xl my-8 scroll-mt-20"
      >
        <Image
          src="/assets/boyplaying.jpg"
          width={400}
          height={567}
          sizes="(max-width: 768px) 80vw, 420px"
          className="w-72 md:w-[420px] h-auto shrink-0"
          alt="Boy playing"
        />
        <p className="max-w-md text-lg md:text-xl text-dark-slatgray font-semibold leading-relaxed text-center md:text-left">
          Welcome to Vaandu Books, a little world of Tamil stories for children! 📚
          Our books spark curiosity, imagination and a love for reading.
          Fun stories and colourful pictures make learning a joy.
          Each book is a perfect little gift for young dreamers.
          Read, laugh and grow with every page! ✨
        </p>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Privacy */}
      <section id="privacy" className="w-full max-w-6xl mx-auto px-4 my-10 scroll-mt-20 text-dark-slatgray">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Privacy Policy</h2>
        <ul className="max-w-3xl mx-auto space-y-2 text-sm md:text-base list-disc pl-5">
          <li>This website does not collect any personal details. No sign-up, no forms, no payments here.</li>
          <li>Orders happen on WhatsApp. The details you share there (name, phone, address) are used only to deliver your order.</li>
          <li>We never sell or share your details with anyone except our delivery partner.</li>
          <li>Questions? Message us on WhatsApp anytime.</li>
        </ul>
      </section>
    </div>
  );
}
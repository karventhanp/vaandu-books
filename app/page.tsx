import Card from "@/components/Card";
import HomeCarousel from "@/components/HomeCarousel";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4 overflow-x-hidden">
      {/* Tree banner */}
      <div className="w-full px-2 sm:px-4 relative">
        <Image
          src="/assets/tree-with-childrens.jpg"
          alt="Tree"
          width={1424}
          height={567}
          className="w-full h-auto max-w-5xl mx-auto"
          priority
        />
        <Image src="/assets/vaandu-books-light.jpeg" width={100} height={100} alt="logo" className="absolute w-10 md:w-auto top-6 md:top-20 left-1/2 -translate-x-1/2" />
      </div>

      <p className="text-center font-medium text-sm md:text-lg">
        Little stories, big imaginations!
      </p>

      {/* Buses + Carousel row */}
      <div className="flex items-end w-full justify-center gap-1 sm:gap-3 md:gap-6 px-1 sm:px-4 mt-2 sm:mt-4">
        <div className="w-[20%] sm:w-[18%] md:w-[16%] lg:w-[14%] flex-shrink-0">
          <Image
            src="/assets/bus-left.jpg"
            alt="Bus Left"
            width={253}
            height={529}
            className="w-full h-auto"
          />
        </div>

        <div className="w-[52%] sm:w-[46%] md:w-[38%] lg:w-[30%] max-w-md lg:mb-8">
          <div className="flex justify-between">
            <Button name="Home" />
            <Button name="Stories" />
            <Button name="More" />
          </div>
          <HomeCarousel />
        </div>

        <div className="w-[20%] sm:w-[18%] md:w-[16%] lg:w-[14%] flex-shrink-0">
          <Image
            src="/assets/bus-right.jpg"
            alt="Bus Right"
            width={224}
            height={518}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="px-4 mx-auto flex flex-col gap-12 mt-10 justify-center w-full">
        <Card
          image="user-blue.jpg"
          title="Cute Little Gift"
          description="A delightful children's book created to spark curiosity, imagination, and a love for discovering the world. With engaging storytelling and charming illustrations, this book is perfect for young readers who love adventures and learning new things."
          imageWidth={100}
          imageHeight={100}
          carousel={true}
        />
        <Card
          image="boy-sand-house.jpg"
          title="Vaandu Books"
          description="Our books are made for children to enjoy, learn, and explore. With fun stories and colorful pictures, they help children build imagination and develop a love for reading."
          imageWidth={150}
          imageHeight={100}
          imageFirst={true}
        />
        <div className="flex flex-col gap-2 justify-center items-center w-fit mx-auto">
          <Button name="Subscriptions" className="bg-tomato" />
          <p className="text-center text-sm font-medium">A little surprise, every month! 📚✨
            Subscribe and bring home new stories, fun, and imagination for your little ones.</p>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <h5 className="text-md md:text-2xl font-semibold text-center bg-green-yellow w-fit m-auto px-2 py-1">Events</h5>
        <div className="relative">
          <Image src="/assets/screen.jpg" width={800} height={400} alt="screem" className="w-100 mx-auto" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-50 md:w-60">
            <HomeCarousel id="events" />
          </div>
        </div>
        <p className="text-center max-w-100 m-auto font-medium md:text-lg text-sm">Join our fun and creative drawing events for children! Kids can enjoy drawing, explore their creativity, and share their wonderful ideas with others.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 mt-4">
        <div className="gap-4 grid">
          <Product title="Book" image="girl.jpg" />
          <Product title="Book" image="monkey.jpg" />
          <Product title="Book" image="red-book.jpg" />
        </div>
        <div className="gap-4 grid">
          <Product title="Book" image="shirt.jpg" />
          <Product title="Book" image="user-blue.jpg" />
          <Product title="Book" image="girl.jpg" />
        </div>
        <div className="gap-4 grid">
          <Product title="Book" image="girl.jpg" />
          <Product title="Book" image="monkey.jpg" />
          <Product title="Book" image="red-book.jpg" />
        </div>
        <div className="gap-4 grid">
          <Product title="Book" image="shirt.jpg" />
          <Product title="Book" image="user-blue.jpg" />
          <Product title="Book" image="girl.jpg" />
        </div>
      </div>
      <div className="mx-auto flex rounded-2xl flex-col md:flex-row border-black border-2 my-8">
        <div className="bg-skyblue rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl flex justify-center items-center">
          <h5 className="p-2 font-semibold md:text-xl text-center m-auto md:w-20">Gift Offers</h5>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center justify-center gap-4 border-t-2 md:border-l-2 md:border-t-0 p-2">
          <Image src="/assets/monkey.jpg" width={200} height={100} alt="books" className="w-10 md:w-30" />
          <Image src="/assets/red-book.jpg" width={200} height={100} alt="books" className="w-10 md:w-30" />
          <Image src="/assets/shirt.jpg" width={200} height={100} alt="books" className="w-10 md:w-30" />
          <Image src="/assets/girl.jpg" width={200} height={100} alt="books" className="w-10 md:w-30" />
        </div>
      </div>
    </div>
  );
}
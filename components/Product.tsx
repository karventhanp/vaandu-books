import Image from "next/image";

interface ProductProps {
    image: string;
    title: string;
}

const Product = ({ image, title }: ProductProps) => {
    return (
        <div className="flex flex-col border-2 border-black rounded-lg">
            <div className="p-2">
                <Image src={`/assets/${image}`} width={100} height={100} alt="product" className="w-16 md:w-40" />
            </div>
            <div className="border-t-2 text-sm md:p-1 md:text-lg text-center font-medium">
                {title}
            </div>
        </div>
    )
}

export default Product;
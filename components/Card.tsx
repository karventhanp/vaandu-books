import Image from "next/image";
import HomeCarousel from "./HomeCarousel";

interface CardProps {
    image: string;
    title: string;
    description: string;
    imageWidth: number;
    imageHeight: number
    imageFirst?: boolean
    carousel?: boolean
}

const Card: React.FC<CardProps> = ({ image, title, description, imageHeight, imageWidth, imageFirst, carousel }) => {
    return (
        <div className={`flex gap-4 items-center ${imageFirst ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} justify-center`}>
            <div className="flex flex-col max-w-200">
                <h5 className="text-md md:text-xl font-semibold text-center bg-green-yellow w-fit px-2 m-auto">{title}</h5>
                <p className="text-sm md:text-lg text-center">{description}</p>
            </div>
            <div className="my-auto min-w-fit">
                {
                    carousel ?

                        <div className="w-30">
                            <HomeCarousel id="gifts" />
                        </div>
                        :
                        <Image
                            src={`/assets/${image}`}
                            alt="Bus Right"
                            width={imageWidth}
                            height={imageHeight}
                        />
                }
            </div>
        </div>
    )
}

export default Card;
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { Testimonial } from "../../payload-types";
import Container from "../shared/Container"

type Props = {
    block: Testimonial
}

const Testimonial:React.FC<Props> = ({ block }) => {

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-square">
                    <Image 
                        src={process.env.NEXT_PUBLIC_VERCEL_URL + (block.image.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                </div>
                <div className="col-span-1 lg:col-span-2 w-full">
                        <div className="relative py-8 flex flex-col overflow-hidden w-full h-full">
                            {/* Rating */}
                            <div className="flex flex-row mb-8 flex-none">
                                {Array(block.rating).fill(0).map((_, index) => (<StarIcon key={index} className="w-5 h-5 mr-1 text-amber-300"/>))}
                            </div>
                            {/* Quote */}
                            <div className="shrink text-gray-900 text-xl md:text-2xl lg:text-4xl font-medium leading-snug mb-16 text-ellipsis line-clamp-none lg:line-clamp-4 xl:line-clamp-5">{block.quote}</div>
                            {/* Name, title and slider buttons */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center flex-none w-full">
                                <div className="flex flex-col flex-none">
                                    <div className="text-gray-900 text-lg font-medium">{block.name}</div>
                                    <div className="text-gray-500 text-base font-medium">{block.caption}</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Testimonial
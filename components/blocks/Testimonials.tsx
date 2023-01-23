"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useState } from "react"
import { Testimonials } from "../../payload-types";
import Container from "../shared/Container"

type Props = {
    block: Testimonials
}

const Testimonials: React.FC<Props> = ({ block }) => {

    // const [ sliderIndex, setSliderIndex ] = useState(0)

    // const back = () => {
    //     if (sliderIndex === 0) {
    //         setSliderIndex(block.testimonials.length - 1)
    //     } else {
    //         setSliderIndex(sliderIndex - 1)
    //     }
    // }

    // const forward = () => {
    //     if (sliderIndex === block.testimonials.length - 1) {
    //         setSliderIndex(0)
    //     } else {
    //         setSliderIndex(sliderIndex + 1)
    //     }
    // }

    const [ testimonials, setTestimonials ] = useState<Testimonials["testimonials"]>(block.testimonials)

    const forward = () => {
        setTestimonials([...testimonials.slice(1), testimonials[0]])
    }

    const back = () => {
        setTestimonials([testimonials[testimonials.length - 1], ...testimonials.slice(0, testimonials.length - 1)])
    }

    const button = "h-14 w-14 border border-gray-200 flex justify-center items-center rounded-full hover:bg-gray-50"

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 w-full">
                        <div className="relative py-8 flex flex-col overflow-hidden w-full h-full">
                            {/* Rating */}
                            <div className="flex flex-row mb-8 flex-none">
                                <span className="sr-only">{testimonials[0].rating} star rating</span>{Array(testimonials[0].rating).fill(0).map((_, index) => (<StarIcon key={index} className="w-5 h-5 mr-1 text-amber-300"/>))}
                            </div>
                            {/* Quote */}
                            <div className="shrink text-gray-900 text-xl md:text-2xl lg:text-4xl font-medium leading-snug mb-16 text-ellipsis line-clamp-none lg:line-clamp-4 xl:line-clamp-5">{testimonials[0].quote}</div>
                            {/* Name, title and slider buttons */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center flex-none w-full">
                                <div className="flex flex-col flex-none">
                                    <div className="text-gray-900 text-lg font-medium">{testimonials[0].name}</div>
                                    <div className="text-gray-500 text-base font-medium">{testimonials[0].caption}</div>
                                </div>
                                {testimonials.length > 1 && <div className="flex flex-row flex-none space-x-4">
                                    <button onClick={() => back()} className={button}><span className="sr-only">Backwards</span><ArrowLeftIcon className="w-6 h-6 text-gray-500"/></button>
                                    <button onClick={() => forward()} className={button}><span className="sr-only">Forwards</span><ArrowRightIcon className="w-6 h-6 text-gray-500"/></button>
                                </div>}
                            </div>
                        </div>
                        {testimonials.length > 1 && testimonials.slice(1).map((testimonial, index) => <div key={index} className="hidden">
                            {/* Rating */}
                            <div>
                                <span className="sr-only">{testimonial.rating} star rating</span>
                            </div>
                            {/* Quote */}
                            <div>{testimonial.quote}</div>
                            {/* Name, title and slider buttons */}
                            <div>
                                <div>
                                    <div>{testimonial.name}</div>
                                    <div>{testimonial.caption}</div>
                                </div>
                            </div>
                        </div>)}
                </div>
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-[4/3]">
                    <Image 
                        src={process.env.NEXT_PUBLIC_CMS_URL + (block.image.sizes.medium_landscape.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 100vw-32px, 50vw-16px"
                    />
                </div>
            </div>
        </Container>
    )
}

export default Testimonials
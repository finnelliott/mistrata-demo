"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useEffect, useState } from "react"
import Container from "./Container"

const Testimonials = () => {

    const image = {
        url: "/images/testimonials.png",
        alt: "testimonials",
        width: 1920,
        height: 1920
    }

    const testimonials = [
        {
            name: "Jane Cooper",
            title: "CEO, ABC Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Jane Cooper",
            title: "CEO, DEF Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            name: "Jane Cooper",
            title: "CEO, GHI Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
    ]

    const [ index, setIndex ] = useState(0)

    const back = () => {
        if (index === 0) {
            setIndex(testimonials.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const forward = () => {
        if (index === testimonials.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const button = "h-14 w-14 border border-gray-200 flex justify-center items-center rounded-full hover:bg-gray-50"

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 w-full">
                        <div className="relative py-8 flex flex-col overflow-hidden w-full h-full">
                            {/* Rating */}
                            <div className="flex flex-row mb-8 flex-none">
                                {Array(testimonials[index].rating).fill(0).map((_, index) => (<StarIcon key={index} className="w-5 h-5 mr-1 text-amber-300"/>))}
                            </div>
                            {/* Quote */}
                            <div className="shrink text-gray-900 text-xl md:text-2xl lg:text-4xl font-medium leading-snug mb-16 text-ellipsis line-clamp-none lg:line-clamp-4 xl:line-clamp-5">{testimonials[index].quote}</div>
                            {/* Name, title and slider buttons */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center flex-none w-full">
                                <div className="flex flex-col flex-none">
                                    <div className="text-gray-900 text-lg font-medium">{testimonials[index].name}</div>
                                    <div className="text-gray-500 text-base font-medium">{testimonials[index].title}</div>
                                </div>
                                <div className="flex flex-row flex-none space-x-4">
                                    <button onClick={() => back()} className={button}><ArrowLeftIcon className="w-6 h-6 text-gray-500"/></button>
                                    <button onClick={() => forward()} className={button}><ArrowRightIcon className="w-6 h-6 text-gray-500"/></button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-[4/3]">
                    <Image src={image.url} alt={image.alt} fill={true} className="object-cover" />
                </div>
            </div>
        </Container>
    )
}

export default Testimonials
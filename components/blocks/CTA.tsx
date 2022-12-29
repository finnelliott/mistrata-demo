"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useEffect, useState } from "react"
import CMSLink from "../shared/CMSLink";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import Container from "./Container"

type Props = {
    preheading?: string,
    heading: string,
    subheading?: string,
    ctas?: {
        link: {
            label: string,
            type: string,
            url?: string,
            page?: {
                slug: string
            }
        },
        icon?: (props: any) => JSX.Element
    }[]
}

const CTA = () => {

    const block = {
        preheading: "CTA",
        heading: "Meet the people behind the scenes",
        subheading: "We are a team of passionate people who love to create amazing products.",
        ctas: [
            {
                link: {
                    label: "About us",
                    type: "page",
                    page: {
                        slug: "about"
                    }
                }
            },
            {
                link: {
                    label: "Open positions",
                    type: "page",
                    page: {
                        slug: "careers"
                    }
                }
            }
        ]
    } as Props

    const image = {
        url: "/images/cta.png",
        alt: "cta",
        width: 1920,
        height: 1920
    }

    const testimonials = [
        {
            name: "Jane Cooper",
            title: "CEO, ABC Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
            name: "Jane Cooper",
            title: "CEO, DEF Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Jane Cooper",
            title: "CEO, GHI Company",
            rating: 5,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    const [ sliderIndex, setSliderIndex ] = useState(0)

    const back = () => {
        if (sliderIndex === 0) {
            setSliderIndex(testimonials.length - 1)
        } else {
            setSliderIndex(sliderIndex - 1)
        }
    }

    const forward = () => {
        if (sliderIndex === testimonials.length - 1) {
            setSliderIndex(0)
        } else {
            setSliderIndex(sliderIndex + 1)
        }
    }

    const button = "h-10 w-10 border border-gray-50 flex justify-center items-center rounded-full hover:bg-gray-50 hover:text-gray-600 text-white"

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-[4/3]">
                    <Image src={image.url} alt={image.alt} fill={true} className="object-cover" />
                    <div className="p-4 flex flex-col overflow-hidden w-full h-min z-10 absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 border-t border-white border-opacity-50 backdrop-blur-md">
                        {/* Rating */}
                        <div className="flex flex-row mt-2 mb-4 flex-none">
                            {Array(testimonials[sliderIndex].rating).fill(0).map((_, index) => (<StarIcon key={index} className="w-5 h-5 mr-1 text-white"/>))}
                        </div>
                        {/* Quote */}
                        <div className="shrink text-white text-xl md:text-2xl font-medium leading-snug mb-16 text-ellipsis line-clamp-none lg:line-clamp-4 xl:line-clamp-5">{testimonials[sliderIndex].quote}</div>
                        {/* Name, title and slider buttons */}
                        <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center flex-none w-full px-4 pb-4">
                            <div className="flex flex-col flex-none">
                                <div className="text-white text-lg font-medium">{testimonials[sliderIndex].name}</div>
                                <div className="text-gray-100 text-base font-medium">{testimonials[sliderIndex].title}</div>
                            </div>
                            <div className="flex flex-row flex-none space-x-4">
                                <button onClick={() => back()} className={button}><ArrowLeftIcon className="w-4 h-4"/></button>
                                <button onClick={() => forward()} className={button}><ArrowRightIcon className="w-4 h-4"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 w-full flex items-center">
                    <div className="flex w-full flex-col justify-between items-start">
                        <div className="flex flex-col place-items-start max-w-3xl mb-8">
                            {block.preheading && <div className="text-base font-semibold text-primary-700 text-left mb-3">{block.preheading}</div>}
                            <h2 className="text-4xl text-gray-900 text-left font-semibold">{block.heading}</h2>
                            {block.subheading && <div className="text-lg font-normal text-gray-500 mt-5">{block.subheading}</div>}
                        </div>
                        <div className="flex space-x-2">
                            {block.ctas && block.ctas?.map((cta, index) => (
                                <div key={index}>
                                <CMSLink link={cta.link}>
                                    {((index % 2 == 0) && (block.ctas && block.ctas.length > 1)) ?
                                    <SecondaryButton>
                                        <>
                                        {cta.icon && <cta.icon className="w-5 h-5 mr-2" />}
                                        {cta.link.label}
                                        </>
                                    </SecondaryButton>
                                    :
                                    <PrimaryButton>
                                        {cta.link.label}
                                    </PrimaryButton>
                                    }
                                </CMSLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CTA
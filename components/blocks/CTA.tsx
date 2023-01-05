"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import { useEffect, useState } from "react"
import { CTA } from "../../payload-types";
import CMSLink from "../shared/CMSLink";
import Icon from "../shared/Icon";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import Container from "../shared/Container"

type Props = {
    block: CTA
}

const CTA:React.FC<Props> = ({ block }) => {

    const [ sliderIndex, setSliderIndex ] = useState(0)

    const back = () => {
        if (sliderIndex === 0) {
            setSliderIndex(block.testimonials.length - 1)
        } else {
            setSliderIndex(sliderIndex - 1)
        }
    }

    const forward = () => {
        if (sliderIndex === block.testimonials.length - 1) {
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
                    <Image 
                        src={process.env.NEXT_PUBLIC_CMS_URL + (block.image.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="p-4 flex flex-col overflow-hidden w-full h-min z-10 absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 border-t border-white border-opacity-50 backdrop-blur-md">
                        {/* Rating */}
                        <div className="flex flex-row mt-2 mb-4 flex-none">
                            {Array(block.testimonials[sliderIndex].rating).fill(0).map((_, index) => (<StarIcon key={index} className="w-5 h-5 mr-1 text-white"/>))}
                        </div>
                        {/* Quote */}
                        <div className="shrink text-white text-xl md:text-2xl font-medium leading-snug mb-16 text-ellipsis line-clamp-none lg:line-clamp-4 xl:line-clamp-5">{block.testimonials[sliderIndex].quote}</div>
                        {/* Name, title and slider buttons */}
                        <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center flex-none w-full px-4 pb-4">
                            <div className="flex flex-col flex-none">
                                <div className="text-white text-lg font-medium">{block.testimonials[sliderIndex].name}</div>
                                <div className="text-gray-100 text-base font-medium">{block.testimonials[sliderIndex].caption}</div>
                            </div>
                            <div className="flex flex-row flex-none space-x-4">
                                <button onClick={() => back()} className={button}><span className="sr-only">Backwards</span><ArrowLeftIcon className="w-4 h-4"/></button>
                                <button onClick={() => forward()} className={button}><span className="sr-only">Forwards</span><ArrowRightIcon className="w-4 h-4"/></button>
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
                        {block.ctas.map((cta, index) => (
                            <div key={index}>
                            <CMSLink link={cta}>
                                {((index % 2 == 0) && (block.ctas.length > 1)) ?
                                <SecondaryButton>
                                    <>
                                    {cta.icon && <div className="w-5 h-5 mr-2 text-gray-900 stroke-current">
                                        <Icon icon={cta.icon} />
                                    </div>}
                                    {cta.label}
                                    </>
                                </SecondaryButton>
                                :
                                <PrimaryButton>
                                    <>
                                    {cta.icon && <div className="w-5 h-5 mr-2 text-white stroke-current">
                                        <Icon icon={cta.icon} />
                                    </div>}
                                    {cta.label}
                                    </>
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
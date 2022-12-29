"use client";

import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import CMSLink from "../shared/CMSLink"
import PrimaryButton from "../shared/PrimaryButton"
import SecondaryButton from "../shared/SecondaryButton"
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
    }[],
    team: {
        name: string,
        role: string,
        bio: string,
        image: {
            url: string,
            alt: string,
            width: number,
            height: number
        }
    }[]
}

const FAQs = () => {

    const block = {
        preheading: "Support",
        heading: "FAQs",
        subheading: "We are a team of passionate people who love to create amazing products.",
        ctas: [
            {
                link: {
                    label: "Get in touch",
                    type: "page",
                    page: {
                        slug: "contact"
                    }
                }
            },
        ],
        team: [
            {
                name: "John Doe",
                role: "CEO",
                bio: "John is the CEO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
                image: {
                    url: "/images/headshots/1.png",
                    alt: "John Doe",
                    width: 512,
                    height: 512
                }
            },
            {
                name: "Jane Doe",
                role: "CTO",
                bio: "Jane is the CTO of South Avenue Dental. She has been in the dental industry for over 20 years and has a passion for helping people.",
                image: {
                    url: "/images/headshots/2.png",
                    alt: "Jane Doe",
                    width: 512,
                    height: 512
                }
            },
            {
                name: "John Smith",
                role: "COO",
                bio: "John is the COO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
                image: {
                    url: "/images/headshots/3.png",
                    alt: "John Smith",
                    width: 512,
                    height: 512
                }
            },
        ]
    } as Props

    const faqs = [
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="col-span-1 w-full flex items-start">
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
                <div className="col-span-1 lg:col-span-2 w-full flex items-start pb-8">
                    <dl className="w-full space-y-2">
                        {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="">
                            {({ open }) => (
                            <div className={classNames(open ? "lg:bg-gray-50" : "" ," rounded-lg px-0 lg:px-8 py-8")}>
                                <dt className="text-lg">
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                    <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                    {open ? 
                                    <MinusCircleIcon
                                        className='h-6 w-6'
                                        aria-hidden="true"
                                    />
                                    :
                                    <PlusCircleIcon
                                        className='h-6 w-6'
                                        aria-hidden="true"
                                    />}
                                    </span>
                                </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base text-gray-600">{faq.answer}</p>
                                </Disclosure.Panel>
                            </div>
                            )}
                        </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="bg-gray-50 rounded-lg w-full flex flex-col space-y-8 items-center justify-center p-8">
                <div className="flex flex-row -space-x-4 items-end">
                    {block.team.map((member, index) => (
                        <div key={index} className="relative w-14 h-14 rounded-full overflow-hidden bg-white border-gray-50 border-2 object-cover first:-rotate-12 last:rotate-12 first:w-12 first:h-12 last:w-12 last:h-12 first:z-10 last:z-10 z-20">
                            <Image
                                src={member.image.url}
                                alt={member.image.alt}
                                fill={true}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col space-y-2 text-center">
                    <div className="text-xl font-semibold">Still have questions?</div>
                    <div className="text-lg font-normal text-gray-600">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</div>
                </div>
                <div className="flex flex-row space-x-2 w-full justify-center">
                {block.ctas && block.ctas.map((cta, index) => (
                    <div key={index}>
                    <CMSLink link={cta.link}>
                        {((index % 2 == 0) && (block.ctas && block.ctas.length > 1)) ?
                        <SecondaryButton>
                            <>
                            {cta.icon && <cta.icon className="w-5 h-5 mr-2 text-gray-900 stroke-current" />}
                            {cta.link.label}
                            </>
                        </SecondaryButton>
                        :
                        <PrimaryButton>
                            <>
                            {cta.icon && <cta.icon className="w-5 h-5 mr-2 text-white stroke-current" />}
                            {cta.link.label}
                            </>
                        </PrimaryButton>
                        }
                    </CMSLink>
                    </div>
                ))}
                </div>
            </div>
        </Container>
    )
}

export default FAQs
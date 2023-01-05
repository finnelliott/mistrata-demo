"use client";

import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import serialize from "../shared/RichTextSerializer";
import { FAQs, Team } from "../../payload-types";
import CMSLink from "../shared/CMSLink"
import Icon from "../shared/Icon";
import PrimaryButton from "../shared/PrimaryButton"
import SecondaryButton from "../shared/SecondaryButton"
import Container from "../shared/Container"

type Props = {
    block: FAQs,
    data: Team[]
}

const FAQsLayout: React.FC<Props> = ({ block, data }) => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {(block.preheading || block.heading || block.subheading) && <div className="col-span-1 w-full flex items-start">
                    <div className="flex w-full flex-col justify-between items-start">
                        <div className="flex flex-col place-items-start max-w-3xl mb-8">
                            {block.preheading && <div className="text-base font-semibold text-primary-700 text-left mb-3">{block.preheading}</div>}
                            <h2 className="text-4xl text-gray-900 text-left font-semibold">{block.heading}</h2>
                            {block.subheading && <div className="text-lg font-normal text-gray-500 mt-5">{block.subheading}</div>}
                        </div>
                    </div>
                </div>}
                <div className={(block.preheading || block.heading || block.subheading) ? "lg:col-span-2 " : "lg:col-span-3 " + "col-span-1 lg:col-span-2 w-full flex items-start pb-8"} >
                    <dl className="w-full space-y-2">
                        {block.faqs.map((faq) => (
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
                                <p className="text-base text-gray-600">{serialize(faq.answer)}</p>
                                </Disclosure.Panel>
                            </div>
                            )}
                        </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
            {<div className="bg-gray-50 rounded-lg w-full flex flex-col space-y-8 items-center justify-center p-8">
                <div className="flex flex-row -space-x-4 items-end">
                    {data.slice(0,3).map((member, index) => (
                        <div key={index} className={(data.length > 1 ? "first:-rotate-12 last:rotate-12 first:w-12 first:h-12 last:w-12 last:h-12 first:z-10 last:z-10 " : "") + "relative w-14 h-14 rounded-full overflow-hidden bg-white border-gray-50 border-2 z-20"}>
                            <Image 
                                src={process.env.NEXT_PUBLIC_CMS_URL + (member.image.url as string)}
                                alt={member.image.alt}
                                fill={true} 
                                className="object-cover" 
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col space-y-2 text-center">
                    <div className="text-xl font-semibold">{block.cta.heading}</div>
                    <div className="text-lg font-normal text-gray-600">{block.cta.subheading}</div>
                </div>
                <div className="flex flex-row space-x-2 w-full justify-center">
                {block.cta.ctas.map((cta, index) => (
                    <div key={index}>
                    <CMSLink link={cta}>
                        {((index % 2 == 0) && (block.cta.ctas.length > 1)) ?
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
            </div>}
        </Container>
    )
}

export default FAQsLayout
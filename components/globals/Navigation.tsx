"use client";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import CMSLink from '../shared/CMSLink'
import Link from 'next/link'
import SecondaryButton from '../shared/SecondaryButton';
import PrimaryButton from '../shared/PrimaryButton';
import { Link as LinkType } from '../../payload-types';

type CTA = {
    link: {
        label?: string,
        url?: string,
        type?: string,
        page?: {
            slug: string
        }
    },
    children?: React.ReactNode,
    className?: string,
    keyValue: string | number,
    icon?: (props: any) => JSX.Element
}

const Navigation = () => {
    const business = {
        name: "South Avenue Dental",
        logo: {
            url: "/images/logo.png",
            alt: "logo",
            width: 3946,
            height: 801
        }
    }
    const navbar = {
        navigation_items: [
            {
                link: {
                    label: "About",
                    type: "page",
                    page: {
                        slug: "about"
                    },
                    blockType: 'link',
                } as LinkType
            },
            {
                link: {
                    label: "Team",
                    type: "page",
                    page: {
                        slug: "team"
                    },
                    blockType: 'link',
                } as LinkType
            },
            {
                link: {
                    label: "Pricing",
                    type: "page",
                    page: {
                        slug: "pricing"
                    },
                    blockType: 'link',
                } as LinkType
            },
            {
                link: {
                    label: "Contact",
                    type: "page",
                    page: {
                        slug: "contact"
                    },
                    blockType: 'link',
                } as LinkType
            }
        ],
        ctas: [
            {
                link: {
                    label: "Get in touch",
                    type: "page",
                    page: {
                        slug: "contact"
                    },
                    blockType: 'link',
                } as LinkType
            }
        ]
    }

    return (
        <Popover className="relative bg-white z-50">
        {/* Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
            {/* Desktop container */}
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                {/* Logo */}
                <div className="flex-none justify-start">
                    <Link href="/">
                    <span className="sr-only">{business.name}</span>
                    <div className="relative h-12 w-auto overflow-hidden flex items-center">
                        <Image
                            src={business.logo.url}
                            height={40}
                            width={(business.logo.width/business.logo.height) * 40}
                            alt={business.logo.alt}
                        />
                    </div>
                    </Link>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                {/* Links */}
                <nav className="flex-1 hidden space-x-8 md:flex justify-start">
                    {navbar.navigation_items.map((item, index) => (
                        <div key={index} className="text-base font-medium text-gray-600 hover:text-gray-500" >
                            <CMSLink link={item.link}/>
                        </div>
                    ))}
                </nav>
                {/* CTAs */}
                <ul className="hidden items-center justify-end w-min md:flex md:flex-none lg:w-min">
                    {navbar.ctas.map((cta, index) => (
                        <li key={index}>
                        <CMSLink link={cta.link}>
                        {(index % 2 !== 0) ?
                        <SecondaryButton>
                            <>
                            {/* {cta.icon && <cta.icon className="w-5 h-5 mr-2" />} */}
                            {cta.link.label}
                            </>
                        </SecondaryButton>
                        :
                        <PrimaryButton>
                            {cta.link.label}
                        </PrimaryButton>
                        }
                        </CMSLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Mobile menu */}
        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-100"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-100"
        >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden bg-white">
            <div className="divide-y-2 divide-gray-50 rounded-b-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex-none justify-start lg:w-0 lg:flex-1">
                    <Link href="/">
                    <span className="sr-only">{business.name}</span>
                    <div className="relative h-12 w-auto overflow-hidden flex items-center">
                        <Image
                            src={business.logo.url}
                            alt={business.logo.alt}
                            height={40}
                            width={(business.logo.width/business.logo.height) * 40}
                        />
                    </div>
                        
                    </Link>
                    </div>
                    <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                <ul className="flex flex-col gap-y-4">
                    {navbar.navigation_items.map((item, index) => (
                        <li key={index} className="text-base font-medium text-gray-600 hover:text-gray-700"><CMSLink link={item.link} /></li>
                    ))}
                </ul>
                <ul>
                    {navbar.ctas.map((cta, index) => (
                        <li key={index} className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700">
                        <CMSLink link={cta.link} />
                        </li>
                    ))}
                </ul>
                </div>
            </div>
            </Popover.Panel>
        </Transition>
        </Popover>
  )
}

export default Navigation
"use client";

import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container"

const ContactForm = () => {

    const image = {
        url: "/images/testimonials.png",
        alt: "testimonials",
        width: 1920,
        height: 1920
    }

    const testimonial = {
        name: "Jane Cooper",
        title: "CEO, ABC Company",
        rating: 5,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }

    const [ form, setForm ] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
    })

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="col-span-1 w-full">
                        <div className="relative py-8 flex flex-col w-full h-full">
                            <SectionHeader preheading="Email us" heading="Contact form" subheading="Our friendly team would love to hear from you." />
                            <form className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                    <input type="text" required={true} name="first_name" id="first_name" placeholder="First name" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input type="text" required={false} name="last_name" id="last_name" placeholder="Last name" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="text" required={true} name="email" id="email" placeholder="johndoe@mail.com" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="text" required={false} name="phone" id="phone" placeholder="+44 7000 000 000" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" required={true} id="message" placeholder="Your message" rows={4} className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2 relative flex items-start">
                                    <div className="flex h-5 items-center">
                                    <input
                                        id="comments"
                                        aria-describedby="comments-description"
                                        name="comments"
                                        type="checkbox"
                                        required={true} 
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="comments" className="font-normal text-gray-700">
                                        You agree to our{` `}
                                    </label>
                                    <span id="comments-description" className="text-gray-500">
                                        <span className="sr-only">You agree to our </span><Link href="/privacy" className="underline hover:text-gray-700">privacy policy</Link>.
                                    </span>
                                    </div>
                                </div>
                                <div className="col-span-2 pt-8"><PrimaryButton className="w-full" type="submit">Send message</PrimaryButton></div>
                            </form>
                        </div>
                </div>
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-square">
                    <Image src={image.url} alt={image.alt} fill={true} className="object-cover" />
                </div>
            </div>
        </Container>
    )
}

export default ContactForm
"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../shared/PrimaryButton";
import SectionHeader from "../shared/SectionHeader";
import Container from "../shared/Container"
import { ContactForm } from "../../payload-types";
import { useState } from "react";
import axios from "axios";

type Props = {
    block: ContactForm
}

type Form = {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    message: string,
}

const ContactForm: React.FC<Props> = ({ block }) => {
    const [ data, setData ] = useState<Form>({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
    })

    let t: keyof Form;
    
    const [ submitting, setSubmitting ] = useState(false)

    const handleSubmit = async () => {
        setSubmitting(true)
        const formData = new FormData()

        let key: keyof typeof data;
        for (key in data) formData.append(key, data[key])

        fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/contact-form-submissions`, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        // if successful, setSubmitting to false and handle errors
        .then(() => {
            setSubmitting(false)
            setData({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                message: ""
            })
            alert("Your message has been sent. We will get back to you as soon as possible.")
        }
        )
        .catch((err) => {
            setSubmitting(false)
            alert("An error occured. Please try again later.")
        }
        )
    }

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="col-span-1 w-full">
                        <div className="relative py-8 flex flex-col w-full h-full">
                            <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} />
                            <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="grid grid-cols-2 gap-4 lg:gap-6">
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                                    <input type="text" value={data.first_name} onChange={(e) => setData({...data, first_name: e.target.value})} required={true} name="first_name" id="first_name" placeholder="First name" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input type="text" value={data.last_name} onChange={(e) => setData({...data, last_name: e.target.value})}  required={false} name="last_name" id="last_name" placeholder="Last name" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="text" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}  required={true} name="email" id="email" placeholder="johndoe@mail.com" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="text"  value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})} required={false} name="phone" id="phone" placeholder="+44 7000 000 000" className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea value={data.message} onChange={(e) => setData({...data, message: e.target.value})} name="message" required={true} id="message" placeholder="Your message" rows={4} className="mt-1 py-2.5 px-3.5 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="col-span-2 relative flex items-start">
                                    <div className="flex h-5 items-center">
                                    <input
                                        id="permissions"
                                        aria-describedby="permissions-description"
                                        name="permissions"
                                        type="checkbox"
                                        required={true} 
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="permissions" className="font-normal text-gray-700">
                                        You agree to our{` `}
                                    </label>
                                    <span id="permissions-description" className="text-gray-500">
                                        <span className="sr-only">You agree to our </span><Link href="/privacy" className="underline hover:text-gray-700 focus:outline-primary-600">privacy policy</Link>.
                                    </span>
                                    </div>
                                </div>
                                <div className="col-span-2 pt-8"><PrimaryButton className="w-full" type="submit">Send message</PrimaryButton></div>
                            </form>
                        </div>
                </div>
                <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-square">
                    <Image 
                        src={process.env.NEXT_PUBLIC_CMS_URL + (block.image.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
                    />
                </div>
            </div>
        </Container>
    )
}

export default ContactForm
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { use } from "react";
import Container from "../../components/shared/Container";

export default function NotFound() {
    // const treatments = use(fetch(`${process.env.VERCEL_URL}/api/pages?where[slug][equals]=${"treatments"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const blog = use(fetch(`${process.env.VERCEL_URL}/api/pages?where[slug][equals]=${"blog"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const about = use(fetch(`${process.env.VERCEL_URL}/api/pages?where[slug][equals]=${"about"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const contact = use(fetch(`${process.env.VERCEL_URL}/api/pages?where[slug][equals]=${"contact"}`).then((res) => res.json()).then((res) => res.docs[0]))

    // const navigation = []

    // if (treatments) {
    //     navigation.push({
    //         "heading": "Treatments",
    //         "subheading": "Find out more about our treatments and services.",
    //         "href": "/treatments",
    //     })
    // }
    // if (blog) {
    //     navigation.push({
    //         "heading": "Blog",
    //         "subheading": "Read the latest news and updates from our blog.",
    //         "href": "/blog",
    //     })
    // }
    // if (about) {
    //     navigation.push({
    //         "heading": "About",
    //         "subheading": "Learn more about our practice and team.",
    //         "href": "/about",
    //     })
    // }
    // if (contact) {
    //     navigation.push({
    //         "heading": "Contact",
    //         "subheading": "Get in touch",
    //         "href": "/contact",
    //     })
    // }

    return (
        <div className="">
            <Container>
                <div className="flex w-full flex-col pt-24">
                    <div className="flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0">
                        <div className="text-base font-semibold text-primary-700 text-left mb-3">404 Error</div>
                        <h1 className="text-4xl text-gray-900 text-left font-semibold">Sorry, we couldn't find that page.</h1>
                        <div className="text-lg font-normal text-gray-500 mt-5">Unfortunately, the page you are looking for doesn't exist or has been moved.</div>
                    </div>
                </div>
            </Container>
            {/* <Container>
                <nav className="space-y-1 max-w-xl">
                {navigation.map((item) => (
                    <Link
                    key={item.heading}
                    href={item.href}
                    className={'text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md'}
                    >
                    <div className="flex flex-col">
                        <div className="truncate text-xl font-medium text-primary-700 mb-1">{item.heading}</div>
                        <div className="truncate text-sm font-normal text-gray-600">{item.subheading}</div>
                    </div>
                    <ArrowLongRightIcon className="w-5 h-5 text-primary-700 ml-auto" aria-hidden="true" />
                    </Link>
                ))}
                </nav>
            </Container> */}
        </div>
    )
}
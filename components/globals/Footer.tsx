import Image from "next/image";
import Link from "next/link";
import CMSLink from "../shared/CMSLink";

const Footer = () => {
    const business = {
        name: "South Avenue Dental",
        logo: {
            url: "/images/logo.png",
            alt: "logo",
            width: 3946,
            height: 801
        }
    }
    const footer = {
        categories: [
            {
                heading: "Company",
                items: [
                    {
                        link: {
                            label: "About",
                            type: "page",
                            page: {
                                slug: "about"
                            }
                        }
                    },
                    {
                        link: {
                            label: "Team",
                            type: "page",
                            page: {
                                slug: "team"
                            }
                        }
                    },
                ]
            },
            {
                heading: "Resources",
                items: [
                    {
                        link: {
                            label: "About",
                            type: "page",
                            page: {
                                slug: "about"
                            }
                        }
                    },
                    {
                        link: {
                            label: "Team",
                            type: "page",
                            page: {
                                slug: "team"
                            }
                        }
                    },
                ]
            },
            {
                heading: "Social",
                items: [
                    {
                        link: {
                            label: "Facebook",
                            type: "url",
                            url: "https://www.facebook.com"
                        }
                    },
                    {
                        link: {
                            label: "Instagram",
                            type: "url",
                            url: "https://www.instagram.com"
                        }
                    },
                    {
                        link: {
                            label: "Twitter",
                            type: "url",
                            url: "https://www.twitter.com"
                        }
                    },
                ]
            },
            {
                heading: "Legal",
                items: [
                    {
                        link: {
                            label: "Privacy",
                            type: "page",
                            page: {
                                slug: "privacy"
                            }
                        }
                    },
                    {
                        link: {
                            label: "Terms",
                            type: "page",
                            page: {
                                slug: "terms"
                            }
                        }
                    },
                ]
            },
        ],
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                {footer.categories.map((category, index) => (
                    <div key={index} className="space-y-4 flex flex-col">
                    <div className="text-sm font-normal mb-2 text-gray-500">{category.heading}</div>
                    <ul className="space-y-3">{category.items.map((item, index) => (<li key={index}><CMSLink link={item.link}><div className="text-base font-medium text-gray-600">{item.link.label}</div></CMSLink></li>))}</ul>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-0 text-gray-500 border-t border-gray-200 py-8 items-center">
                <div className="flex-none justify-start w-full md:w-auto">
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
                <div className="w-full md:w-auto">
                    &copy;{` ${new Date().getFullYear()} ${business.name}. All rights reserved.`}
                </div>
            </div>
        </div>
    )
}

export default Footer
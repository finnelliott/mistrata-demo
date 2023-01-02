
import Image from "next/image";
import Link from "next/link";
import { FooterNavigation } from "../../payload-types";
import CMSLink from "../shared/CMSLink";

const FooterNavigationLayout = ({ data }: { data: FooterNavigation}) => {
    const business = {
        name: "South Avenue Dental",
        logo: {
            url: "/images/logo.png",
            alt: "logo",
            width: 3946,
            height: 801
        }
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    {data.columns.map((column, index) => (
                        <div key={index} className="space-y-4 flex flex-col">
                        <div className="text-sm font-normal mb-2 text-gray-500">{column.heading}</div>
                        <ul className="space-y-3">{column.links.map((item, index) => (<li key={index}><CMSLink link={item}><div className="text-base font-medium text-gray-600">{item.label}</div></CMSLink></li>))}</ul>
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
        </div>
    )
}

export default FooterNavigationLayout
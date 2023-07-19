import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import { Business, OpenPositions as OpenPositionsType } from "../../payload-types"
import { use } from "react"
import getPayloadClient from "../../payload/payloadClient"

type Props = {
    block: OpenPositionsType
}

const OpenPositions = async ({ block }: Props) => {
    const payload = await getPayloadClient();
    const business = await payload.findGlobal({
        slug: 'business',
    });

    return (
        <Container>
            <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} />
            {block.positions.length > 0 ? 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 w-full">
                    <ul role="list" className="divide-y border-y border-gray-200 divide-gray-200">
                        {block.positions.map((position) => (
                        <li key={position.id}>
                            <a href={`mailto:${business.email}?subject=${position.title} Application&body=Please include a copy of your CV alongside a short covering letter. Thank you in advance for your application.`} className="block hover:opacity-80">
                            <div className="py-6">
                                <div className="flex items-center justify-between">
                                <p className="truncate text-lg font-medium text-gray-900">{position.title}</p>
                                <div className="ml-2 flex flex-shrink-0">
                                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize">
                                    {position.type}
                                    </p>
                                </div>
                                </div>
                                <p className="mt-4 text-base font-normal text-gray-600">{position.description}</p>
                                <div className="mt-6 flex items-center justify-start space-x-4">
                                <div className="">
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    {position.location}
                                    </p>
                                </div>
                                {position.close_date && <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <p>
                                    Closing on <time dateTime={position.close_date}>{new Date(position.close_date).toDateString()}</time>
                                    </p>
                                </div>}
                                </div>
                            </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1 bg-gray-100 w-full relative block aspect-[4/3]">
                    <Image 
                        src={(block.image.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
            :
            <div className="text-center p-8 bg-gray-50 rounded-md">
                <p className="text-lg font-medium text-gray-900">Sorry, there are no open positions at the moment</p>
                <p className="mt-4 text-base font-normal text-gray-600">Please check back later</p>
            </div>
            }
        </Container>
    )
}

export default OpenPositions

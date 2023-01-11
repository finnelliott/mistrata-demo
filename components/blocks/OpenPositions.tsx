import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import { OpenPositions as OpenPositionsType } from "../../payload-types"

type Props = {
    block: OpenPositionsType
}

const OpenPositions: React.FC<Props> = ({ block }) => {

    return (
        <Container>
            <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} />
            {block.positions.length > 0 ? 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 w-full">
                    <ul role="list" className="divide-y border-y border-gray-200 divide-gray-200">
                        {block.positions.map((position) => (
                        <li key={position.id}>
                            <a href="mailto:sad@sad.co.uk" className="block hover:opacity-80">
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
                        src={process.env.NEXT_PUBLIC_CMS_URL + (block.image.url as string)}
                        alt={block.image.alt}
                        fill={true} 
                        className="object-cover" 
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

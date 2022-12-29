import SectionHeader from "../shared/SectionHeader"
import Container from "./Container"
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from "next/image"

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    description: 'We are looking for a Back End Developer to join our team. You will be responsible for the development and maintenance of our web applications. You will also be responsible for the development and maintenance of our web applications.',
    type: 'Full-time',
    location: 'Remote',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    description: 'We are looking for a Back End Developer to join our team. You will be responsible for the development and maintenance of our web applications. You will also be responsible for the development and maintenance of our web applications.',
    type: 'Full-time',
    location: 'Remote',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    description: 'We are looking for a Back End Developer to join our team. You will be responsible for the development and maintenance of our web applications. You will also be responsible for the development and maintenance of our web applications.',
    type: 'Full-time',
    location: 'Remote',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
  {
    id: 4,
    title: 'User Interface Designer',
    description: 'We are looking for a Back End Developer to join our team. You will be responsible for the development and maintenance of our web applications. You will also be responsible for the development and maintenance of our web applications.',
    type: 'Full-time',
    location: 'Remote',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]

const image = {
    url: "/images/open-positions.png",
    alt: "testimonials",
    width: 1920,
    height: 1920
}

const OpenPositions = () => {

    return (
        <Container>
            <SectionHeader preheading="Open positions" heading="Join our team" subheading="We are a team of passionate people who love to create amazing products." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="col-span-1 w-full">
                    <ul role="list" className="divide-y border-y border-gray-200 divide-gray-200">
                        {positions.map((position) => (
                        <li key={position.id}>
                            <a href="mailto:sad@sad.co.uk" className="block hover:opacity-80">
                            <div className="py-6">
                                <div className="flex items-center justify-between">
                                <p className="truncate text-lg font-medium text-gray-900">{position.title}</p>
                                <div className="ml-2 flex flex-shrink-0">
                                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
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
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <p>
                                    Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1 bg-gray-100 w-full relative block aspect-[4/3]">
                    <Image src={image.url} alt={image.alt} fill={true} className="object-cover" />
                </div>
            </div>
        </Container>
    )
}

export default OpenPositions

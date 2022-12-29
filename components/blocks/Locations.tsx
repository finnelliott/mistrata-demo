import { MapPinIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import SectionHeader from "../shared/SectionHeader"
import Container from "./Container"

const Locations = () => {

    const locations = [
        {
            name: "Bath",
            address: {
                street: "123 South Avenue",
                city: "New York",
                state: "NY",
                postal_code: "10001"
            },
            opening_hours: "Mon - Fri: 9am - 5pm",
            phone: "123-456-7890",
            email: "sad@sad.co.uk"
        },
        {
            name: "Bristol",
            address: {
                street: "123 South Avenue",
                city: "New York",
                state: "NY",
                postal_code: "10001"
            },
            opening_hours: "Mon - Fri: 9am - 5pm",
            phone: "123-456-7890",
            email: "sad@sad.co.uk"
        },
        {
            name: "Taunton",
            address: {
                street: "123 South Avenue",
                city: "New York",
                state: "NY",
                postal_code: "10001"
            },
            opening_hours: "Mon - Fri: 9am - 5pm",
            phone: "123-456-7890",
            email: "sad@sad.co.uk"
        },
    ]

    return (
        <Container>
            <SectionHeader preheading="Visit us" heading="Our practice" subheading="Come visit our friendly team at one of our offices." />
            <div className="relative w-full aspect-square sm:aspect-video">
                <Image
                    src=""
                    alt=""
                    fill={true}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((location, index) => (
                    <div key={index} className="flex flex-col space-y-4 mt-16">
                        <MapPinIcon className="w-6 h-6 text-primary-700" />
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                            <div className="text-base font-normal text-gray-600">
                                {location.opening_hours}
                            </div>
                        </div>
                        <div className="text-base font-semibold text-primary-700">
                            <p>{location.address.street}</p>
                            <p>{location.address.city}</p>
                            <p>{location.address.state}</p>
                            <p>{location.address.postal_code}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Locations
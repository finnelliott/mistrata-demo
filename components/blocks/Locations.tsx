import { MapPinIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { Locations as LocationsType } from "../../payload-types"

type Props = {
    block: LocationsType
}

const Locations: React.FC<Props> = ({ block }) => {

    const dotw = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

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
                {block.locations.map((location, index) => (
                    <div key={index} className="flex flex-col space-y-4 mt-16">
                        <MapPinIcon className="w-6 h-6 text-primary-700" />
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                            <div className="text-base font-normal text-gray-600">
                                {dotw.map((day) => (
                                    <p key={day}>{day.charAt(0).toUpperCase() + day.slice(1)}: {location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].open} - {location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].close}</p>
                                ))}
                            </div>
                        </div>
                        <div className="text-base font-semibold text-primary-700">
                            <p>{location.address.line1}</p>
                            <p>{location.address.line2}</p>
                            <p>{location.address.line3}</p>
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
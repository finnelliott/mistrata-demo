"use client";

import { MapPinIcon } from "@heroicons/react/24/outline"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { Locations as LocationsType } from "../../payload-types"

type Props = {
    block: LocationsType
}

const LocationsLayout: React.FC<Props> = ({ block }) => {

    const dotw = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    
    return (
        <Container>
            <SectionHeader preheading="Visit us" heading="Our practice" subheading="Come visit our friendly team at one of our offices." />
            <div className="relative w-full aspect-square sm:aspect-video">
            
                <iframe
                    className="w-full border-none aspect-square sm:aspect-video"
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_EMBED_API_KEY}&q=${encodeURIComponent([block.locations[0].address.line1, block.locations[0].address.line2, block.locations[0].address.line3, block.locations[0].address.city, block.locations[0].address.state, block.locations[0].address.postal_code].filter(Boolean).join(", "))}`} 
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                {block.locations.map((location, index) => (
                    <div key={index} className="flex flex-col space-y-4 mt-16">
                        <div className="flex items-center justify-center h-12 w-12 p-3 rounded-xl bg-primary-600 text-white">
                            <MapPinIcon className="h-6 w-6 stroke-1.5" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                            <div className="text-base font-semibold text-primary-700">
                                <p>{[location.address.line1, location.address.line2, location.address.line3, location.address.city, location.address.state, location.address.postal_code].filter(Boolean).join(", ")}</p>
                            </div>
                            <div className="text-sm text-gray-600 space-y-2">
                                {dotw.map((day) => (
                                    <p key={day} className="w-full flex justify-between"><span className="text-left font-medium">{day.charAt(0).toUpperCase() + day.slice(1)}</span><span className="text-right text-gray-400">{!location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].open || !location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].close || location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].closed ? "Closed" : `${location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].open} - ${location.opening_hours[day as ("monday" | "tuesday" | "wednesday"| "thursday" | "friday" | "saturday" | "sunday")].close}`}</span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default LocationsLayout
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Container from "../shared/Container"

const ContactOptions = () => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    const options = [
        {
            title: "Call Us",
            description: "We are available 24/7 to answer any questions you may have.",
            icon: (props: any) => <PhoneIcon />,
            link: {
                label: "555-555-5555",
                type: "url",
                url: "tel:555-555-5555"
            }
        },
        {
            title: "Email Us",
            description: "We are available 24/7 to answer any questions you may have.",
            icon: (props: any) => <EnvelopeIcon />,
            link: {
                label: "sad@sad.co.uk",
                type: "url",
                url: "mailto:sad@sad.co.uk"
            }
        },
        {
            title: "Visit Us",
            description: "We are available 24/7 to answer any questions you may have.",
            icon: (props: any) => <MapPinIcon />,
            link: {
                label: "1234 Street, City, Country",
                type: "url",
                url: "https://www.google.com/maps"
            }
        }
    ]
    return (
        <Container>
            <div className={classNames(options.length % 3 == 0 ? "lg:grid-cols-3" : options.length > 2 ? "lg:grid-cols-4" : "", " grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8")}>
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-center h-12 w-12 p-3 rounded-xl bg-primary-600 text-white">
                            <option.icon className="h-6 w-6 stroke-2" aria-hidden="true" />
                        </div>
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                            <p className="mt-2 mb-5 text-base text-gray-600">{option.description}</p>
                            <a href={option.link
                                .url} className="text-base font-semibold text-primary-700">{option.link.label}</a>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ContactOptions
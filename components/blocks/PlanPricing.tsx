import { CheckIcon } from "@heroicons/react/24/outline"
import CMSLink from "../shared/CMSLink"
import PrimaryButton from "../shared/PrimaryButton"
import SectionHeader from "../shared/SectionHeader"
import Container from "./Container"

const PlanPricing = () => {

    const features = [
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        },
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        },
        {
            name: 'Feature 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            icon: (props: any) => (
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
        }
    ]

    const planFeatures = [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Vel ipsa esse repudiandae excepturi',
        'Itaque cupiditate adipisci quibusdam',
    ]

    const cta = { link: { label: "Call us", type: "page", page: { slug: "about" } } }

    return (
        <Container>
        <SectionHeader preheading="Our plan" heading="Everything you need, all in one package" subheading="We offer a complete plan that includes everything you need to get started with your new website." />
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="col-span-1 w-full">
                <div className="flex flex-col space-y-12">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative flex flex-row gap-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 sm:shrink-0 border-4 border-primary-50">
                        <feature.icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-xl font-medium leading-8 text-gray-900">{feature.name}</p>
                        <p className="mt-2 text-base leading-6 text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="col-span-1 w-full overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200">
                <div className="border-b border-gray-200 bg-white px-8 pt-8 pb-6 flex flex-row space-x-4 items-start">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold leading-6 text-gray-900">Essentials plan</h3>
                        <p className="mt-2 text-base text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
                        </p>
                    </div>
                    <div className="flex-none">
                        <p className="font-semibold flex flex-row"><span className="text-2xl md:text-4xl self-start">$</span><span className="text-4xl md:text-6xl">10</span><span className="font-medium text-gray-600 text-base self-end">{` `}/month</span></p>
                    </div>
                </div>
                <div className="px-8 py-8">
                    <ul role="list" className="space-y-4">
                        {planFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base leading-6 text-gray-600">{feature}</p>
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="border-t border-gray-200 bg-white px-8 pb-8 pt-6">
                    <CMSLink link={cta.link}>
                        <PrimaryButton className={`w-full`}>{cta.link.label}</PrimaryButton>
                    </CMSLink>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default PlanPricing
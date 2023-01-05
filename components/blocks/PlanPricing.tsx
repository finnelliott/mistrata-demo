import { CheckIcon } from "@heroicons/react/24/outline"
import CMSLink from "../shared/CMSLink"
import PrimaryButton from "../shared/PrimaryButton"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { PlanPricing } from "../../payload-types"
import Icon from "../shared/Icon"

type Props = {
    block: PlanPricing
}

const PlanPricing: React.FC<Props> = ({ block }) => {
    return (
            <Container>
                <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} />
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="col-span-1 w-full">
                        <div className="flex flex-col space-y-12">
                            {block.benefits.map((benefit) => (
                            <div key={benefit.benefit} className="relative flex flex-row gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 sm:shrink-0 border-4 border-primary-50">
                                <div className="h-6 w-6">
                                    <Icon icon={benefit.icon} aria-hidden="true" />
                                </div>
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                <p className="text-xl font-medium leading-8 text-gray-900">{benefit.benefit}</p>
                                <p className="mt-2 text-base leading-6 text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 w-full overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200">
                        <div className="border-b border-gray-200 bg-white px-8 pt-8 pb-6 flex flex-row space-x-4 items-start">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold leading-6 text-gray-900">{block.plan.title}</h3>
                                <p className="mt-2 text-base text-gray-600">
                                    {block.plan.description}
                                </p>
                            </div>
                            <div className="flex-none">
                                <p className="font-semibold flex flex-row">
                                    <span className="text-4xl md:text-6xl">{block.plan.price}</span><span className="font-medium text-gray-600 text-base self-end">{` `}/month</span>
                                </p>
                            </div>
                        </div>
                        <div className="px-8 py-8">
                            <ul role="list" className="space-y-4">
                                {block.plan.features.map((feature) => (
                                <li key={feature.feature} className="flex items-start">
                                    <div className="flex-shrink-0">
                                    <CheckIcon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                                    </div>
                                    <p className="ml-3 text-base leading-6 text-gray-600">{feature.feature}</p>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border-t border-gray-200 bg-white px-8 pb-8 pt-6">
                        {block.plan.ctas[0] && <CMSLink link={block.plan.ctas[0]}>
                                <PrimaryButton className="w-full">
                                    <>
                                    {block.plan.ctas[0].icon && <div className="w-5 h-5 mr-2 text-white stroke-current">
                                        <Icon icon={block.plan.ctas[0].icon} />
                                    </div>}
                                    {block.plan.ctas[0].label}
                                    </>
                                </PrimaryButton>
                        </CMSLink>}
                        </div>
                    </div>
                </div>
            </Container>
    )
}

export default PlanPricing
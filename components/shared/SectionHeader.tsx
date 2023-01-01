import { Link } from "../../payload-types"
import CMSLink from "./CMSLink"
import Icon from "./Icon"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

type Props = {
    preheading?: string,
    heading: string,
    subheading?: string,
    ctas?: Link[]
}

const SectionHeader:React.FC<Props> = ({ preheading, heading, subheading, ctas }) => {
    return (
        <div className="flex w-full flex-col lg:flex-row justify-between items-start lg:items-center pb-16">
            <div className="flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0">
                {preheading && <div className="text-base font-semibold text-primary-700 text-left mb-3">{preheading}</div>}
                <h2 className="text-3xl text-gray-900 text-left font-semibold">{heading}</h2>
                {subheading && <div className="text-lg font-normal text-gray-500 mt-5">{subheading}</div>}
            </div>
            <div className="flex space-x-2">
                {ctas?.map((cta, index) => (
                    <div key={index}>
                    <CMSLink link={cta}>
                        {((index % 2 == 0) && (ctas.length > 1)) ?
                        <SecondaryButton>
                            <>
                            {cta.icon && <div className="w-5 h-5 mr-2 text-gray-900 stroke-current">
                                <Icon icon={cta.icon} />
                            </div>}
                            {cta.label}
                            </>
                        </SecondaryButton>
                        :
                        <PrimaryButton>
                            <>
                            {cta.icon && <div className="w-5 h-5 mr-2 text-white stroke-current">
                                <Icon icon={cta.icon} />
                            </div>}
                            {cta.label}
                            </>
                        </PrimaryButton>
                        }
                    </CMSLink>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default SectionHeader
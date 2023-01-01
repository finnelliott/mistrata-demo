import CMSLink from "../shared/CMSLink"
import PrimaryButton from "../shared/PrimaryButton"
import SecondaryButton from "../shared//SecondaryButton"
import Container from "../shared/Container"
import Icon from "../shared/Icon"
import { PageHeader } from "../../payload-types"

type Props = {
    block: PageHeader
}

const AboutHeader = {
    preheading: "About Us",
    heading: "About South Avenue Dental",
    subheading: "South Avenue Dental is a family owned and operated dental practice in the heart of the South Avenue neighborhood in Rochester, NY. We are committed to providing the highest quality dental care in a comfortable and friendly environment. We are dedicated to providing the best possible care for our patients and their families. We are committed to providing the highest quality dental care in a comfortable and friendly environment. We are dedicated to providing the best possible care for our patients and their families.",
}

const PageHeader:React.FC<Props> = ({ block }) => {
    return (
        <Container>
            <div className="flex w-full flex-col lg:flex-row justify-between items-start lg:items-center pt-24">
                <div className="flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0">
                    {block.preheading && <div className="text-base font-semibold text-primary-700 text-left mb-3">{block.preheading}</div>}
                    <h1 className="text-4xl text-gray-900 text-left font-semibold">{block.heading}</h1>
                    {block.subheading && <div className="text-lg font-normal text-gray-500 mt-5">{block.subheading}</div>}
                </div>
                <div className="flex space-x-2">
                {block.ctas.map((cta, index) => (
                    <div key={index}>
                    <CMSLink link={cta}>
                        {((index % 2 == 0) && (block.ctas.length > 1)) ?
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
        </Container>
    )
}

export default PageHeader
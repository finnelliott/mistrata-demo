import CMSLink from "../shared/CMSLink"
import PrimaryButton from "../shared/PrimaryButton"
import SecondaryButton from "../shared//SecondaryButton"
import Container from "./Container"

type Props = {
    preheading?: string,
    heading: string,
    subheading?: string,
    ctas?: {
        link: {
            label: string,
            type: string,
            url?: string,
            page?: {
                slug: string
            }
        },
        icon?: (props: any) => JSX.Element
    }[]
}

const PageHeader:React.FC<Props> = ({ preheading, heading, subheading, ctas }) => {
    return (
        <Container>
            <div className="flex w-full flex-col lg:flex-row justify-between items-start lg:items-center pt-24">
                <div className="flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0">
                    {preheading && <div className="text-base font-semibold text-primary-700 text-left mb-3">{preheading}</div>}
                    <h1 className="text-4xl text-gray-900 text-left font-semibold">{heading}</h1>
                    {subheading && <div className="text-lg font-normal text-gray-500 mt-5">{subheading}</div>}
                </div>
                <div className="flex space-x-2">
                    {ctas?.map((cta, index) => (
                        <div key={index}>
                        <CMSLink link={cta.link}>
                            {((index % 2 == 0) && (ctas.length > 1)) ?
                            <SecondaryButton>
                                <>
                                {cta.icon && <cta.icon className="w-5 h-5 mr-2" />}
                                {cta.link.label}
                                </>
                            </SecondaryButton>
                            :
                            <PrimaryButton>
                                {cta.link.label}
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
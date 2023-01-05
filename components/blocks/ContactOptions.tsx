import { ContactOptions } from "../../payload-types"
import CMSLink from "../shared/CMSLink"
import Container from "../shared/Container"
import Icon from "../shared/Icon"

type Props = {
    block: ContactOptions
}

const ContactOptions: React.FC<Props> = ({ block }) => {

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Container>
            <div className={classNames(block.options.length % 3 == 0 ? "lg:grid-cols-3" : block.options.length > 2 ? "lg:grid-cols-4" : "", " grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8")}>
                {block.options.map((option, index) => (
                    <div key={index} className="flex flex-col items-start p-6 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-center h-12 w-12 p-3 rounded-xl bg-primary-600 text-white">
                            <div className="h-6 w-6 stroke-2">
                                <Icon icon={option.icon} />
                            </div>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-900">{option.heading}</h3>
                            <p className="mt-2 mb-5 text-base text-gray-600">{option.subheading}</p>
                            <CMSLink link={option.cta[0]}><div className="text-base font-semibold text-primary-700">{option.cta[0].label}</div></CMSLink>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ContactOptions
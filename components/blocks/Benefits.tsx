import Icon from "../shared/Icon"
import Container from "../shared/Container"
import { Benefits } from "../../payload-types"

type Props = {
    block: Benefits
}

const Benefits: React.FC<Props> = ({ block }) => {

    return (
        <Container>
            <div className="max-w-lg md:max-w-none">
                <div className="flex flex-col md:flex-row space-y-12 md:space-x-12 md:space-y-0">
                    {block.benefits.map((item, index) => (
                    <div key={index} className="relative flex flex-col gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 sm:shrink-0 border-4 border-primary-50">
                        <div className="h-6 w-6 stroke-1.5">
                            <Icon icon={item.icon} aria-hidden="true" />
                        </div>
                        </div>
                        <div className="sm:min-w-0 sm:flex-1">
                        <p className="text-xl font-medium leading-8 text-gray-900">{item.benefit}</p>
                        <p className="mt-2 text-base leading-6 text-gray-600">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Benefits
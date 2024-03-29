import Image from "next/image";
import { Hero, Page } from "../../payload-types";
import CMSLink from "../shared/CMSLink";
import Container from "../shared/Container";
import Icon from "../shared/Icon";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

type Props = {
    block: Hero
}

const Hero: React.FC<Props> = ({ block }) => {

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
            <div className="flex flex-col items-start justify-center text-left w-full col-span-1">
                <div className="space-y-4 flex flex-col place-items-start w-full">
                    <h1 className="font-medium font-display text-gray-900 text-3xl sm:text-5xl text-left max-w-4xl leading-snug sm:leading-tight">{block.heading}</h1>
                    <p className="font-normal text-lg text-gray-600 text-left max-w-2xl">{block.subheading}</p>
                </div>
                <div className="flex flex-row space-x-2 w-full place-items-start mt-8">
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
            {/* image */}
            {block.image.url && <div className="col-span-1 bg-gray-100 h-full w-full relative block aspect-[4/3]">
                <div className="absolute top-0 left-0 aspect-video w-full bg-gradient-to-t from-black to-white z-20 opacity-10"></div>
                <Image
                    src={(block.image.url) as string}
                    fill={true} 
                    className="object-cover"
                    alt={block.image.alt}
                    priority={true}
                    sizes="100vw"
                />
            </div>}
            </div>
        </Container>
    )
}

export default Hero
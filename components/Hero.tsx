import Image from "next/image";
import CMSLink from "./CMSLink";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
    const block = {
        heading: "We design digital experiences that create more happy in the world",
        subheading: "We’re a full-service design and development agency who specialise in simple, useful and beautiful solutions.",
        ctas: [
            {
                link: {
                    label: "Get in touch",
                    type: "page",
                    page: {
                        slug: "contact"
                    }
                },
                icon: (props: any) => <svg {...props} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.38028 7.85323C8.07627 9.30285 9.02506 10.6615 10.2266 11.8631C11.4282 13.0646 12.7869 14.0134 14.2365 14.7094C14.3612 14.7693 14.4235 14.7992 14.5024 14.8222C14.7828 14.904 15.127 14.8453 15.3644 14.6752C15.4313 14.6274 15.4884 14.5702 15.6027 14.4559C15.9523 14.1063 16.1271 13.9315 16.3029 13.8172C16.9658 13.3862 17.8204 13.3862 18.4833 13.8172C18.6591 13.9315 18.8339 14.1063 19.1835 14.4559L19.3783 14.6508C19.9098 15.1822 20.1755 15.448 20.3198 15.7333C20.6069 16.3009 20.6069 16.9712 20.3198 17.5387C20.1755 17.8241 19.9098 18.0898 19.3783 18.6213L19.2207 18.7789C18.6911 19.3085 18.4263 19.5733 18.0662 19.7756C17.6667 20 17.0462 20.1614 16.588 20.16C16.1751 20.1588 15.8928 20.0787 15.3284 19.9185C12.295 19.0575 9.43264 17.433 7.04466 15.045C4.65668 12.6571 3.03221 9.79471 2.17124 6.76131C2.01103 6.19687 1.93092 5.91464 1.9297 5.5017C1.92833 5.04347 2.08969 4.42298 2.31411 4.02348C2.51636 3.66345 2.78117 3.39863 3.3108 2.86901L3.46843 2.71138C3.99987 2.17993 4.2656 1.91421 4.55098 1.76987C5.11854 1.4828 5.7888 1.4828 6.35636 1.76987C6.64174 1.91421 6.90747 2.17993 7.43891 2.71138L7.63378 2.90625C7.98338 3.25585 8.15819 3.43065 8.27247 3.60643C8.70347 4.26932 8.70347 5.1239 8.27247 5.78679C8.15819 5.96257 7.98338 6.13738 7.63378 6.48698C7.51947 6.60129 7.46231 6.65845 7.41447 6.72526C7.24446 6.96269 7.18576 7.30695 7.26748 7.5873C7.29048 7.6662 7.32041 7.72854 7.38028 7.85323Z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
            },
            {
                link: {
                    label: "Call us",
                    type: "page",
                    page: {
                        slug: "about"
                    }
                },
                icon: (props: any) => <svg {...props} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.38028 7.85323C8.07627 9.30285 9.02506 10.6615 10.2266 11.8631C11.4282 13.0646 12.7869 14.0134 14.2365 14.7094C14.3612 14.7693 14.4235 14.7992 14.5024 14.8222C14.7828 14.904 15.127 14.8453 15.3644 14.6752C15.4313 14.6274 15.4884 14.5702 15.6027 14.4559C15.9523 14.1063 16.1271 13.9315 16.3029 13.8172C16.9658 13.3862 17.8204 13.3862 18.4833 13.8172C18.6591 13.9315 18.8339 14.1063 19.1835 14.4559L19.3783 14.6508C19.9098 15.1822 20.1755 15.448 20.3198 15.7333C20.6069 16.3009 20.6069 16.9712 20.3198 17.5387C20.1755 17.8241 19.9098 18.0898 19.3783 18.6213L19.2207 18.7789C18.6911 19.3085 18.4263 19.5733 18.0662 19.7756C17.6667 20 17.0462 20.1614 16.588 20.16C16.1751 20.1588 15.8928 20.0787 15.3284 19.9185C12.295 19.0575 9.43264 17.433 7.04466 15.045C4.65668 12.6571 3.03221 9.79471 2.17124 6.76131C2.01103 6.19687 1.93092 5.91464 1.9297 5.5017C1.92833 5.04347 2.08969 4.42298 2.31411 4.02348C2.51636 3.66345 2.78117 3.39863 3.3108 2.86901L3.46843 2.71138C3.99987 2.17993 4.2656 1.91421 4.55098 1.76987C5.11854 1.4828 5.7888 1.4828 6.35636 1.76987C6.64174 1.91421 6.90747 2.17993 7.43891 2.71138L7.63378 2.90625C7.98338 3.25585 8.15819 3.43065 8.27247 3.60643C8.70347 4.26932 8.70347 5.1239 8.27247 5.78679C8.15819 5.96257 7.98338 6.13738 7.63378 6.48698C7.51947 6.60129 7.46231 6.65845 7.41447 6.72526C7.24446 6.96269 7.18576 7.30695 7.26748 7.5873C7.29048 7.6662 7.32041 7.72854 7.38028 7.85323Z" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        ],
        image: {
            url: "/images/hero.png",
            alt: "hero",
            width: 1920,
            height: 1080
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-24">
            {/* heading, subheading & ctas  */}
            <div className="flex flex-col place-items-start mb-16 text-left w-full">
                <div className="space-y-4 flex flex-col place-items-start w-full">
                    <h1 className="font-medium font-display text-gray-900 text-3xl sm:text-5xl text-left max-w-4xl leading-snug sm:leading-normal">{block.heading}</h1>
                    <p className="font-normal text-lg text-gray-600 text-left max-w-2xl">{block.subheading}</p>
                </div>
                <div className="flex flex-row space-x-2 w-full place-items-start mt-8">
                {block.ctas.reverse().map((cta, index) => (
                    <div key={index}>
                    <CMSLink link={cta.link}>
                        {(index % 2 == 0) ?
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
            {/* image */}
            <div className="relative col-span-2 lg:col-span-4 aspect-video z-20 bg-transparent">
                <div className="absolute top-0 left-0 aspect-video w-full bg-gradient-to-t from-black to-white z-20 opacity-10"></div>
                <Image
                    src={block.image.url}
                    width={block.image.width}
                    height={block.image.height}
                    alt={block.image.alt}
                    priority={true}
                    className="z-10"
                />
            </div>
        </div>
    )
}

export default Hero
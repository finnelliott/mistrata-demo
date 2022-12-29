import Container from "./Container"
import SectionHeader from "./SectionHeader"

const Team = () => {
    const sectionHeader = {
        preheading: "Our team",
        heading: "Meet the people behind the scenes",
        subheading: "We are a team of passionate people who love to create amazing products.",
        ctas: [
            {
                link: {
                    label: "About us",
                    type: "page",
                    page: {
                        slug: "about"
                    }
                }
            },
            {
                link: {
                    label: "Open positions",
                    type: "page",
                    page: {
                        slug: "careers"
                    }
                }
            }
        ]
    }

    return (
        <Container>
            <SectionHeader preheading={sectionHeader.preheading} heading={sectionHeader.heading} subheading={sectionHeader.subheading} ctas={sectionHeader.ctas} />
        </Container>
    )
}

export default Team
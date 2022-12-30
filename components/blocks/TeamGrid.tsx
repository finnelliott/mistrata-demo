import Container from "./Container"
import SectionHeader from "../shared/SectionHeader"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import TeamMemberCard from "../shared/TeamMemberCard";

const TeamGrid = () => {
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

    const team = [
        {
            name: "John Doe",
            role: "CEO",
            bio: "John is the CEO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/1.png",
                alt: "John Doe",
                width: 512,
                height: 512
            }
        },
        {
            name: "Jane Doe",
            role: "CTO",
            bio: "Jane is the CTO of South Avenue Dental. She has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/2.png",
                alt: "Jane Doe",
                width: 512,
                height: 512
            }
        },
        {
            name: "John Smith",
            role: "COO",
            bio: "John is the COO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/3.png",
                alt: "John Smith",
                width: 512,
                height: 512
            }
        },
        {
            name: "Jane Smith",
            role: "CMO",
            bio: "Jane is the CMO of South Avenue Dental. She has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/4.png",
                alt: "Jane Smith",
                width: 512,
                height: 512
            }
        },
        {
            name: "John Doe",
            role: "CFO",
            bio: "John is the CFO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/5.png",
                alt: "John Doe",
                width: 512,
                height: 512
            }
        },
        {
            name: "Jane Doe",
            role: "CIO",
            bio: "Jane is the CIO of South Avenue Dental. She has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/6.png",
                alt: "Jane Doe",
                width: 512,
                height: 512
            }
        },
        {
            name: "John Smith",
            role: "CPO",
            bio: "John is the CPO of South Avenue Dental. He has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/7.png",
                alt: "John Smith",
                width: 512,
                height: 512
            }
        },
        {
            name: "Jane Smith",
            role: "CSO",
            bio: "Jane is the CSO of South Avenue Dental. She has been in the dental industry for over 20 years and has a passion for helping people.",
            image: {
                url: "/images/headshots/8.png",
                alt: "Jane Smith",
                width: 512,
                height: 512
            }
        },
    ]

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {team.map((member, index) => (
                    <div key={index}>
                    <TeamMemberCard member={member} index={index} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default TeamGrid
"use client";

import Container from "./Container"
import SectionHeader from "../shared/SectionHeader"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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

    const [ team, setTeam ] = useState([
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
    ])

    const forward = () => {
        setTeam([...team.slice(1), team[0]])
    }

    const back = () => {
        setTeam([team[team.length - 1], ...team.slice(0, team.length - 1)])
    }

    const button = "h-14 w-14 border border-gray-200 flex justify-center items-center rounded-full hover:bg-gray-50"

    return (
        <Container>
            <SectionHeader preheading={sectionHeader.preheading} heading={sectionHeader.heading} subheading={sectionHeader.subheading} ctas={sectionHeader.ctas} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-8">
                {team.map((member, index) => (
                    <div key={index} className={"flex flex-col items-start" + (index < 4 ? "" : " hidden")}>
                        <div className="relative w-full h-full aspect-square overflow-hidden object-cover block">
                            <Image
                                src={member.image.url}
                                fill={true}
                                alt={member.image.alt}
                            />
                        </div>
                        <div className="flex flex-col items-start mt-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-primary-700 text-lg mb-4">{member.role}</p>
                            <p className="text-gray-600 font-normal text-base">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row flex-none space-x-4">
                <button onClick={() => back()} className={button}><ArrowLeftIcon className="w-6 h-6 text-gray-500"/></button>
                <button onClick={() => forward()} className={button}><ArrowRightIcon className="w-6 h-6 text-gray-500"/></button>
            </div>
        </Container>
    )
}

export default Team
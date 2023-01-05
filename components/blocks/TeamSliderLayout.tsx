"use client";

import Container from "../shared/Container"
import SectionHeader from "../shared/SectionHeader"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import TeamMemberCard from "../shared/TeamMemberCard";
import { Team, TeamSlider as TeamSliderType } from "../../payload-types";
import { useState } from "react";

export default function TeamSliderLayout({ block, data }: { block: TeamSliderType, data: Team[] }) {
    const [ team, setTeam ] = useState<Team[]>(data)

    const forward = () => {
        setTeam([...team.slice(1), team[0]])
    }

    const back = () => {
        setTeam([team[team.length - 1], ...team.slice(0, team.length - 1)])
    }

    const button = "h-14 w-14 border border-gray-200 flex justify-center items-center rounded-full hover:bg-gray-50"

    return (
        <Container>
            <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} ctas={block.ctas} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {team.map((member: any, index: any) => (
                    <div key={index} className={(index < 4 ? "" : " hidden")}>
                        <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
            {team.length > 4 && <div className="flex flex-row flex-none space-x-4">
                <button onClick={() => back()} className={button}><span className="sr-only">Backwards</span><ArrowLeftIcon className="w-6 h-6 text-gray-500"/></button>
                <button onClick={() => forward()} className={button}><span className="sr-only">Forwards</span><ArrowRightIcon className="w-6 h-6 text-gray-500"/></button>
            </div>}
        </Container>
    )
}
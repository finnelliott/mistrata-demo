import Container from "../shared/Container"
import TeamMemberCard from "../shared/TeamMemberCard";
import { Team, TeamGrid } from "../../payload-types";
import { use } from "react";

type Props = {
    block: TeamGrid
}

const TeamGrid: React.FC<Props> = () => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/team`).then(res => res.json()).then(data => data.docs as Team[]))

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {data.map((member, index) => (
                    <div key={index}>
                    <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default TeamGrid
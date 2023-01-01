import Container from "../shared/Container"
import TeamMemberCard from "../shared/TeamMemberCard";
import { TeamGrid } from "../../payload-types";

type Props = {
    block: TeamGrid
}

const TeamGrid: React.FC<Props> = ({ block }) => {

    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {block.team.map((member, index) => (
                    <div key={index}>
                    <TeamMemberCard member={member} index={index} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default TeamGrid
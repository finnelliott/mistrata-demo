import Container from "../shared/Container"
import TeamMemberCard from "../shared/TeamMemberCard";
import { Team, TeamGrid } from "../../payload-types";
import getPayloadClient from "../../payload/payloadClient";

type Props = {
    block: TeamGrid
}

const TeamGrid = async ({ block }: Props) => {

    const payload = await getPayloadClient();
    const team = await payload.find({
        collection: 'team',
    });

    const sortByIndexThenName = (a: Team, b: Team) => {
        if (a.index && b.index) {
            if (a.index === b.index) {
                return a.name.localeCompare(b.name)
            }
            return a.index - b.index
        }
        return a.name.localeCompare(b.name)
    }
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {team.sort((a: Team, b: Team) => sortByIndexThenName(a, b)).map((member: Team, index: number) => (
                    <div key={index}>
                    <TeamMemberCard member={member} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default TeamGrid
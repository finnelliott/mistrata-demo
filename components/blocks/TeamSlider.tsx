import { use } from "react";
import { Team, TeamSlider as TeamSliderType } from "../../payload-types";
import TeamSliderLayout from "./TeamSliderLayout";

type Props = {
    block: TeamSliderType
}

const TeamSlider: React.FC<Props> = ({ block }) => {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/team?limit=100`).then(res => res.json()).then(data => data.docs as Team[]))

    return (
        <div><TeamSliderLayout block={block} data={data} /></div>
    )
    
}

export default TeamSlider
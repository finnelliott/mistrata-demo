import { use } from "react";
import { Team, TeamSlider as TeamSliderType } from "../../payload-types";
import TeamSliderLayout from "./TeamSliderLayout";
import getPayloadClient from "../../payload/payloadClient";

type Props = {
    block: TeamSliderType
}

const TeamSlider = async ({ block }: Props) => {

    const payload = await getPayloadClient();
    const data = await payload.find({
        collection: 'team',
    });
    const team = data.docs;

    return (
        <div><TeamSliderLayout block={block} data={team} /></div>
    )
    
}

export default TeamSlider
import { use } from "react";
import { FAQs as FAQsType, Team } from "../../payload-types";
import FAQsLayout from "./FAQsLayout";
import getPayloadClient from "../../payload/payloadClient";

export default async function FAQs ({ block }: { block: FAQsType }) {
    const payload = await getPayloadClient();
    const data = await payload.find({
        collection: 'team',
    });
    const team = data.docs;

    return (
        <div><FAQsLayout block={block} data={team} /></div>
    )
}
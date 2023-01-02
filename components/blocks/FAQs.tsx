import { use } from "react";
import { FAQs as FAQsType, Team } from "../../payload-types";
import FAQsLayout from "./FAQsLayout";

export default function FAQs ({ block }: { block: FAQsType }) {

    const data = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/team`).then(res => res.json()).then(data => data.docs as Team[]))

    return (
        <div><FAQsLayout block={block} data={data} /></div>
    )
}
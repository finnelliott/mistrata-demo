import Link from "next/link";
import { Link as LinkType } from "../../payload-types";

type Props = {
    link: LinkType,
    children?: React.ReactNode,
}

const CMSLink:React.FC<Props> = ({ link, children }) => {
    if (link.type == "page" && link.page) {
        return <Link href={`/${typeof link.page !== "string" ? link.page.slug : link.page}`}>{children || link.label}</Link>
    } else if (link.type == "url") {
        return <a href={link.url} target="_blank" rel="noreferrer noopener">{children}</a>
    } else if (link.type == "phone_number") {
        return <a href={`tel:${link.phone_number}`}>{children}</a>
    } else {
        return <div>{JSON.stringify(link)}</div>
    }
}

export default CMSLink
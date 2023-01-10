import Link from "next/link";
import { Link as LinkType } from "../../payload-types";

type Props = {
    link: LinkType,
    children?: React.ReactNode,
}

const CMSLink:React.FC<Props> = ({ link, children }) => {
    if (link.type == "page" && link.page) {
        return <Link href={`/${typeof link.page !== "string" ? link.page.slug : link.page}`} className="">{children || link.label}</Link>
    } else if (link.type == "url") {
        return <a href={link.url} target="_blank" rel="noreferrer noopener" className="">{children}</a>
    } else if (link.type == "phone_number") {
        return <a href={`tel:${link.phone_number}`} className="">{children}</a>
    } else if (link.type == "email") {
        return <a href={`mailto:${link.email}`} className="">{children}</a>
    } else return null;
}

export default CMSLink
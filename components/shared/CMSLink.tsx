import Link from "next/link";

type Props = {
    link: {
        label?: string,
        url?: string,
        type?: string,
        page?: {
            slug: string
        }
    },
    children?: React.ReactNode,
    className?: string,
}

const CMSLink:React.FC<Props> = ({ link, children, className }) => {
    if (link.type == "page" && link.page) {
        return <Link href={`/${link.page.slug}`} className={className}>{children || link.label}</Link>
    } else if (link.type == "url") {
        return <a href={link.url} className={className} target="_blank" rel="noreferrer noopener">{children}</a>
    } else {
        return <div>Set up new link type</div>
    }
}

export default CMSLink
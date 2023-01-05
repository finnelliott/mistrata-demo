import { Blog, Business, Page } from "../../payload-types";

export default function PageHead({ page, business }: { page: Page | Blog, business: Business } ) {
    const title = encodeURIComponent(page.title ?? "")
    const description = encodeURIComponent(page.meta.description ?? "")
    const logo = process.env.NEXT_PUBLIC_CMS_URL+(business.logo.url ?? "")
    const name = encodeURIComponent(business.name ?? "")
    const favicon = process.env.NEXT_PUBLIC_CMS_URL+(business.favicon.url ?? "")

    const meta_image_query = `title=${title}&description=${description}&logo=${logo}&business=${name}`

    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{ page.meta.title }</title>
        <meta
            name="description"
            content={page.meta.description}
        />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.meta.title} />
        <meta name="twitter:description" content={page.meta.description} />

        {/* <-- Twitter Summary card images must be at least 120x120px --> */}
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?width=600&height=600&${meta_image_query}`} />

        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={page.meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={business.name} />
        <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?${meta_image_query}`}
        />
        <meta property="og:description" content={page.meta.description} />
        </>
    )
}
import { Blog, Business, Page, Treatment } from "../../payload-types";

export default function PageHead({ page, business }: { page?: Page | Blog | Treatment, business: Business } ) {
    const favicon = (process.env.VERCEL_URL && business.favicon.url) ? process.env.VERCEL_URL + business.favicon.url : null
    const logo = (process.env.VERCEL_URL && business.logo.url) ? process.env.VERCEL_URL + business.logo.url : null
    const name = encodeURIComponent(business.name ?? "")

    if (page) {
        const title = page.title ? encodeURIComponent(page.title ?? "") : ""
        const description = encodeURIComponent(page.meta.description ?? "")
    
        const meta_image_query = `title=${title}&description=${description}${logo && `&logo=${logo}`}&business=${name}`
    
        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            { page.meta.title ? <title>{ page.meta.title }</title> : <title>{ page.title } | {business.name}</title> }
            <meta
                name="description"
                content={page.meta.description}
            />
    
            {/* <!-- Favicon --> */}
            {favicon && <link rel="icon" type="image/png" sizes="16x16" href={favicon} />}
    
            {/* <!-- Twitter Card data --> */}
            <meta name="twitter:card" content="summary" />
            { page.meta.title && <meta name="twitter:title" content={page.meta.title} />}
            { page.meta.description && <meta name="twitter:description" content={page.meta.description} />}
    
            {/* <-- Twitter Summary card images must be at least 120x120px --> */}
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?width=600&height=600&${meta_image_query}`} />
    
            {/* <!-- Open Graph data --> */}
            {page.meta.title && <meta property="og:title" content={page.meta.title} />}
            <meta property="og:type" content="website" />
            {business.name && <meta property="og:site_name" content={business.name} />}
            <meta
                property="og:image"
                content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?${meta_image_query}`}
            />
            {page.meta.description && <meta property="og:description" content={page.meta.description} />}
            </>
        )
    } else {

        const meta_image_query = `${logo && `&logo=${logo}`}&business=${name}`

        return (
            <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{business.name}</title>
    
            {/* <!-- Favicon --> */}
            {favicon && <link rel="icon" type="image/png" sizes="16x16" href={favicon} />}
    
            {/* <!-- Twitter Card data --> */}
            <meta name="twitter:card" content="summary" />
    
            {/* <-- Twitter Summary card images must be at least 120x120px --> */}
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?width=600&height=600&${meta_image_query}`} />
    
            {/* <!-- Open Graph data --> */}
            <meta property="og:type" content="website" />
            {business.name && <meta property="og:site_name" content={business.name} />}
            <meta
                property="og:image"
                content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?${meta_image_query}`}
            />
            </>
        )
    }
    
}
import { use } from "react";
import { Blog, Business, Page } from "../../payload-types";

export default function PageHead({ page }: { page: Page | Blog } ) {
    const business = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json())) as Business

    const title = encodeURIComponent(page.title ?? "")
    const description = encodeURIComponent(page.meta.description ?? "")
    const logo = process.env.NEXT_PUBLIC_CMS_URL+encodeURIComponent(business.logo.url ?? "")
    const name = encodeURIComponent(business.name ?? "")
    const favicon = process.env.NEXT_PUBLIC_CMS_URL+encodeURIComponent(business.favicon.url ?? "")

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

        {/*Breadcrumb structured data */}
        {/* <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: breadcrumb_schema }} /> */}
        {/*Local business/dentist structured data */}
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `
        {
            "@context": "https://schema.org",
            "@type": "Dentist",
            "address": {
              "@type": "PostalAddress",
              ${business.address.city && `"addressLocality": "${business.address.city}",`}
              "addressRegion": "${business.address.state}",
              "streetAddress": "${business.address.line1}${business.address.line2 && `, ${business.address.line2}`}${business.address.line3 && `, ${business.address.line3}`}"
            },
            "description": "${business.description}",
            "name": "${business.name}",
            "telephone": "${business.phone}"
        }
        ` }} />
        </>
    )
}
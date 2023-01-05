import { use } from "react";
import { Blog, Page } from "../../payload-types";

export default function PageHead({ page }: { page: Page | Blog } ) {
    const business = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()))

    return (
        <>
        <title>{ page.meta.title }</title>
        <meta
            name="description"
            content={page.meta.description}
        />

        <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?title=${page.title}&description=${page.meta.description}&logo=${process.env.NEXT_PUBLIC_CMS_URL+business.logo.url}&business=${business.name}`}
        />

        {/* <!-- Favicon --> */}
        {/* <link rel="icon" type="image/png" href={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${business.favicon.filename}`} /> */}

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.meta.title} />
        <meta name="twitter:description" content={page.meta.description} />

        {/* <-- Twitter Summary card images must be at least 120x120px --> */}
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/api/og?width=600&height=600&title=${page.meta.title}&description=${page.meta.description}`} />

        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={page.meta.title} />
        <meta property="og:type" content="website" />

        {/* {page.meta.image?.filename && <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${page.meta.image.filename}`} />} */}
        <meta property="og:description" content={page.meta.description} />

        {/*Breadcrumb structured data */}
        {/* <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: breadcrumb_schema }} /> */}
        {/*Local business/dentist structured data */}
        {/* <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: business_schema }} /> */}
        </>
    )
}
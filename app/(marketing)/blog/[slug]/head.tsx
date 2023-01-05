import PageHead from "../../../../components/shared/PageHead"

export default async function Head({ params }: { params: { slug: string } }) {
    const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?where[slug][equals]=${params.slug.toString()}`).then((res) => res.json()).then((res) => res.docs[0])
    return (
        <>
        <PageHead page={page} />

        {/*BlogPosting structured data */}
        {/* {page.category?.slug === "blog" && <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `
                {
                "@context":"http://schema.org",
                "@type": "BlogPosting"
                ${page.meta.image.filename && `,"image": "https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${page.meta.image.filename}",`}
                "url": "${process.env.NEXT_PUBLIC_HOSTNAME}/${page.category.slug}/${page.slug}",
                "headline": "${page.title}",
                "dateCreated": "${page.createdAt}",
                "datePublished": "${page.createdAt}",
                "dateModified": "${page.updatedAt}",
                "inLanguage": "en-GB",
                "copyrightYear": "${new Date(page.createdAt).getFullYear()}",
                "copyrightHolder": "${business.name}"
                ${business.town_or_city && `,"contentLocation": {
                "@type": "Place",
                "name": "${business.town_or_city}"
                }`}
            }
        `}} />} */}

        </>
    )
}
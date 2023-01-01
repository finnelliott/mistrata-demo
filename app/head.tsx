export default function Head() {
  const page = {}
  return (
    // <>
    //   <title>{ page.meta.title }</title>
    //   <meta
    //     name="description"
    //     content={page.meta.description}
    //   />

    //   {/* <!-- Favicon --> */}
    //   <link rel="icon" type="image/png" href={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${business.favicon.filename}`} />

    //   {/* <!-- Twitter Card data --> */}
    //   <meta name="twitter:card" content="summary" />
    //   <meta name="twitter:title" content={page.meta.title} />
    //   <meta name="twitter:description" content={page.meta.description} />

    //   {/* <-- Twitter Summary card images must be at least 120x120px --> */}
    //   {page.meta.image?.filename && <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${page.meta.image.filename}`} />}

    //   {/* <!-- Open Graph data --> */}
    //   <meta property="og:title" content={page.meta.title} />
    //   <meta property="og:type" content="website" />

    //   {page.meta.image?.filename && <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${page.meta.image.filename}`} />}
    //   <meta property="og:description" content={page.meta.description} />
    //   <meta property="og:site_name" content={business.name} />

    //   {/*Breadcrumb structured data */}
    //   <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: breadcrumb_schema }} />
    //   {/*Local business/dentist structured data */}
    //   <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: business_schema }} />
    //   {/*BlogPosting structured data */}
    //   {page.category?.slug === "blog" && <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `
    //         {
    //         "@context":"http://schema.org",
    //         "@type": "BlogPosting"
    //         ${page.meta.image.filename && `,"image": "https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/images/${page.meta.image.filename}",`}
    //         "url": "${process.env.NEXT_PUBLIC_HOSTNAME}/${page.category.slug}/${page.slug}",
    //         "headline": "${page.title}",
    //         "dateCreated": "${page.createdAt}",
    //         "datePublished": "${page.createdAt}",
    //         "dateModified": "${page.updatedAt}",
    //         "inLanguage": "en-GB",
    //         "copyrightYear": "${new Date(page.createdAt).getFullYear()}",
    //         "copyrightHolder": "${business.name}"
    //         ${business.town_or_city && `,"contentLocation": {
    //           "@type": "Place",
    //           "name": "${business.town_or_city}"
    //         }`}
    //       }
    //   `}} />}
    //   </>
  <></>
    )
}



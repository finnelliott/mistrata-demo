export default async function Head() {
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json())
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:site_name" content={business.name} />
    </>
    )
}



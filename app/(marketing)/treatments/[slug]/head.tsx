import PageHead from "../../../../components/shared/PageHead"
import { Business } from "../../../../payload-types"

export default async function Head({ params }: { params: { slug: string } }) {
    const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?where[slug][equals]=${params.slug.toString()}`).then((res) => res.json()).then((res) => res.docs[0])
    const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business
    return (
      <>
      <PageHead page={page} business={business} />
      </>
    )
}
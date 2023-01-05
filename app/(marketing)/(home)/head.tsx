import PageHead from "../../../components/shared/PageHead"
import { Business } from "../../../payload-types"

export default async function Head() {
    const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"home"}`).then((res) => res.json()).then((res) => res.docs[0])
    const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business
    return (
      <>
      <PageHead page={page} business={business} />
      </>
    )
}
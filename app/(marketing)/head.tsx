import { use } from "react"
import PageHead from "../../components/shared/PageHead"
import getBusiness from "../../lib/getBusiness"
import { Business } from "../../payload-types"

export default function Head({ params }: { params: { slug: string } }) {
    const business = use(getBusiness())
    return (
      <>
      <PageHead business={business as Business} />
      </>
    )
}
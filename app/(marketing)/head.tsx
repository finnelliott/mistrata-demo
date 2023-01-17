import { notFound } from "next/navigation"
import { use } from "react"
import PageHead from "../../components/shared/PageHead"
import getBusiness from "../../lib/getBusiness"

export default function Head({ params }: { params: { slug: string } }) {
    const business = use(getBusiness())
    return (
      <>
      <PageHead business={business} />
      </>
    )
}
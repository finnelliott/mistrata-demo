import { notFound } from "next/navigation"
import { use } from "react"
import PageHead from "../../../../components/shared/PageHead"
import getBusiness from "../../../../lib/getBusiness"
import getTreatmentBySlug from "../../../../lib/getTreatmentBySlug"

export default function Head({ params }: { params: { slug: string } }) {
    const page = use(getTreatmentBySlug(params.slug))
    if (!page) {
      return null;
    }
    const business = use(getBusiness())
    return (
      <>
      <PageHead page={page} business={business} />
      </>
    )
}
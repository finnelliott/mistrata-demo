import { notFound } from "next/navigation"
import { use } from "react"
import PageHead from "../../../../components/shared/PageHead"
import getBlogPostBySlug from "../../../../lib/getBlogPostBySlug"
import getBusiness from "../../../../lib/getBusiness"

export default function Head({ params }: { params: { slug: string } }) {
    const page = use(getBlogPostBySlug(params.slug))
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
import { notFound } from "next/navigation"
import { use } from "react"
import PageHead from "../../../../components/shared/PageHead"
import getBlogPostBySlug from "../../../../lib/getBlogPostBySlug"
import getBusiness from "../../../../lib/getBusiness"
import { Business } from "../../../../payload-types"

export default function Head({ params }: { params: { slug: string } }) {
    const page = use(getBlogPostBySlug(params.slug.toLowerCase()))
    if (!page) {
      return null;
    }
    const business = use(getBusiness())
    return (
      <>
      <PageHead page={page} business={business as Business} />
      </>
    )
}
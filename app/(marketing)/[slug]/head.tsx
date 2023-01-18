import { use } from "react";
import PageHead from "../../../components/shared/PageHead"
import getBusiness from "../../../lib/getBusiness";
import getPageBySlug from "../../../lib/getPageBySlug";

export default function Head({ params }: { params: { slug: string } }) {
  const page = use(getPageBySlug(params.slug.toLowerCase()))
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
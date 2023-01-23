import { use } from "react";
import PageHead from "../../../components/shared/PageHead"
import getBusiness from "../../../lib/getBusiness";
import getPageBySlug from "../../../lib/getPageBySlug";
import { Business } from "../../../payload-types"

export default async function Head() {
  const page = use(getPageBySlug("home"))
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
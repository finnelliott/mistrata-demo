import BlockSerializer from "../../../components/shared/BlockSerializer";
import StructuredData from "../../../components/shared/StructuredData";
import { Business } from "../../../payload-types";
import { use } from "react";
import getBusiness from "../../../lib/getBusiness";
import getPageBySlug from "../../../lib/getPageBySlug";

export default async function Page() {
  const page = use(getPageBySlug("home"))
  if (!page) {
    return null;
  }
  const business = use(getBusiness())
  return (
    <>
      <BlockSerializer page={page as any} />
      <StructuredData business={business as Business} />
    </>
  )
}


import BlockSerializer from "../../../components/shared/BlockSerializer";
import StructuredData from "../../../components/shared/StructuredData";
import { Business } from "../../../payload-types";
import { use } from "react";
import getBusiness from "../../../lib/getBusiness";
import getPageBySlug from "../../../lib/getPageBySlug";

export default function Page() {
  const page = use(getPageBySlug("home"))
  if (!page) {
    return null;
  }
  return (
    <>
      <BlockSerializer page={page as any} />
    </>
  )
}


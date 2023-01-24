import BlockSerializer from "../../../components/shared/BlockSerializer";
import { use } from "react";
import getPageBySlug from "../../../lib/getPageBySlug";
import { notFound } from "next/navigation";

export default function Page() {
  const page = use(getPageBySlug("home"))
  if (!page) {
    return notFound()
  }
  if (!page.layout) {
    return notFound()
  }
  return (
    <>
      <BlockSerializer page={page as any} />
    </>
  )
}


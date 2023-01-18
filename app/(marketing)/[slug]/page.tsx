import { notFound } from "next/navigation";
import { use } from "react";
import BlockSerializer from "../../../components/shared/BlockSerializer";
import StructuredData from "../../../components/shared/StructuredData";
import getBusiness from "../../../lib/getBusiness";
import getPageBySlug from "../../../lib/getPageBySlug";
import getPages from "../../../lib/getPages";
import { Page as PageType } from "../../../payload-types";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page: PageType) => ({
    slug: page.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = use(getPageBySlug(params.slug))
  if (!page || !page.layout) {
    return notFound()
  }
  const business = use(getBusiness())
  return (
    <>
      <BlockSerializer page={page as any} />
      <StructuredData business={business} />
    </>
  )
}


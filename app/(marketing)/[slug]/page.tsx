import { notFound } from "next/navigation";
import BlockSerializer from "../../../components/shared/BlockSerializer";
import getPageBySlug from "../../../lib/getPageBySlug";
import getPages from "../../../lib/getPages";
import {Page as PageType } from "../../../payload-types";

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.filter((page: PageType) => page.slug !== "home").map((page: PageType) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug)
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


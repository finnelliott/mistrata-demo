import BlockSerializer from "../../../components/shared/BlockSerializer";
import StructuredData from "../../../components/shared/StructuredData";
import { Business, Page as PageType } from "../../../payload-types";

const getPages = async () => {
  const pages = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages`).then((res) => res.json()).then((res) => res.docs)
  return pages
}

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page: PageType) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}`).then((res) => res.json()).then((res) => res.docs[0])
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business

  return (
    <>
      <BlockSerializer page={page as any} />
      <StructuredData business={business} />
    </>
  )
}


import BlockSerializer from "../../../components/shared/BlockSerializer";
import { Page as PageType } from "../../../payload-types";

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

  return (
    <>
      <BlockSerializer page={page as any} />
    </>
  )
}


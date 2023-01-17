import BlockSerializer from "../../../../components/shared/BlockSerializer";
import BlogPost from "../../../../components/shared/BlogPost";
import StructuredData from "../../../../components/shared/StructuredData";
import { notFound } from "next/navigation"
import { Business, Treatment } from "../../../../payload-types";

const getTreatments = async () => {
  const treatments = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments`).then((res) => res.json()).then((res) => res.docs)
  return treatments
}

export async function generateStaticParams() {
  const treatments = await getTreatments();

  return treatments.filter((treatment: Treatment) => treatment.layout).map((treatment: Treatment) => (
    {
      slug: treatment.slug,
    }
  ));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const page = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?where[slug][equals]=${slug}`).then((res) => res.json()).then((res) => res.docs[0])
  if (!page.layout) {
    return notFound()
  }
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business

  return (
    <>
      <BlockSerializer page={page as any } />
      <StructuredData business={business} />
    </>
  )
}


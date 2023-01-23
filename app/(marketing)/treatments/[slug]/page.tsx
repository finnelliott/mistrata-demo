import BlockSerializer from "../../../../components/shared/BlockSerializer";
import StructuredData from "../../../../components/shared/StructuredData";
import { notFound } from "next/navigation"
import getTreatments from "../../../../lib/getTreatments";
import getBusiness from "../../../../lib/getBusiness";
import getTreatmentBySlug from "../../../../lib/getTreatmentBySlug";
import { use } from "react";
import { Business } from "../../../../payload-types";

export async function generateStaticParams() {
  const treatments = await getTreatments();
  return treatments?.filter((treatment) => treatment.layout).map((treatment) => (
    {
      slug: treatment.slug,
    }
  ));
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = use(getTreatmentBySlug(params.slug))
  if (!page) {
    return notFound()
  }
  if (!page.layout) {
    return notFound()
  }
  const business = use(getBusiness())

  return (
    <>
      <BlockSerializer page={page as any} />
      <StructuredData business={business as Business} />
    </>
  )
}
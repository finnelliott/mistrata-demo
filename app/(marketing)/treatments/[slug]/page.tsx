import BlockSerializer from "../../../../components/shared/BlockSerializer";
import StructuredData from "../../../../components/shared/StructuredData";
import { notFound } from "next/navigation"
import getTreatments from "../../../../lib/getTreatments";
import getBusiness from "../../../../lib/getBusiness";
import getTreatmentBySlug from "../../../../lib/getTreatmentBySlug";
import { use } from "react";
import { Business, Treatment } from "../../../../payload-types";

export async function generateStaticParams() {
  const treatments = await getTreatments();
  return treatments?.filter((treatment: Treatment) => treatment.layout).map((treatment: Treatment) => (
    {
      slug: treatment.slug,
    }
  ));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getTreatmentBySlug(params.slug)
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
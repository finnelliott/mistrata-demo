import BlockSerializer from "../../../../components/shared/BlockSerializer";
import { notFound } from "next/navigation"
import getTreatments from "../../../../lib/getTreatments";
import getTreatmentBySlug from "../../../../lib/getTreatmentBySlug";
import { Treatment } from "../../../../payload-types";

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
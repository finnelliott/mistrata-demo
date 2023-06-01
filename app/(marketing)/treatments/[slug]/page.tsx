import BlockSerializer from "../../../../components/shared/BlockSerializer";
import { notFound } from "next/navigation"
import getPayloadClient from "../../../../payload/payloadClient";

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'treatments',
    limit: 0,
  })

  return pages.docs.map(({ slug }: { slug: string }) => ({ slug }))
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'treatments',
    where: {
      slug: {
        equals: slug,
      },
    }
  });

  const page = pages.docs[0];

  if (!page) return notFound()
  return (
    <>
      <BlockSerializer page={page} />
    </>
  )
}
import React from 'react';
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../payload/payloadClient';
import BlockSerializer from '../../../components/shared/BlockSerializer';

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    }
  });

  const page = pages.docs[0];

  if (!page) return notFound()

  return (
    <BlockSerializer page={page} />
  )
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'pages',
    limit: 0,
  })

  return pages.docs.map(({ slug }: { slug: string }) => ({ slug }))
}

export default Page;
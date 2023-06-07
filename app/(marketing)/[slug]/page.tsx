import React from 'react';
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../../../payload/payloadClient';
import BlockSerializer from '../../../components/shared/BlockSerializer';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPage = async (slug: string) => {
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

  if (!page) return notFound();

  return page
}

export async function generateMetadata(
  { params, searchParams }: Props,
): Promise<Metadata> {
  const page = await getPage(params.slug);
 
  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const page = await getPage(slug);

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
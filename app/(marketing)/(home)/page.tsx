import BlockSerializer from "../../../components/shared/BlockSerializer";
import { notFound } from "next/navigation";
import getPayloadClient from "../../../payload/payloadClient";
import { Metadata } from 'next';

const getPage = async () => {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: "home",
      },
    }
  });

  const page = pages.docs[0];

  if (!page) return notFound();

  return page
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();
 
  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default async function Page() {
  const page = await getPage();

  return (
    <>
      <BlockSerializer page={page} />
    </>
  )
}


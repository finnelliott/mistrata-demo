import BlockSerializer from "../../../components/shared/BlockSerializer";
import { notFound } from "next/navigation";
import getPayloadClient from "../../../payload/payloadClient";

export default async function Page() {
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

  if (!page) return notFound()

  return (
    <>
      <BlockSerializer page={page} />
    </>
  )
}


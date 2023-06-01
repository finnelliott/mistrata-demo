import { notFound } from "next/navigation";
import BlogPost from "../../../../components/shared/BlogPost";
import getPayloadClient from "../../../../payload/payloadClient";

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'blog',
    limit: 0,
  })

  return pages.docs.map(({ slug }: { slug: string }) => ({ slug }))
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: 'blog',
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
      <BlogPost blog_post={page} />
    </>
  )
}
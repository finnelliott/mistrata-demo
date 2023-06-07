import { notFound } from "next/navigation";
import BlogPost from "../../../../components/shared/BlogPost";
import getPayloadClient from "../../../../payload/payloadClient";
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPage = async (slug: string) => {
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
    <>
      <BlogPost blog_post={page} />
    </>
  )
}

export default Page;
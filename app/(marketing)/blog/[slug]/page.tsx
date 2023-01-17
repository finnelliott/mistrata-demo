import { notFound } from "next/navigation";
import BlogPost from "../../../../components/shared/BlogPost";
import StructuredData from "../../../../components/shared/StructuredData";
import { Blog as BlogType, Business } from "../../../../payload-types";

const getBlogPosts = async () => {
  const blog_posts = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog`).then((res) => res.json()).then((res) => res.docs)
  return blog_posts
}

export async function generateStaticParams() {
  const blog_posts = await getBlogPosts();

  return blog_posts.map((blog: BlogType) => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const blog_post = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?where[slug][equals]=${slug}`).then((res) => res.json()).then((res) => res.docs[0])
  if (!blog_post.layout) {
    return notFound()
  }
  const business = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/globals/business`).then((res) => res.json()) as Business

  return (
    <>
      <BlogPost blog_post={blog_post} />
      <StructuredData business={business} />
    </>
  )
}


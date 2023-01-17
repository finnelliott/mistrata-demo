import { notFound } from "next/navigation";
import { use } from "react";
import BlogPost from "../../../../components/shared/BlogPost";
import StructuredData from "../../../../components/shared/StructuredData";
import getBlogPostBySlug from "../../../../lib/getBlogPostBySlug";
import getBlogPosts from "../../../../lib/getBlogPosts";
import getBusiness from "../../../../lib/getBusiness";

export async function generateStaticParams() {
  const blog_posts = await getBlogPosts();
  return blog_posts.map((blog) => (
    {
      slug: blog.slug,
    }
  ));
}

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const blog_post = use(getBlogPostBySlug(slug))
  if (!blog_post) {
    return notFound()
  }
  const business = use(getBusiness())

  return (
    <>
      <BlogPost blog_post={blog_post} />
      <StructuredData business={business} />
    </>
  )
}
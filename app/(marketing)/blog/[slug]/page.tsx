import { notFound } from "next/navigation";
import { use } from "react";
import BlogPost from "../../../../components/shared/BlogPost";
import StructuredData from "../../../../components/shared/StructuredData";
import getBlogPostBySlug from "../../../../lib/getBlogPostBySlug";
import getBlogPosts from "../../../../lib/getBlogPosts";
import getBusiness from "../../../../lib/getBusiness";
import { Blog, Business } from "../../../../payload-types";

export async function generateStaticParams() {
  const blog_posts = await getBlogPosts();
  return blog_posts.map((blog: Blog) => (
    {
      slug: blog.slug,
    }
  ));
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const blog_post = await getBlogPostBySlug(slug)
  if (!blog_post) {
    return notFound()
  }

  return (
    <>
      <BlogPost blog_post={blog_post} />
    </>
  )
}
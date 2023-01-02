import BlogPost from "../../../../components/shared/BlogPost";
import { Blog as BlogType } from "../../../../payload-types";

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

  return (
    <>
      <BlogPost blog_post={blog_post} />
    </>
  )
}


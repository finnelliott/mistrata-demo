import { use } from "react"
import { Blog, BlogPosts } from "../../payload-types";
import BlogPostsLayout from "./BlogPostsLayout";
import getPayloadClient from "../../payload/payloadClient";

type Props = {
  block: BlogPosts
}

const BlogPosts = async ({ block }: Props) => {

<<<<<<< HEAD
  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: 'blog',
    limit: 1000
  });
=======
  const posts = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?sort=-createdAt&limit=1000`).then(res => res.json()).then(data => data.docs as Blog[]))
>>>>>>> parent of 5f0fef2 (--)

  return (
      <BlogPostsLayout block={block} posts={posts} />
  )
}

export default BlogPosts
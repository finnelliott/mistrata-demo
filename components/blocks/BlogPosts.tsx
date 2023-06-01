import { use } from "react"
import { Blog, BlogPosts } from "../../payload-types";
import BlogPostsLayout from "./BlogPostsLayout";
import getPayloadClient from "../../payload/payloadClient";

type Props = {
  block: BlogPosts
}

const BlogPosts = async ({ block }: Props) => {

  const payload = await getPayloadClient();

  const { docs: posts } = await payload.find({
    collection: 'blog',
    limit: 1000
  });

  return (
      <BlogPostsLayout block={block} posts={posts} />
  )
}

export default BlogPosts
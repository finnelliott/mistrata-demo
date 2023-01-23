import { use } from "react"
import { Blog, BlogPosts } from "../../payload-types";
import BlogPostsLayout from "./BlogPostsLayout";

type Props = {
  block: BlogPosts
}

const BlogPosts: React.FC<Props> = ({ block }) => {

  const posts = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?sort=-createdAt&limit=1000`).then(res => res.json()).then(data => data.docs as Blog[]))

  return (
      <BlogPostsLayout block={block} posts={posts} />
  )
}

export default BlogPosts
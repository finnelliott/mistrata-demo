import { Blog } from "../payload-types"

const getBlogPostBySlug = async (slug: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?where[slug][equals]=${slug}`).then((res) => res.json())
    if (data.docs.length == 0) {
      return undefined
    } else {
      return data.docs[0] as Blog
    }
  } catch (err: any) {
    console.log(err.message)
    return undefined;
  }
    
}

export default getBlogPostBySlug
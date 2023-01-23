const getBlogPostBySlug = async (slug: string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?where[slug][equals]=${slug}`).then((res) => res.json())
  return data.docs[0]
}

export default getBlogPostBySlug
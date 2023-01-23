const getPageBySlug = async (slug: string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}`).then((res) => res.json())
  return data.docs[0]
}

export default getPageBySlug
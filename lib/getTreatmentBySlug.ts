const getTreatmentBySlug = async (slug: string) => {
  console.log(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?where[slug][equals]=${slug.toString()}`)
  const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?where[slug][equals]=${slug.toString()}`).then((res) => res.json())
  return data.docs[0]
}

export default getTreatmentBySlug
import { Treatment } from "../payload-types"

const getTreatmentBySlug = async (slug: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/treatments?where[slug][equals]=${slug}`).then((res) => res.json())
    if (data.docs.length == 0) {
      return undefined
    } else {
      return data.docs[0] as Treatment
    }
  } catch (err: any) {
    console.log(err.message)
    return undefined;
  }
}

export default getTreatmentBySlug
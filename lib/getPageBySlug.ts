import { Page } from "../payload-types"

const getPageBySlug = async (slug: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}`).then((res) => {console.log(res); return res}).then((res) => res.json())
    if (data.docs.length == 0) {
      return undefined
    } else {
      return data.docs[0] as Page
    }
  } catch (err: any) {
    console.log(err.message)
    return undefined;
  }
}

export default getPageBySlug
import { Page } from "../payload-types"

const getPages = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?limit=100`).then((res) => res.json())
    return data.docs as Page[]
}

export default getPages
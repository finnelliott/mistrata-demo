import { Blog } from "../payload-types"

const getBlogPosts = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog`).then((res) => res.json())
    return data.docs as Blog[]
}

export default getBlogPosts
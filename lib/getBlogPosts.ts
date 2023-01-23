import { Blog } from "../payload-types"

const getBlogPosts = async () => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/blog?limit=1000`).then((res) => {console.log(res); return res}).then((res) => res.json())
        return data.docs as Blog[]
    } catch (err: any) {
        console.log(err.message)
        return undefined;
    }
}

export default getBlogPosts
import { Blog } from "../../payload-types";

export default function BlogPost({ blog_post }: { blog_post: Blog }) {
    return (
        <div>{JSON.stringify(blog_post)}</div>
    )
}
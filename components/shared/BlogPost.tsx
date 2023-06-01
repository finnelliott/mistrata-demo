import Image from "next/image";
import serialize from "../shared/RichTextSerializer";
import { Blog } from "../../payload-types";
import Container from "./Container";

export default function BlogPost({ blog_post }: { blog_post: Blog }) {
    const content = serialize(blog_post.content)
    return (
        <>
        <Container>
        <div className="pt-16 h-full w-full items-center flex flex-col justify-between duration-200">
              <div className="w-full text-center pb-8">
              <div className="flex w-full justify-center items-center space-x-1 text-sm text-gray-500 text-center mb-4">
                    <time dateTime={blog_post.createdAt}>{new Date(blog_post.createdAt).toDateString()}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{blog_post.reading_time}{` `}min read</span>
              </div>
              <h1 className="text-5xl font-semibold mb-4">{blog_post.title}</h1>
              <p className="text-gray-500 text-lg mb-6">{blog_post.excerpt}</p>
              <div className="flex items-center space-x-4 w-full justify-center">
                    <div className="flex-shrink-0 relative aspect-square w-10">
                        <Image
                            className="rounded-full object-cover"
                            src={process.env.VERCEL_URL + (blog_post.author.image.url as string)}
                            alt={blog_post.author.image.alt}
                            fill={true}
                            sizes="40px"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-medium text-gray-900 text-center">
                            {blog_post.author.name}
                        </p>
                        
                    </div>
              </div>
              </div>
              <div className="relative block aspect-video w-full max-w-4xl mx-auto">
                  <Image
                      src={process.env.VERCEL_URL + (blog_post.image.url as string)}
                      alt={blog_post.image.alt}
                      fill={true}
                      className="object-cover"
                      sizes="100vw"
                  />
              </div>
        </div>
        <div className="pt-12 max-w-prose prose prose-gray mx-auto w-full">{content}</div>
        </Container>
        </>
    )
}
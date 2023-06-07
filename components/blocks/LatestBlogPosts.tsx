import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../shared/SectionHeader"
import Container from "../shared/Container"
import { Blog, LatestBlogPosts } from "../../payload-types"
import getPayloadClient from "../../payload/payloadClient"

type Props = {
  block: LatestBlogPosts
}

const LatestBlogPosts = async ({ block }: Props) => {

  const payload = await getPayloadClient();
  const data = await payload.find({
    collection: 'blog',
    limit: 3,
  });
  const blogs = data.docs;

  return (
      <Container>
          <SectionHeader preheading={block.preheading} heading={block.heading} subheading={block.subheading} ctas={block.ctas} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post: Blog) => (
                  <Link href={`/blog/${post.slug}`} key={post.title} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200">
                      <div>
                      <div className="relative mb-8 aspect-video">
                          <Image
                              src={(post.image.url as string)}
                              alt={post.image.alt}
                              fill={true}
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{post.title}</h3>
                      <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center">
                          <div className="flex-shrink-0 relative aspect-square w-10">
                              <Image
                                  className="rounded-full object-cover"
                                  src={(post.author.image.url as string)}
                                  alt={post.author.image.alt}
                                  fill={true}
                                  sizes="40px"
                              />
                          </div>
                          <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                  {post.author.name}
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-500">
                                  <time dateTime={post.createdAt}>{new Date(post.createdAt).toDateString()}</time>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>{post.reading_time}{` `}min read</span>
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
      </Container>
  )
}

export default LatestBlogPosts
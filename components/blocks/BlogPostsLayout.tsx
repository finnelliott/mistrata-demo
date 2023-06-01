"use client";

import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Container from "../shared/Container"
import { Blog, BlogPosts } from "../../payload-types";

type Props = {
  block: BlogPosts,
  posts: Blog[]
}

const BlogPostsLayout: React.FC<Props> = ({ block, posts }) => {

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  const [ pageIndex, setPageIndex ] = useState(0)

  return (
      <Container>
        <>
          <Link href={`/blog/${posts[pageIndex*7].slug}`} key={posts[pageIndex*7].title} className="h-full grid grid-cols-1 lg:grid-cols-3 hover:scale-[99%] transform duration-200 pb-16 gap-8">
              <div className="col-span-1">
              <div className="relative block aspect-video">
                  <Image
                      src={process.env.NEXT_PUBLIC_VERCEL_URL + (posts[pageIndex*7].image.url as string)}
                      alt={posts[pageIndex*7].image.alt}
                      fill={true}
                      className="object-cover"
                      sizes="100vw"
                  />
              </div>
              </div>
              <div className="flex flex-col items-start col-span-1 h-full justify-center lg:col-span-2">
                  <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{posts[pageIndex*7].title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{posts[pageIndex*7].excerpt}</p>
                  <div className="flex items-center">
                  <div className="flex-shrink-0 relative aspect-square w-10">
                      <Image
                          className="rounded-full object-cover"
                          src={process.env.NEXT_PUBLIC_VERCEL_URL + (posts[pageIndex*7].author.image.url as string)}
                          alt={posts[pageIndex*7].author.image.alt}
                          fill={true}
                          sizes="40px"
                      />
                  </div>
                  <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                          {posts[pageIndex*7].author.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={posts[pageIndex*7].createdAt}>{new Date(posts[pageIndex*7].createdAt).toDateString()}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{posts[pageIndex*7].reading_time}{` `}min read</span>
                      </div>
                  </div>
                  </div>
              </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.slice(pageIndex*7+1, pageIndex*7+7).map((post, index) => (
              <div key={index} className="w-full h-full">
                <Link href={`/blog/${posts[pageIndex*7].slug}`} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200">
                <div>
                <div className="relative mb-8 aspect-video">
                    <Image
                        src={process.env.NEXT_PUBLIC_VERCEL_URL + (post.image.url as string)}
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
                    <div className="flex-shrink-0 relative object-cover aspect-square w-10">
                        <Image
                            className="rounded-full"
                            src={process.env.NEXT_PUBLIC_VERCEL_URL + (post.author.image.url as string)}
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
              </div>
            ))}
          </div>
          <nav className="flex items-center justify-between border-t border-gray-200 px-0 mt-16">
            <div className="-mt-px flex w-0 flex-1">
              {pageIndex > 0 && <button
                onClick={() => setPageIndex(pageIndex - 1)}
                className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
              </button>}
            </div>
            <div className="hidden md:-mt-px md:flex">
              {
                Math.ceil(posts.length) > 5 ? 
                  Array(Math.ceil(posts.length / 7)).fill(0).map((_, index) => {
                  if (index < 2) {
                    return <button
                      key={index}
                      onClick={() => setPageIndex(index)}
                      className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                    >
                        {index + 1}
                    </button>
                  } else if (index == 2) {
                    return <span key={index} className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                      ...
                    </span>
                  } else if (index >= Math.ceil(posts.length / 7) - 2) {
                    return <button
                      key={index}
                      onClick={() => setPageIndex(index)}
                      className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                    >
                        {index + 1}
                    </button>
                  }
                }) 
                :
                  Array(Math.ceil(posts.length / 7)).fill(0).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPageIndex(index)}
                    className={classNames(pageIndex == index ? "border-primary-500 text-primary-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300", "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium")}
                  >
                    {index + 1}
                  </button>))
              }
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
              {posts.length / 7 >= pageIndex + 1 && <button
                onClick={() => setPageIndex(pageIndex + 1)}
                className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Next
                <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </button>}
            </div>
          </nav>
        </>
      </Container>
  )
}

export default BlogPostsLayout
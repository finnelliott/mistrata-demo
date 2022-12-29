import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../shared/SectionHeader"
import Container from "./Container"

const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      image: {
        url: 
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        alt: 'Video thumbnail',
      },
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        image: {
            url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'Daniela Metz',
        },
      },
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      image: {
        url: 
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        alt: 'Video thumbnail',
      },
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        image: {
            url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'Daniela Metz',
        },
      },
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      image: {
        url: 
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        alt: 'Video thumbnail',
      },
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        image: {
            url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'Daniela Metz',
        },
          
      },
    },
]

const BlogPosts = () => {

    const sectionHeader = {
        preheading: "Our team",
        heading: "Meet the people behind the scenes",
        subheading: "We are a team of passionate people who love to create amazing products.",
        ctas: [
            {
                link: {
                    label: "View all posts",
                    type: "page",
                    page: {
                        slug: "blog"
                    }
                }
            },
        ]
    }

    return (
        <Container>
            <SectionHeader preheading={sectionHeader.preheading} heading={sectionHeader.heading} subheading={sectionHeader.subheading} ctas={sectionHeader.ctas} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link href={post.href} key={post.title} className="h-full flex flex-col justify-between hover:scale-[99%] transform duration-200">
                        <div>
                        <div className="relative mb-8 object-cover aspect-video">
                            <Image
                                src={post.image.url}
                                alt={post.image.alt}
                                fill={true}
                            />
                        </div>
                        <div className="mb-3 text-sm font-semibold text-teal-700">{post.category.name}</div>
                        <h3 className="text-2xl font-semibold mb-2 line-clamp-2 text-ellipsis">{post.title}</h3>
                        <p className="text-gray-500 mb-6 line-clamp-3 text-ellipsis">{post.description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 relative object-cover aspect-square w-10">
                                <Image
                                    className="rounded-full"
                                    src={post.author.image.url}
                                    alt={post.author.image.alt}
                                    fill={true}
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    {post.author.name}
                                </p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <time dateTime={post.datetime}>{post.date}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{post.readingTime} read</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    )
}

export default BlogPosts
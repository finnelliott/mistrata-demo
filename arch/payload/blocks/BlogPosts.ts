import { Block } from 'payload/types';

const BlogPosts: Block = {
  slug: 'blog-posts',
  imageURL: '/components/blog-posts.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Blog Posts',
    plural: 'Blog Posts',
  },
  fields: [
  ]
};

export default BlogPosts;
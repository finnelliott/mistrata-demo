import { Block } from 'payload/types';
import LinkBlock from './Link';

const LatestBlogPosts: Block = {
  slug: 'latest-blog-posts',
  imageURL: '/components/latest-blog-posts.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Latest Blog Posts',
    plural: 'Latest Blog Posts',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Our blog"
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "Latest blog posts"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "We regularly post new content to our blog."
    },
    {
        name: 'ctas',
        label: {
          singular: 'CTA',
          plural: 'CTAs',
        },
        type: 'blocks',
        minRows: 0,
        maxRows: 2,
        blocks: [
          LinkBlock
        ]
    }
  ]
};

export default LatestBlogPosts;
import { Block } from 'payload/types';
import LinkBlock from './Link';

const PageHeaderBlock: Block = {
  slug: 'page-header',
  imageURL: '/components/page-header.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Page Header',
    plural: 'Page Headers',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
    },
    {
        name: 'subheading',
        type: 'text',
    },
    {
        name: 'ctas',
        type: 'blocks',
        label: {
          singular: 'CTA',
          plural: 'CTAs',
        },
        minRows: 0,
        maxRows: 2,
        blocks: [
          LinkBlock
        ]
    }
  ]
};

export default PageHeaderBlock;
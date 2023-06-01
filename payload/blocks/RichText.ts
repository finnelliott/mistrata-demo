import { Block } from 'payload/types';

const RichTextBlock: Block = {
  slug: 'rich-text',
  imageURL: '/components/rich-text.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text Blocks',
  },
  fields: [
    {
        name: 'content',
        type: 'richText',
        required: true,
    },
  ]
};

export default RichTextBlock;
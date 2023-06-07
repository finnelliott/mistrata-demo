import { Block } from 'payload/types';
import LinkBlock from './Link';

const HeroBlock: Block = {
  slug: 'hero',
  imageURL: '/components/hero.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Hero',
    plural: 'Hero Blocks',
  },
  fields: [
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "Improve your dental health with first-class care"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "We're a dental practice dedicated to providing our patients with a friendly, high-quality service"
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
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
  ]
};

export default HeroBlock;
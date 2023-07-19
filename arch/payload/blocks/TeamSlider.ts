import { Block } from 'payload/types';
import LinkBlock from './Link';

const TeamSliderBlock: Block = {
  slug: 'team-slider',
  imageURL: '/components/team-slider.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Team Slider',
    plural: 'Team Sliders',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Our team"
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "A friendly team of dental professionals"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "Our team are dedicated to providing our patients with a friendly, high-quality service."
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

export default TeamSliderBlock;
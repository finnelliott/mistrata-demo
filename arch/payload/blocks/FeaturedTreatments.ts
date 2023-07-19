import { Block } from 'payload/types';
import LinkBlock from './Link';

const FeaturedTreatments: Block = {
  slug: 'featured-treatments',
  imageURL: '/components/featured-treatments.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Featured Treatments',
    plural: 'Featured Treatments',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Featured treatments"
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "High quality cosmetic dentistry"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "Our practice provides a full range of treatments, however we specialise in providing the best available cosmetic dental treatments."
    },
    {
        name: 'ctas',
        label: {
          singular: 'CTA',
          plural: 'CTAs',
        },
        type: 'blocks',
        minRows: 0,
        maxRows: 1,
        blocks: [
          LinkBlock
        ]
    },
    {
      name: "featured_treatments",
      type: "array",
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: 'Featured treatment',
        plural: 'Featured treatments',
      },
      fields: [
        {
          name: "treatment",
          type: "relationship",
          relationTo: "treatments",
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
      ]
    }
  ]
};

export default FeaturedTreatments;
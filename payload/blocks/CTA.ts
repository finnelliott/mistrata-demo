import { Block } from 'payload/types';
import LinkBlock from './Link';

const CTABlock: Block = {
  slug: 'cta',
  imageURL: '/components/cta.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'CTA',
    plural: 'CTAs',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Get started"
    },
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
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
        name: 'testimonials',
        type: 'array',
        label: 'Testimonials',
        minRows: 2,
        maxRows: 5,
        labels: {
          singular: 'Testimonial',
          plural: 'Testimonials',
        },
        fields: [
          {
            name: 'rating',
            type: 'number',
            required: true,
            defaultValue: 5
          },
          {
            name: 'quote',
            type: 'text',
            defaultValue: "The treatment was truly first-class. My dentist was friendly and ensured I was comfortable throughout.",
            required: true
          },
          {
            name: 'name',
            type: 'text',
            defaultValue: 'John Doe',
            required: true
          },
          {
            name: 'caption',
            type: 'text',
            defaultValue: 'New patient',
            required: true
          }
        ]
    }
  ]
};

export default CTABlock;
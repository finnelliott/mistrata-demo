import { Block } from 'payload/types';

const TestimonialBlock: Block = {
  slug: 'testimonial',
  imageURL: '/components/testimonial.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
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

export default TestimonialBlock;
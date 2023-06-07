import { Block } from 'payload/types';

const TestimonialSliderBlock: Block = {
  slug: 'testimonial-slider',
  imageURL: '/components/testimonial-slider.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Testimonial Slider',
    plural: 'Testimonial Sliders',
  },
  fields: [
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

export default TestimonialSliderBlock;
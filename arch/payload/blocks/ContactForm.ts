import { Block } from 'payload/types';

const ContactFormBlock: Block = {
  slug: 'contact-form',
  imageURL: '/components/contact-form.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "Send us an email"
    },
    {
        name: 'heading',
        type: 'text',
        required: true,
        defaultValue: "Get in touch"
    },
    {
        name: 'subheading',
        type: 'text',
        defaultValue: "We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible."
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

export default ContactFormBlock;
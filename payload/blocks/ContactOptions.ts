import { Block } from 'payload/types';
import LinkBlock from './Link';

const ContactOptionsBlock: Block = {
  slug: 'contact-options',
  imageURL: '/components/contact-options.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Contact Options',
    plural: 'Contact Options',
  },
  fields: [
    {
      name: 'options',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Contact option',
        plural: 'Contact options',
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          hasMany: false,
          required: true,
          admin: {
            isClearable: true,
          },
          options: [
            {
              label: 'Thumbs Up',
              value: 'Thumbs Up',
            },
            {
              label: 'Plus',
              value: 'Plus',
            },
            {
              label: 'Star',
              value: 'Star',
            },
            {
              label: 'Chat Bubble',
              value: "Chat Bubble",
            },
            {
              label: 'Phone',
              value: 'Phone',
            },
            {
              label: 'Person',
              value: 'Person',
            },
            {
              label: 'Map Pin',
              value: 'Map Pin',
            },
            {
              label: 'Smiley Face',
              value: 'Smiley Face',
            },
            {
              label: 'Sad Face',
              value: 'Sad Face',
            },
            {
              label: 'Arrow Right',
              value: 'Arrow Right',
            },
            {
              label: 'Arrow Left',
              value: 'Arrow Left',
            },
            {
              label: 'Arrow Up',
              value: 'Arrow Up',
            },
            {
              label: 'Arrow Down',
              value: 'Arrow Down',
            },
            {
              label: 'Chevron Right',
              value: 'Chevron Right', 
            },
            {
              label: 'Chevron Left',
              value: 'Chevron Left',
            },
            {
              label: 'Chevron Up',
              value: 'Chevron Up',
            },
            {
              label: 'Chevron Down',
              value: 'Chevron Down',
            },
            {
              label: 'Building',
              value: 'Building',
            },
            {
              label: 'Calendar',
              value: 'Calendar',
            },
            {
              label: 'Credit Card',
              value: 'Credit Card',
            },
            {
              label: 'Envelope',
              value: 'Envelope',
            },
            {
              label: 'Document',
              value: 'Document',
            },
            {
              label: 'Globe',
              value: 'Globe',
            },
            {
              label: 'Fire',
              value: 'Fire',
            },
            {
              label: 'Heart',
              value: 'Heart',
            },
            {
              label: 'Link',
              value: 'Link',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: "Call us"
        },
        {
          name: 'subheading',
          type: 'text',
          defaultValue: "Speak with our friendly team."
        },
        {
          name: 'cta',
          type: 'blocks',
          required: true,
          minRows: 1,
          maxRows: 1,
          blocks: [
            LinkBlock
          ],
        }
      ]
    }
  ]
};

export default ContactOptionsBlock;
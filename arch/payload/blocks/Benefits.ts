import { Block } from 'payload/types';

const BenefitsBlock: Block = {
  slug: 'benefits',
  imageURL: '/components/benefits.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Benefits',
    plural: 'Benefits',
  },
  fields: [
    {
      name: 'benefits',
      type: 'array',
      minRows: 2,
      maxRows: 3,
      labels: {
        singular: 'Benefit',
        plural: 'Benefits',
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
          name: 'benefit',
          type: 'text',
          required: true,
          defaultValue: "Quality dental care"
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: "Our experienced team deliver the highest quality of care to our patients. As a result, they enjoy life with the dental health they deserve."
        }
      ]
    }
  ]
};

export default BenefitsBlock;
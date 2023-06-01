import { Block } from 'payload/types';
import LinkBlock from './Link';

const OpenPositionsBlock: Block = {
  slug: 'open-positions',
  imageURL: '/components/open-positions.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Open Positions',
    plural: 'Open Positions',
  },
  fields: [
    {
      name: 'preheading',
      type: 'text',
      required: false,
      defaultValue: "Open positions"
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: "Join our friendly team"
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: "We are always looking for new talent to join our team. If you are interested in joining us, please get in touch."
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
    {
        name: 'positions',
        type: 'array',
        label: 'Positions',
        minRows: 0,
        maxRows: 20,
        labels: {
          singular: 'Position',
          plural: 'Positions',
        },
        fields: [
          {
            name: 'title',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            type: 'textarea',
            required: true,
          },
          {
            name: 'type',
            type: 'select',
            required: true,
            options: [
              {
                label: 'Full-time',
                value: 'full-time'
              },
              {
                label: 'Part-time',
                value: 'part-time'
              },
              {
                label: 'Contract',
                value: 'contract'
              },
              {
                label: 'Internship',
                value: 'internship'
              },
            ],
          },
          {
            name: 'location',
            type: 'text',
            required: true,
          },
          {
            name: 'close_date',
            type: 'date',
            label: 'Close date',
            defaultValue: new Date().toISOString(),
            admin: {
              date: {
                // All config options above should be placed here
                pickerAppearance: 'dayOnly',
              }
            }
          }
        ]
    }
  ]
};

export default OpenPositionsBlock;
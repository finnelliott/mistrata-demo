import { Block } from 'payload/types';
import LinkBlock from './Link';

const PlanPricingBlock: Block = {
  slug: 'plan-pricing',
  imageURL: '/components/plan-pricing.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Plan Pricing',
    plural: 'Plan Pricings',
  },
  fields: [
    {
      name: 'preheading',
      type: 'text',
      required: false,
      defaultValue: "Dental subscription"
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: "Affordable dental care for everyone",
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: "Our dental subscription plans are designed to make dental care affordable for everyone. With everything you need to keep your dental health in check."
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits',
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
          type: 'text',
          defaultValue: "Our experienced team deliver the highest quality of care to our patients. As a result, they enjoy life with the dental health they deserve."
        }
      ]
    },
    {
      name: 'plan',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          label: 'Monthly price',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 2,
          maxRows: 10,
          labels: {
            singular: 'Feature',
            plural: 'Features',
          },
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              defaultValue: "2 hygienist vists per year"
            },
          ]
        },
        {
          name: 'ctas',
          type: 'blocks',
          label: {
            singular: 'CTA',
            plural: 'CTAs',
          },
          minRows: 0,
          maxRows: 1,
          blocks: [
            LinkBlock
          ]
        },
      ]
    }
  ]
};

export default PlanPricingBlock;
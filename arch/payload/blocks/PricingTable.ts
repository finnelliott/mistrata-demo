import { Block } from 'payload/types';

const PricingTableBlock: Block = {
  slug: 'pricing-table',
  imageURL: '/components/pricing-table.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'Pricing Table',
    plural: 'Pricing Tables',
  },
  fields: [
    {
      name: "preheading",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "subheading",
      type: "text",
    },
    {
      name: "treatments",
      type: "relationship",
      relationTo: "treatments",
      hasMany: true,
      required: true,
    },
  ]
};

export default PricingTableBlock;
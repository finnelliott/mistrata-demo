import { Block } from 'payload/types';
import LinkBlock from './Link';

const FAQsBlock: Block = {
  slug: 'faqs',
  imageURL: '/components/faqs.png',
  imageAltText: 'A thumbnail image showing what this block looks like',
  labels: {
    singular: 'FAQs',
    plural: 'FAQs',
  },
  fields: [
    {
        name: 'preheading',
        type: 'text',
        required: false,
        defaultValue: "FAQs"
    },
    {
        name: 'heading',
        type: 'text',
        required: false,
        defaultValue: "Frequently asked questions"
    },
    {
        name: 'subheading',
        type: 'text',
        required: false,
        defaultValue: "Here are some common questions we get asked. If you have any other questions, please don't hesitate to get in touch."
    },
    {
        name: 'faqs',
        type: 'array',
        minRows: 1,
        maxRows: 8,
        labels: {
          singular: 'FAQ',
          plural: 'FAQs',
        },
        fields: [
          {
            name: 'question',
            type: 'text',
            required: true,
          },
          {
            name: 'answer',
            type: 'richText',
            required: true,
          }
        ]
    },
    {
        name: 'cta',
        label: 'CTA',
        type: 'group',
        fields: [
          {
            name: 'heading',
            type: 'text',
            defaultValue: 'Still have questions?',
            required: false,
          },
          {
            name: 'subheading',
            type: 'text',
            defaultValue: "Can't find the answer you're looking for? Please chat to our friendly team.",
            required: false,
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
          }
        ]
    }
  ]
};

export default FAQsBlock;
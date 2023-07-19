import { CollectionConfig } from 'payload/types';
import BenefitsBlock from '../blocks/Benefits';
import FAQsBlock from '../blocks/FAQs';
import PageHeaderBlock from '../blocks/PageHeader';
import RichTextBlock from '../blocks/RichText';
import TestimonialBlock from '../blocks/Testimonial';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Treatments: CollectionConfig = {
  slug: 'treatments',
  labels: {
    singular: 'Treatment',
    plural: 'Treatments'
  },
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'title',
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
        name: 'slug',
        type: 'text',
        required: false,
        admin: {
          hidden: true
        },
        hooks: {
          beforeValidate: [
            ({ data, siblingData }) => {
              return siblingData.title.toLowerCase().replace(/ /g, '-')
            }
          ],
        },
    },
    {
        name: 'price',
        type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Preventative',
          value: 'preventative',
        },
        {
          label: 'Restorative',
          value: 'restorative',
        },
        {
          label: 'Cosmetic',
          value: 'cosmetic',
        },
        {
          label: 'Orthodontics',
          value: 'orthodontics',
        },
      ]
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 0,
      maxRows: 20,
      blocks: [
        PageHeaderBlock,
        RichTextBlock,
        BenefitsBlock,
        TestimonialBlock,
        // CTA Block 2
        FAQsBlock
      ]
    }
  ],
  hooks: {
    afterChange: [(args) => {
      if (!process.env.PUSH_DEPLOY_URL) return;
      fetch(process.env.PUSH_DEPLOY_URL)
    }]
  }
}

export default Treatments;
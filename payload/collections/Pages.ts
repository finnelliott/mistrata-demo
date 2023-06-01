import { CollectionConfig, CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload/types';
import BenefitsBlock from '../blocks/Benefits';
import BlogPosts from '../blocks/BlogPosts';
import ContactFormBlock from '../blocks/ContactForm';
import ContactOptionsBlock from '../blocks/ContactOptions';
import CTABlock from '../blocks/CTA';
import FAQsBlock from '../blocks/FAQs';
import HeroBlock from '../blocks/Hero';
import LatestBlogPosts from '../blocks/LatestBlogPosts';
import LocationsBlock from '../blocks/Locations';
import OpenPositionsBlock from '../blocks/OpenPositions';
import PageHeaderBlock from '../blocks/PageHeader';
import PlanPricingBlock from '../blocks/PlanPricing';
import PricingTableBlock from '../blocks/PricingTable';
import RichTextBlock from '../blocks/RichText';
import TeamGridBlock from '../blocks/TeamGrid';
import TeamSliderBlock from '../blocks/TeamSlider';
import TestimonialBlock from '../blocks/Testimonial';
import TestimonialSliderBlock from '../blocks/TestimonialSlider';
import FeaturedTreatments from '../blocks/FeaturedTreatments';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'layout',
      type: 'blocks',
      minRows: 0,
      maxRows: 20,
      blocks: [
        HeroBlock,
        BenefitsBlock,
        TestimonialSliderBlock,
        TeamSliderBlock,
        CTABlock,
        FAQsBlock,
        PageHeaderBlock,
        RichTextBlock,
        TestimonialBlock,
        LocationsBlock,
        TeamGridBlock,
        OpenPositionsBlock,
        PlanPricingBlock,
        PricingTableBlock,
        ContactOptionsBlock,
        ContactFormBlock,
        LatestBlogPosts,
        BlogPosts,
        FeaturedTreatments
      ]
    }
  ],
  hooks: {
    afterChange: [
    () => {
      if (!process.env.PUSH_DEPLOY_URL) return;
      fetch(process.env.PUSH_DEPLOY_URL)
    }
    ] as CollectionAfterChangeHook[],
    // beforeChange: [
    //   async ({ data }) => {
    //     if (!data.meta.title && typeof data.title === 'string' && data.title.length > 0) {
    //       console.log("Fetching business name from public server")
    //       const business = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/business`).then((res) => res.json())
    //       if (business.name) {
    //         return {...data, meta: { title: `${data.title} | ${business.name}` }};
    //       } else {
    //         return {...data, meta: { title: `${data.title}` }};
    //       }
    //     }
    //     return data;
    //   }
    // ] as CollectionBeforeChangeHook[]
  }
}

export default Pages;
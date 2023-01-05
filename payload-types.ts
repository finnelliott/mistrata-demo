/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */

export interface Link {
  label: string;
  type?: 'page' | 'url' | 'phone_number' | 'email';
  icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
  page?: string | Page;
  url?: string;
  open_in_new_tab?: boolean;
  phone_number?: string;
  email?: string;
  id?: string;
  blockName?: string;
  blockType: 'link';
}

export interface Hero {
  heading: string;
  subheading?: string;
  ctas: Link[];
  image: Media;
  id?: string;
  blockName?: string;
  blockType: 'hero';
}

export interface Benefits {
  benefits: {
    icon: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp';
    benefit: string;
    description?: string;
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'benefits';
}

export interface Testimonials {
  testimonials: {
    rating: number;
    quote: string;
    name: string;
    caption: string;
    id?: string;
  }[];
  image: Media;
  id?: string;
  blockName?: string;
  blockType: 'testimonial-slider';
}

export interface TeamSlider {
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas: Link[];
  id?: string;
  blockName?: string;
  blockType: 'team-slider';
}

export interface CTA {
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas: Link[];
  testimonials: {
    rating: number;
    quote: string;
    name: string;
    caption: string;
    id?: string;
  }[];
  image: Media;
  id?: string;
  blockName?: string;
  blockType: 'cta';
}

export interface FAQs {
  preheading?: string;
  heading?: string;
  subheading?: string;
  faqs: {
    question: string;
    answer: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  cta: {
    heading: string;
    subheading: string;
    ctas: {
      label: string;
      icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
      type?: 'page' | 'url' | 'phone_number' | 'email';
      page?: string | Page;
      url?: string;
      open_in_new_tab?: boolean;
      phone_number?: string;
      email?: string;
      id?: string;
      blockName?: string;
      blockType: 'link';
    }[];
  };
  id?: string;
  blockName?: string;
  blockType: 'faqs';
}

export interface PageHeader {
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas: {
    label: string;
    icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
  id?: string;
  blockName?: string;
  blockType: 'page-header';
}

export interface RichText {
  content: {
    [k: string]: unknown;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'rich-text';
}

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  caption: string;
  image: Media;
  id?: string;
  blockName?: string;
  blockType: 'testimonial';
}

export interface Locations {
  preheading?: string;
  heading: string;
  subheading?: string;
  locations: {
    name: string;
    opening_hours: {
      sunday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      monday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      tuesday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      wednesday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      thursday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      friday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
      saturday: {
        closed?: boolean;
        open?: string;
        close?: string;
      };
    };
    address: {
      line1: string;
      line2?: string;
      line3?: string;
      city: string;
      state: string;
      postal_code: string;
    };
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'locations';
}

export interface TeamGrid {
  id?: string;
  blockName?: string;
  blockType: 'team-grid';
}

export interface OpenPositions {
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas: {
    label: string;
    icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
  image: Media;
  positions: {
    title: string;
    description: string;
    type: 'full-time' | 'part-time' | 'contract' | 'internship';
    location: string;
    close_date?: string;
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'open-positions';
};

export interface PlanPricing {
  preheading?: string;
  heading: string;
  subheading?: string;
  benefits: {
    icon: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp';
    benefit: string;
    description?: string;
    id?: string;
  }[];
  plan: {
    title: string;
    price: string;
    description: string;
    features: {
      feature: string;
      id?: string;
    }[];
    ctas: Link[];
  };
  id?: string;
  blockName?: string;
  blockType: 'plan-pricing';
}

export interface PricingTable {
  preheading?: string;
  heading: string;
  subheading?: string;
  treatments: Treatment[];
  id?: string;
  blockName?: string;
  blockType: 'pricing-table';
}

export interface ContactOptions {
  options: {
    icon: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp';
    heading: string;
    subheading?: string;
    cta: Link[];
    id?: string;
  }[];
  id?: string;
  blockName?: string;
  blockType: 'contact-options';
}

export interface ContactForm {
  preheading?: string;
  heading: string;
  subheading?: string;
  image: Media;
  id?: string;
  blockName?: string;
  blockType: 'contact-form';
}

export interface LatestBlogPosts {
  preheading?: string;
  heading: string;
  subheading?: string;
  ctas: {
    label: string;
    icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
  id?: string;
  blockName?: string;
  blockType: 'latest-blog-posts';
}

export interface BlogPosts {
  id?: string;
  blockName?: string;
  blockType: 'blog-posts';
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  layout: (
    | Hero
    | Benefits
    | Testimonials
    | TeamSlider
    | CTA
    | FAQs
    | PageHeader
    | RichText
    | Testimonial
    | Locations
    | TeamGrid
    | OpenPositions
    | PlanPricing
    | PricingTable
    | ContactOptions
    | ContactForm
    | LatestBlogPosts
    | BlogPosts
  )[];
  meta: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  slug?: string;
  image: Media;
  role: string;
  short_bio?: string;
  long_bio?: {
    [k: string]: unknown;
  }[];
  twitter_url?: string;
  linkedin_url?: string;
  website_url?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Treatment {
  id: string;
  name: string;
  slug?: string;
  price?: string;
  category: 'preventative' | 'restorative' | 'cosmetic' | 'orthodontics';
  createdAt: string;
  updatedAt: string;
}

export interface HeaderNavigation {
  id: string;
  links: {
    label: string;
    icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
  ctas: {
    label: string;
    icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
    type?: 'page' | 'url' | 'phone_number' | 'email';
    page?: string | Page;
    url?: string;
    open_in_new_tab?: boolean;
    phone_number?: string;
    email?: string;
    id?: string;
    blockName?: string;
    blockType: 'link';
  }[];
}

export interface FooterNavigation {
  id: string;
  columns: {
    heading: string;
    links: {
      label: string;
      icon?: 'Plus' | 'Star' | 'ChatBubbleBottomCenterText' | 'HandThumbUp' | 'Phone';
      type?: 'page' | 'url' | 'phone_number' | 'email';
      page?: string | Page;
      url?: string;
      open_in_new_tab?: boolean;
      phone_number?: string;
      email?: string;
      id?: string;
      blockName?: string;
      blockType: 'link';
    }[];
    id?: string;
  }[];
}

export interface Blog {
  id: string;
  title: string;
  slug?: string;
  image: Media;
  author: Team;
  excerpt: string;
  content: {
    [k: string]: unknown;
  }[];
  reading_time?: number;
  meta: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Business {
  id: string;
  name: string;
  logo: Media;
}